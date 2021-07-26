export const toUpperCase = (s) => String(s).toUpperCase()

export const kebabToCamel = (str) =>
  str.replace(/(-[a-z])/g, toUpperCase).replace(/-/g, '')

export const camelToKebab = (str) =>
  str.replace(/([A-Z])/g, (s) => '-' + s.toLowerCase())

export const parsePx = (val) =>
  /px$/.test(val)
    ? !Number.isNaN(val) && parseFloat(val.replace(/px$/, ''))
    : val
