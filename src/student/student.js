import { validateStudent } from './student-utils'

export default function createStudent (id, name, fetchStudent) {
  const student = { id, name }
  if (!validateStudent(student)) {
    throw new Error("Invalid student: it doesn't have an id")
  }

  student.fetch = () => fetchStudent(student.id)

  return student
}
