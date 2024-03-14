import { ReactElement } from 'react'

import { AuthHeading } from 'components/screens/auth/heading/AuthHeading.tsx/AuthHeading'
import { HomeHeading } from 'components/screens/home/home-heading/HomeHeading'
import { HeadingNewExercise } from 'components/screens/new-exercise/new-exercise-heading/NewExerciseHeading'
import { ProfileHeading } from 'components/screens/profile/profile-heading/ProfileHeading'
import { WorkoutHeading } from 'components/screens/workout/workout-heading/WorkoutHeading'

import { ScreenRoutes } from './screen.routes'

interface ImagesRoutes {
	image: string
	headingComponent?: ReactElement
}

export const imagesRoutes: Record<ScreenRoutes | string, ImagesRoutes> = {
	[ScreenRoutes.HOME]: {
		image: '/images/home-bg.jpg',
		headingComponent: <HomeHeading />
	},
	[ScreenRoutes.AUTH]: {
		image: '/images/auth-bg.png',
		headingComponent: <AuthHeading />
	},
	[ScreenRoutes.NEW_WORKOUT]: {
		image: '/images/new-workout-bg.jpg',
		headingComponent: <div />
	},
	[ScreenRoutes.PROFILE]: {
		image: '/images/profile-bg.jpg',
		headingComponent: <ProfileHeading />
	},
	[ScreenRoutes.NEW_EXERCISE]: {
		image: '/images/new-exercise-bg.jpg',
		headingComponent: <HeadingNewExercise />
	},
	[ScreenRoutes.WORKOUT]: {
		image: '/images/workout-bg.jpg',
		headingComponent: <WorkoutHeading />
	}
}
