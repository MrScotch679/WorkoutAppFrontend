import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import ExercisesLogService from 'services/exercises/exercises-log.service'

export const useGetExerciseData = () => {
	const [queryParameters] = useSearchParams()
	const currentExerciseId = queryParameters.get('exerciseId')

	return useQuery(
		['getWorkout', currentExerciseId],
		() => {
			if (!currentExerciseId) {
				return
			} else {
				return ExercisesLogService.getExerciseLog(currentExerciseId)
			}
		},
		{
			select: ({ data }) => data
		}
	)
}
