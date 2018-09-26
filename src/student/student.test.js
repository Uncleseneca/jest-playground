import Student from './student'

describe('Student', () => {
  it('can create a student passing an id and name', () => {
    const student = Student.create(2)
    expect(student.id).toBe(2)
  })

  it('throws an error if id is not passed', () => {
    expect(() => {
      const student = Student.create()
    }).toThrow('invalid student: it doesnt have an id')
  })
})
