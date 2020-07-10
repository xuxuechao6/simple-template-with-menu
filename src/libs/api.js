import http from '@/libs/http'


//登录获取token
export const login = (data) => {
    return http.request({
        url: '/user/login',
        method: 'post',
        data: data
    })
}

//获取设备信息
export const getDeviceInfo = () => {
    return http.request({
        url: '/pushMsg/getDeviceInfo',
        method: 'get',
    })
}