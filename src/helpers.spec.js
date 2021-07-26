import { toUpperCase, kebabToCamel, camelToKebab, parsePx } from './helpers'

const words = ['size', 'color', 'height']
const pixelValues = ['16px', '32px', '64px']
const camels = ['fontSize', 'backgroundColor', 'lineHeight']
const kebabs = ['font-size', 'background-color', 'line-height']

describe('toUpperCase', () => {
  it('Should be defined', () => {
    expect(toUpperCase).toBeDefined()
  })

  it('Should return upper-cased strings', () => {
    const isUpperCase = (s) => s === s.toUpperCase()
    const res = words.map(toUpperCase)
    expect(res.every(isUpperCase)).toBeTrue()
  })
})

describe('kebabToCamel', () => {
  it('Should be defined', () => {
    expect(kebabToCamel).toBeDefined()
  })

  it('Should convert kebab-case strings to camelCase strings', () => {
    const res = kebabs.map(kebabToCamel)
    expect(res).toEqual(camels)
  })
})

describe('camelToKebab', () => {
  it('Should be defined', () => {
    expect(camelToKebab).toBeDefined()
  })

  it('Should convert kebab-case strings to camelCase strings', () => {
    const res = camels.map(camelToKebab)
    expect(res).toEqual(kebabs)
  })
})

describe('parsePx', () => {
  it('Should be defined', () => {
    expect(parsePx).toBeDefined()
  })

  it('Should convert a "px" value into a number', () => {
    const isNumber = (v) => typeof v === 'number'
    const res = pixelValues.map(parsePx)
    expect(res.every(isNumber)).toBeTrue()
  })

  it('Should NOT convert non-pixel values', () => {
    const mixedValues = ['1rem', 'tomato', 'rgba(1, 1, 1, 0.9)']
    const res = mixedValues.map(parsePx)
    expect(res).toEqual(mixedValues)
  })
})
