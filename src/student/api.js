import axios from 'axios'

export default {
  get: async (url) => {
    const { data: student } = await axios.get(url)

    return student
  }
}
