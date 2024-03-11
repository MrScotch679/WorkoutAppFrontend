import { useQuery } from 'react-query'
import ExercisesService from 'services/exercises/exercises.service'

export const useExercisesList = () =>
	useQuery(['getExercises'], () => ExercisesService.getExercises(), {
		select: ({ data }) => data
	})
