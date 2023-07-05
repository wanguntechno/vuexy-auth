import axios from 'axios'

const axiosIns = axios.create({
    // You can add your headers here
    // ================================
    baseURL: 'http://localhost:3500/'
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  })
  
  export default axiosIns