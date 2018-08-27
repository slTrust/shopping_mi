// 开发时用rap的host 上线打包时host置空 换成你公司的host
const host = 'http://rap2api.taobao.org/app/mock/83365'
const url = {
  getCode: '/api/getCode',
  login: '/api/login'
}

Object.keys(url).forEach(key => {
  url[key] = host + url[key]
})

export default url
