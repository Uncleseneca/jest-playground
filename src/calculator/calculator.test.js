import Calculator from './calculator'

describe('Calculator', () => {
  it('should be instanceable', () => {
    expect(new Calculator()).toBeInstanceOf(Calculator)
  })

  it('should add', () => {
    const calculator = new Calculator()
    expect(calculator.add(5, 7)).toBe(12)
  })

  it('should substract', () => {
    const calculator = new Calculator()
    expect(calculator.substract(5, 7)).toBe(-2)
  })

  it('should throw an error when less than 2 args are suplied', () => {
    const calculator = new Calculator()
    expect(() => calculator.substract(1)).toThrow(
      Error('must supply 2 arguments, supplied only 1')
    )
  })

  it('should throw an Error if args arent numbers', () => {
    const calculator = new Calculator()
    expect(() => calculator.add('2', 7)).toThrow(
      Error('both args should be numbers')
    )
  })
})
