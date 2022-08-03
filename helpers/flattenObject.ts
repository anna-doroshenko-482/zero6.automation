const flattenObject = (obj, prefix = '', res = {}) =>
  Object.entries(obj).reduce((r, [key, val]) => {
    const k = `${prefix}${key}`
    if (typeof val === 'object') {
      flattenObject(val, `${k}.`, r)
    } else {
      res[k] = val
    }
    return r
  }, res)

export { flattenObject }
