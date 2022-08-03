import fs from 'fs'
import xml2js from 'xml2js'

export class XML2JSON {
  content: any
  source: string
  destination: string

  constructor(arg?) {
    this.source = arg.source ? arg.source : null
    this.content = this.source ? fs.readFileSync(arg.source) : null
    this.destination = arg.dest ? arg.dest : null
  }

  parseXMLDoc(content?) {
    return new Promise((resolve, reject) => {
      xml2js.parseString(content || this.content, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

  async parseBaseXML(invoiceData) {
    const builder = new xml2js.Builder()
    const parsedDocument: any = await this.parseXMLDoc()
    parsedDocument.Transfer.Data[0].Unit[0].$.value = invoiceData
    return { builder, parsedDocument }
  }

  async toJson() {
    const builder = new xml2js.Builder()
    const parsedDocument: any = await this.parseXMLDoc()
    return { builder, parsedDocument }
  }

  async parseXML() {
    const builder = new xml2js.Builder()
    const parsedDocument: any = await this.parseXMLDoc()
    return { builder, parsedDocument }
  }

  createXML(builder, parsedDocument) {
    const xml = builder.buildObject(parsedDocument)
    const re = /root/gi
    const newXML = xml.replace(re, 'Document')
    return new Promise((resolve, reject) => {
      fs.writeFile(`${this.destination}`, newXML, function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(newXML)
        }
      })
    })
  }

  async editLoadXMLDoc(data) {
    // eslint-disable-next-line prefer-const
    let { builder, parsedDocument } = await this.parseBaseXML(data)
    return this.createXML(builder, parsedDocument)
  }

  deleteFile(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      fs.unlink(this.destination, (err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }
}
