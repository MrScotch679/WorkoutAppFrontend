import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import ExercisesLogService from 'services/exercises/exercises-log.service'

export const useGetExerciseData = () => {
	const [queryParameters] = useSearchParams()
	const currentExerciseId = queryParameters.get('exerciseId')

	const {
		data: exerciseData,
		isSuccess,
		isLoading
	} = useQuery(
		['getExercise', currentExerciseId],
		() => {
			if (!currentExerciseId) {
				return
			} else {
				return ExercisesLogService.getExerciseLog(currentExerciseId)
			}
		},
		{
			select: data => data?.data
		}
	)

	return useMemo(
		() => ({ exerciseData, isSuccess, isLoading }),
		[currentExerciseId, exerciseData, isSuccess, isLoading]
	)
}
