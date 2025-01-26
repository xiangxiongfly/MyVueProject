import {defineStore} from "pinia";
import {LoadingState, type UserSearchState} from "../api/types.ts";
import {reqSearchUsers} from "../api/userSearch.ts";

const useUserSearchStore = defineStore("userSearch", {
    state: (): UserSearchState => {
        return {
            firstView: true,
            loadingState: LoadingState.none,
            errorMsg: "",
            users: []
        }
    },
    actions: {
        async searchUsers(keyword: string) {
            this.firstView = false
            this.loadingState = LoadingState.loading
            try {
                const result = await reqSearchUsers(keyword)
                this.loadingState = LoadingState.success
                this.users = result.items
            } catch (error: any) {
                this.loadingState = LoadingState.error
                this.errorMsg = error.message
            }
        }
    }
})

export default useUserSearchStore