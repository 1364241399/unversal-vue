import Cookie from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
     // 获取token值或空如果没有设置，则返回空字符串或无效Token值
     return Cookie.get(TokenKey)
}

export function setToken(token) { 
     // 保存token值到Cookie中 不带过期时间 支持秒杀、1天
     return Cookie.set(TokenKey, token)
}

export function removenToken(){
    return Cookie.remove(TokenKey)
}