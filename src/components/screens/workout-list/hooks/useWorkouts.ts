import { useMemo } from 'react'
import { useMutation, useQuery } from 'react-query'
import WorkoutLogService from 'services/workout/workout-log.service'
import WorkoutsService from 'services/workout/workout.service'

import { useNavigation } from 'hooks/useNavigate'

import { ScreenRoutes } from 'constants/routes/screen.routes'

export const useWorkouts = () => {
	const { navigate } = useNavigation()

	const { data, isSuccess } = useQuery(
		['getWorkouts'],
		() => WorkoutsService.getWorkouts(),
		{
			select: ({ data }) => data
		}
	)

	const {
		mutate: createWorkoutLog,
		isLoading,
		isSuccess: isSuccessWorkoutLogCreate,
		error
	} = useMutation(['createWorkoutLog'], WorkoutLogService.createWorkoutLog, {
		onSuccess: ({ data }) =>
			navigate(`${ScreenRoutes.WORKOUT}?workoutId=${data.id}`)
	})

	return useMemo(
		() => ({
			data,
			isSuccess,
			isLoading,
			isSuccessWorkoutLogCreate,
			error,
			createWorkoutLog
		}),
		[isLoading, data, isSuccess, isSuccessWorkoutLogCreate]
	)
}
