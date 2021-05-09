import axios from 'ts-axios-new'

const urlMap = {
  development: '/',
  production: 'http://ustbhuangyi.com/sell/'
}
const baseURL = urlMap[process.env.NODE_ENV]
const ERR_OK = 0

export function get (url) {
  return function (params = {}) {
    return axios.get(baseURL + url, { params }).then(response => {
      const { errno, data } = response.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch(error => {
      console.log(error)
    })
  }
}
