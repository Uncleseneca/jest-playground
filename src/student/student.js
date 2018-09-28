import { validateStudent } from './student-utils'
import studentService from './student-service'

export default function createStudent (id, name) {
  const student = { id, name }
  if (!validateStudent(student)) {
    throw new Error("Invalid student: it doesn't have an id")
  }

  student.fetch = () => studentService.get(student.id)

  return student
}
