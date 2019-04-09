describe('test example 1', () => {
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4)
    expect(2 + 2).toMatchSnapshot()
  })

  it('object assignment', () => {
    const data = { one: 1 }
    data['two'] = 2
    expect(data).toEqual({ one: 1, two: 2 })
  })

  it('null', () => {
    const n = null
    expect(n).toBeDefined()
  })

  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ]

  it('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer')
  })
})

describe('test example 2', () => {
  it('call a mock function', () => {
    const mockFunc = jest.fn()
    mockFunc()
    expect(mockFunc).toBeCalled()
  })
})
