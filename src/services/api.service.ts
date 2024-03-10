import axios from 'axios'

import { Token } from 'constants/auth/token'

import CookiesService from './cookies.service'

export const apiService = axios.create({
	baseURL: `${import.meta.env.VITE_API_URL}/api`,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `${Token.BEARER} ${CookiesService.getCookie(Token.TOKEN)}`
	}
})
