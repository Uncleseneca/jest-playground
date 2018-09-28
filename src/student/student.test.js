import createStudent from './student'
import * as utils from './student-utils'
jest.mock('./student-service.js')

describe('Student', () => {
  const spy = jest.spyOn(utils, 'validateStudent')

  afterEach(() => {
    spy.mockClear()
  })

  it('can create a student passing an id', () => {
    const student = createStudent(2)
    expect(student.id).toBe(2)
  })

  it('throws an error when id isnt passed', () => {
    const msg = "Invalid student: it doesn't have an id"
    expect(() => createStudent()).toThrow(msg)
  })

  it('calls validateStudent function', () => {
    const student = createStudent(2)
    expect(utils.validateStudent).toBeCalled()
  })

  it('calls validateStudent function 1 time', () => {
    const spy = jest.spyOn(utils, 'validateStudent')
    const student = createStudent(2, 'Lil Pump')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})

describe('student.fetch', () => {
  it('should fetch a student with id', async () => {
    const student = createStudent(1, '')
    const data = await student.fetch()
    expect(data.username).toBe('Bret')
  })
})
