import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import ExercisesLogService from 'services/exercises/exercises-log.service'

import { ScreenRoutes } from 'constants/routes/screen.routes'

export const useCompleteExercise = () => {
	const navigate = useNavigate()

	const { mutate, error: errorCompleted } = useMutation(
		['updateCompleteExercise'],
		({ id, isCompleted }: { id: string; isCompleted: boolean }) =>
			ExercisesLogService.completeExerciseLog(id, {
				isCompleted: !isCompleted
			}),
		{
			onSuccess: ({ data }) =>
				navigate(`${ScreenRoutes.WORKOUT}?workoutId=${data?.workoutLogId}`)
		}
	)

	return { completeExercise: mutate, errorCompleted }
}
