class Calculator {
  add (a, b) {
    this.failFastChecks(a, b)
    return a + b
  }

  substract (a, b) {
    this.failFastChecks(a, b)
    return a - b
  }

  failFastChecks (a, b) {
    this.checkForUndefinedArgs(a, b)
    this.checkForArgsTypes(a, b)
  }

  checkForUndefinedArgs (...args) {
    args.some(arg => {
      if (typeof arg === 'undefined') {
        throw new Error('must supply 2 arguments, supplied only 1')
      }
    })
  }

  checkForArgsTypes (...args) {
    args.some(arg => {
      if (typeof arg !== 'number') {
        throw new Error('both args should be numbers')
      }
    })
  }
}

export default Calculator
