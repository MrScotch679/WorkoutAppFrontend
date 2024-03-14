import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import WorkoutLogService from 'services/workout/workout-log.service'

export const useGetWorkoutDataById = () => {
	const [queryParameters] = useSearchParams()
	const currentWorkoutId = queryParameters.get('id') || ''

	return useQuery(
		['getWorkout', currentWorkoutId],
		() => WorkoutLogService.getWorkoutLog(currentWorkoutId),
		{
			select: ({ data }) => data
		}
	)
}
