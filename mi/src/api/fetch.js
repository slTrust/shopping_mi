import axios from 'axios'
import url from './index.js'
function fetch (api, data) {
  return new Promise((resolve, reject) => {
    axios.post(url[api], data).then(res => {
      // 做一些统一的业务处理
      resolve(res.data)
    })
  })
}

export default fetch
