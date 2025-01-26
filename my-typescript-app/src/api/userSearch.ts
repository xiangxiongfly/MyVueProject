import axios from "axios"
import type {ReqSearchUsersResponse} from "./types.ts";

// 添加拦截器
axios.interceptors.response.use(response => response.data)

// 搜索接口
export function reqSearchUsers(keyword: string) {
    return axios.get<any, ReqSearchUsersResponse>("https://api.github.com/search/users", {
        params: {q: keyword}
    })
}