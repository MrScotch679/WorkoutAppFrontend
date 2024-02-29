import Cookies from 'js-cookie'

class CookiesService {
	getCookie(name: string) {
		return Cookies.get(name)
	}

	setCookie(name: string, value: string) {
		Cookies.set(name, value)
	}

	removeCookie(name: string) {
		Cookies.remove(name)
	}
}
export default new CookiesService()
