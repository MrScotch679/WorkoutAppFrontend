import Cookies from 'js-cookie'

import { AuthType } from 'constants/auth/auth'

import { apiService } from './api.service'

class AuthService {
	async authUser(email: string, password: string, type: AuthType) {
		try {
			const { data } = await apiService.post(`/auth/${type}`, {
				email,
				password
			})

			if (data?.token) {
				Cookies.set('token', data.token)
			}

			return data
		} catch (error) {
			console.log('error :>> ', error)
		}
	}
}

export default new AuthService()
