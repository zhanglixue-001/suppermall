import { request } from "./requset"

export function getHomeMultData(){
    return request({
        url:'/home/multidata'
    })
}