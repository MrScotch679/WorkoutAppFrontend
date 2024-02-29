import { ScreenRoutes } from './screen.routes'

interface ImagesRoutes {
	image: string
	heading?: string
}

export const imagesRoutes: Record<ScreenRoutes | string, ImagesRoutes> = {
	[ScreenRoutes.HOME]: {
		image: '/images/home-bg.jpg'
	},
	[ScreenRoutes.AUTH]: {
		image: '/images/auth-bg.png',
		heading: 'Auth'
	},
	[ScreenRoutes.NEW_WORKOUT]: {
		image: ''
	},
	[ScreenRoutes.PROFILE]: {
		image: ''
	},
	[ScreenRoutes.NEW_EXERCISE]: {
		image: ''
	}
}
