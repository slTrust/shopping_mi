/* eslint-disable */
// 忽略 eslint

import Mock from 'mockjs'
// 尽量保持 key与 url里定义的一致
let login = Mock.mock({
    "status": 200,
    "message": "短信验证码不正确",
    "data": {}
  })

  let getCode = Mock.mock({
    "status": 200,
    "message": "已发送信息",
    "data": {}
  })

export {
    login,
    getCode
}
