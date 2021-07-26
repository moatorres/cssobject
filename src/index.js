import { parse } from 'css'
import { compile, serialize, stringify } from 'stylis'
import { kebabToCamel, parsePx, camelToKebab } from './helpers'

const assign = Object.assign

const toObj = (css, opts) => {
  const compiled = compile(css)
  const serialized = serialize(compiled, stringify)
  const parsed = parse(serialized)
  // @ts-ignore
  return transform(opts)(parsed.stylesheet.rules)
}

// prettier-ignore
const transform = (opts) => (rules, result = {}) => {
  rules.forEach((rule) => {
    if (rule.type === 'media') {
      const key = '@media ' + rule.media
      const decs = transform(opts)(rule.rules)
      result[key] = decs
      return
    }

    const [key] = rule.selectors

    if (key.length)
      assign(result, {
        [key]: getDeclarations(rule.declarations, opts)
      })
    else assign(result, getDeclarations(rule.declarations, opts))
  })
  return result
}

const formatKey = (prop, opts = {}) => {
  if (opts.camelCase) return kebabToCamel(prop)
  if (opts.kebabCase) return camelToKebab(prop)
  return prop
}

// prettier-ignore
const formatValue = (value, opts = {}) => opts.numbers ? value : parsePx(value)

const getDeclarations = (decs, opts = {}) => {
  const objectSchema = (o) => ({
    key: formatKey(o.property, opts),
    value: formatValue(o.value, opts),
  })

  const reducer = (a, b) => {
    a[b.key] = b.value
    return a
  }

  return decs.map(objectSchema).reduce(reducer, {})
}

export default toObj
