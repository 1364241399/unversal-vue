import request from '@/untils/request'

export const getRouters = () =>{
    return request({
        url: '/system/menu/list',
        method: 'get'
      })
}