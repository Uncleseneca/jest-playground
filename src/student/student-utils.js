import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com/users/'

export const fetchStudent = async id => {
  const { data: student } = await axios.get(baseUrl + id)

  return student
}

export const validateStudent = student => {
  return Boolean(student.id && student.id > 0)
}
