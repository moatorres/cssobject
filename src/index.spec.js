import toObj from './index'

describe('toObj', () => {
  it('Should be defined', () => {
    expect(toObj).toBeDefined()
  })

  it('Should allow us to convert CSS string-literals to JavaScript objects', () => {
    const options = {
      camelCase: false,
      kebabCase: false,
      numbers: false,
    }

    const style = toObj(
      `.button {
        color: tomato;
        margin-bottom: 16px;
        @media (min-width: 40em) {
          color: green;
        }
      }`,
      options
    )

    expect(typeof style).toEqual('object')
    expect(style['.button']).toBeDefined()
    expect(style['.button']).toEqual({
      color: 'tomato',
      'margin-bottom': 16,
    })
  })

  it('Should correctly parse pseudo-classes', () => {
    const style = toObj(`
    .button {
      color: tomato;
      &:hover {
        color: green;
      }
    }
    `)

    expect(style).toMatchSnapshot()
  })

  it('Should match the snapshot', () => {
    const style = toObj(
      `.button {
          color: tomato;
          &:hover {
            color: black;
            fontSize: 1rem;
          }
        }`,
      {
        camelCase: true,
        numbers: true,
      }
    )

    expect(style).toMatchSnapshot()
  })
})
