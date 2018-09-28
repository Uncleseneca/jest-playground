import getErrorMessage from './errorMessage'

describe('errorMessage', () => {
  it('returns an error message for valid code', () => {
    expect(getErrorMessage(1)).toMatchSnapshot()
    expect(getErrorMessage(2)).toMatchSnapshot()
    expect(getErrorMessage(3)).toMatchSnapshot()
  })

  it('throws an error if the code is not valid', () => {
    expect(() => {
      getErrorMessage(4)
    }).toThrowErrorMatchingSnapshot()
  })
})
