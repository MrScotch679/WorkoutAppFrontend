import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import WorkoutLogService from 'services/workout/workout-log.service'

import { ScreenRoutes } from 'constants/routes/screen.routes'

export const useCompleteWorkout = () => {
	const navigate = useNavigate()
	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['updateCompleteWorkout'],
		({
			currentWorkoutId,
			isCompleted
		}: {
			currentWorkoutId: string
			isCompleted: boolean
		}) =>
			WorkoutLogService.completeWorkoutLog(currentWorkoutId, {
				isCompleted: !isCompleted
			}),

		{
			onSuccess: ({ data }) => {
				if (data?.isCompleted) {
					navigate(ScreenRoutes.WORKOUTS)
				} else {
					console.log('data :>> ', data)
					queryClient.refetchQueries(['getWorkout', String(data?.workoutId)])
				}
			}
		}
	)

	return { completeWorkout: mutate }
}
