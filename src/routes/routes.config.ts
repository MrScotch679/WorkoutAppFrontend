import { NewExercise } from 'components/screens/new-exercise/NewExercise'
import { WorkoutList } from 'components/screens/workout-list/WorkoutList'
import { Workout } from 'components/screens/workout/Workout'

import { Auth, Home, NewWorkout, Profile } from 'components/screens'

import { ScreenRoutes } from 'constants/routes/screen.routes'

export const routesConfig = [
	{
		path: ScreenRoutes.HOME,
		component: Home,
		isAuth: false
	},

	{
		path: ScreenRoutes.AUTH,
		component: Auth,
		isAuth: false
	},

	{
		path: ScreenRoutes.NEW_WORKOUT,
		component: NewWorkout,
		isAuth: true
	},

	{
		path: ScreenRoutes.PROFILE,
		component: Profile,
		isAuth: false
	},

	{
		path: ScreenRoutes.NEW_EXERCISE,
		component: NewExercise,
		isAuth: true
	},

	{
		path: '/workout',
		component: Workout,
		isAuth: true
	},
	{
		path: '/workouts',
		component: WorkoutList,
		isAuth: true
	}
	/* 
	{
		path: '/exercise/:id',

		component: SingleExercise,
		isAuth: true,
	}, */
]
