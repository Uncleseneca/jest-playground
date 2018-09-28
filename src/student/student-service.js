import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com/users/'

const studentService = {
  get: async (id) => {
    const { data: student } = await axios.get(baseUrl + id)

    return student
  }
}

export default studentService
