import { validateStudent } from './studentUtils'
import studentService from './studentService'

export default function createStudent (id, name) {
  const student = { id, name }
  if (!validateStudent(student)) {
    throw new Error("Invalid student: it doesn't have an id")
  }

  student.fetch = () => studentService.get(student.id)
  return student
}
