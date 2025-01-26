export interface User {
    id: number
    login: string
    avatar_url: string
    html_url: string
}

export type Users = User[]

export enum LoadingState {
    none,
    loading,
    success,
    error,
}

export interface UserSearchState {
    firstView: boolean
    loadingState: LoadingState
    users: Users
    errorMsg: string
}

export interface ReqSearchUsersResponse {
    items: Users
}