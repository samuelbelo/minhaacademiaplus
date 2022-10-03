import axios from 'axios';
import router from "@/router";

export default ({ requiresAuth = false }) => {
	const options = {baseURL: "", headers: {Authorization: ""}};
	options.baseURL = '6/api/';
	if (requiresAuth) {
		options.headers.Authorization = ''
	}
	const instance = axios.create(options);
	instance.interceptors.response.use(response => {
		console.log('good boi!');
		return response;
	}, error => {
		return Promise.reject(error);
	});
	instance.interceptors.request.use(request => {
		const token = localStorage.getItem('tokenAcesso')
		if(token) {
			// @ts-ignore
			request.headers['Authorization'] = `Bearer ${token}`
		} else {
			router.push('/login')
		}
	})
	return instance;
};
