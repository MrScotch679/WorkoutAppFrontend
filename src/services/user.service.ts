import { apiService } from './api.service'

class AuthService {
	async getUserProfile() {
		return apiService.get(`/users/profile`)
	}
}

export default new AuthService()
