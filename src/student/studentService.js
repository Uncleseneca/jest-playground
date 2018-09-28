import api from './api'
const baseUrl = 'https://jsonplaceholder.typicode.com/users/'

const studentService = {
  get: async (id) => api.get(baseUrl + id)

}

export default studentService
