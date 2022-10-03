import axios from "axios";

const API_URL = "https://minha-academia-plus-api.azurewebsites.net/";

export const login = (user) => {
	return axios
		.post(API_URL + "login", {
			username: user.username,
			password: user.password
		})
		.then(response => {
			if (response.data.accessToken) {
				localStorage.setItem("user", JSON.stringify(response.data));
			}

			return response.data;
		});
};

export const logout = () => {
	localStorage.removeItem("user");
};

export const register = (user) => {
	return axios.post(API_URL + "signup", {
		username: user.username,
		email: user.email,
		password: user.password
	});
};

