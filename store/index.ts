import { defineStore } from "pinia"
import type { T_Order, T_User } from "~/types"

interface I_Store {
    user: T_User | null
    orders: T_Order[]
}
interface I_GettersStore {
    getAuthUser: () => I_Store['user']
}
interface I_actionsStore {
    tryAuth: (phone: string, password: string) => I_Store['user'] | null
    getOrders: () => void
    setUser: (user: number) => void
    exitUser: () => void
}
export const useUserStore = defineStore<string, I_Store, I_GettersStore, I_actionsStore>('user', {
    state: () => ({ user: null, orders: [] }),
    getters: {
        getAuthUser() {
            return this.user
        },
    },
    actions: {
        async setUser(id) {
            if (!id) return
            return await $fetch<T_User>('/api/user/id', {
                query: { id },
            }).then(res => {
                if (res?.id) {
                    this.user = res
                    localStorage.setItem('user_id', String(id))
                    this.getOrders()
                }
            })
        },
        exitUser() {
            this.user = null
            localStorage.setItem('user_id', '')
            this.orders = []
        },
        async tryAuth(phone, password) {
            return await $fetch<T_User | null>('/api/user/auth', {
                query: { phone, password },
            }).then(res => {
                if (res?.id) {
                    this.setUser(res.id)
                }
            })
        },
        async getOrders() {
            return await $fetch<T_Order[]>('/api/order/byUser', {
                query: { user_id: this.user?.id },
            }).then(res => {
                this.orders = res
            })
        },
    },
})
