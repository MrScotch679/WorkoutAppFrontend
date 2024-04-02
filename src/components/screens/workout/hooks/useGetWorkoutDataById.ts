import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import WorkoutLogService from 'services/workout/workout-log.service'

export const useGetWorkoutDataById = () => {
	const [queryParameters] = useSearchParams()
	const currentWorkoutId = queryParameters.get('workoutId')

	const {
		data: workoutLog,
		isSuccess,
		isLoading
	} = useQuery(
		['getWorkout', String(currentWorkoutId)],
		() => {
			if (!currentWorkoutId) {
				return
			} else {
				return WorkoutLogService.getWorkoutLog(currentWorkoutId)
			}
		},
		{
			select: data => data?.data
		}
	)

	return useMemo(
		() => ({ workoutLog, isSuccess, currentWorkoutId }),
		[workoutLog, isSuccess, currentWorkoutId, isLoading]
	)
}
