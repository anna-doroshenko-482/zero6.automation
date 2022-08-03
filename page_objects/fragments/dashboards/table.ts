import { ChainablePromiseElement } from 'node_modules/webdriverio/build/types'

class Table {
  private root: ChainablePromiseElement<Promise<WebdriverIO.Element>>

  constructor(root = $('[class="table table-bordered table-hover"]')) {
    //Селектор всей таблицы
    this.root = root
  }

  public async getData(value?: string): Promise<any> {
    const removePrefix = `function removePrefix(headTitle) {
      return headTitle.charAt(0) === headTitle.charAt(0).toUpperCase() &&
        headTitle.charAt(1) === headTitle.charAt(1).toUpperCase() ? headTitle.slice(1) : headTitle
    }`

    const buildHashTableFormat = `function buildHashTableFormat(headerCells) {
      return Array.prototype.reduce.call(headerCells, function(acc, current, index) {
        const isCheckbox = !!current.querySelector('input[type="checkbox"]')
        let title = removePrefix(current.innerText.trim())

        if(!title.length) {acc['EmptyTitle' + index] = index; return acc}
        if(acc.hasOwnProperty(title)) {acc[title + index] = index; return acc}
        acc[title] = index
        return acc
      }, {})
    }`

    const getVisible = `function getVisible(nL /*elements list*/) {
      return Array.prototype.filter.call(nL, function(el) {
        const rects = el.getBoundingClientRect()
        return (rects.height !== 0 && rects.width !== 0)
      })
    }`

    return browser.executeScript(
      `
        function getData(rootTbl) {
          const removePrefix = ${removePrefix}
          const buildHash = ${buildHashTableFormat}
          const getVisible = ${getVisible}

          let tblHeader = document.querySelector(rootTbl).querySelector('thead')
          if(tblHeader) {tblHeader = getVisible([tblHeader]).length ? tblHeader : null}
          let headerCells = tblHeader.querySelectorAll('th')
          let bodyRows = document.querySelector(rootTbl).querySelector('tbody').querySelectorAll('tr')

          const headerHash = buildHash(headerCells)
          const headerHashKeys = Object.keys(headerHash)
          let bodyData = Array.prototype.map.call(bodyRows, function(row) {
            if(row.children.length === 1 && headerHashKeys.length !== 1) {
              const el = {Separator: row.querySelector('td').innerText.trim().replace(RegExp(
                String.fromCharCode(160) + '|' + String.fromCharCode(32), 'ig'), ' ')}
              return el
            }

            return headerHashKeys.reduce(function(acc, current, index, hashArr) {
              if(row.children.length !== hashArr.length) {
                acc['Separator'] = row.innerText; return acc
              }

              acc[current] = {}
              acc[current] = row.children[headerHash[current]].innerText.trim()
              return acc
            }, {})
          })

          bodyData = bodyData.filter(function(rowObj) {return !!Object.keys(rowObj).length})
          return bodyData
        }
        return getData(arguments[0])`,
      [`${(await this.root).selector}`],
    )
  }
}

export { Table }
