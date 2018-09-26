class Student {
  constructor () {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/users/'
  }

  create (id, name) {
    if (!this.validate(id)) {
      throw new Error('invalid student: it doesnt have an id')
    }
    return { id, name }
  }

  validate (id) {
    return Boolean(id > 0)
  }

  fetch (id) {
    return fetch(`${this.baseUrl}${id}`).then(student => student.json())
  }
}

export default new Student()
