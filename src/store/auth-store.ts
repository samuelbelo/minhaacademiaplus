import { defineStore } from "pinia";
import { login, logout, register } from "@/services/auth.service";

// @ts-ignore
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
	? { status: { loggedIn: true }, user }
	: { status: { loggedIn: false }, user: null };

export const useAuthStore = defineStore('auth', {
	state: () => (initialState),
	getters: {
		isLoggedIn: (state): boolean => state.status.loggedIn
	},
	actions: {
		login(user) {
			return login(user).then(
				user => {
					this.status.loggedIn = true
					return Promise.resolve(user);
				},
				error => {
					this.status.loggedIn = false
					return Promise.reject(error);
				}
			);
		},
		logout({ commit }) {
			logout();
			this.status.loggedIn = false
		},
		register({ commit }, user) {
			return register(user).then(
				response => {
					//commit('registerSuccess');
					return Promise.resolve(response.data);
				},
				error => {
					this.status.loggedIn = false
					return Promise.reject(error);
				}
			);
		}
	}

})
