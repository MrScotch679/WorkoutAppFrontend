import { AxiosResponse } from 'axios'
import { IProfile } from 'types/profile'

import { apiService } from './api.service'

class AuthService {
	getUserProfile = async (): Promise<AxiosResponse<IProfile>> => {
		return apiService.get(`/users/profile`)
	}
}

export default new AuthService()
