import axios from 'axios'

import { Token } from 'constants/auth/token'

import CookiesService from './cookies.service'

export const apiService = axios.create({
	baseURL: 'http://localhost:5000/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `${Token.BEARER} ${CookiesService.getCookie(Token.TOKEN)}`
	}
})
