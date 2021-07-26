interface Options {
  camelCase?: boolean
  kebabCase?: boolean
  numbers?: boolean
}

declare const toObj = <T>(css: string, options?: Options) => any

export default toObj
