import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
	getPublicContent() {
		return axios.get(API_URL + 'all');
	}

	getUserBoard() {
		// @ts-ignore
		return axios.get(API_URL + 'user', { headers: authHeader() });
	}

	getModeratorBoard() {
		// @ts-ignore
		return axios.get(API_URL + 'mod', { headers: authHeader() });
	}

	getAdminBoard() {
		// @ts-ignore
		return axios.get(API_URL + 'admin', { headers: authHeader() });
	}
}

export default new UserService();
