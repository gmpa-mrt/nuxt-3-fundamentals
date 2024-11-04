export const useUserStore = defineStore("user", {
    state() {
        return {
            isLoggedIn: false
        }
    },

    getters: {},
    actions: {
       async login() {
            this.isLoggedIn = true
            await useRouter().push("/")
        },
        logout() {
            this.isLoggedIn = false
        }
    }
})
