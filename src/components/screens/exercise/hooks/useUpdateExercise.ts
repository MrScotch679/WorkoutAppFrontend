import { useMemo } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import ExercisesLogService from 'services/exercises/exercises-log.service'
import { IBodyUpdateExerciseLog } from 'types/methods/update-exercise-log'

export const useUpdateExercise = (currentExerciseId: string) => {
	const queryClient = useQueryClient()

	const { mutate, error: errorChange } = useMutation(
		['updateExercise'],
		({ id, body }: { id: number; body: IBodyUpdateExerciseLog }) =>
			ExercisesLogService.updateExerciseLog(id, {
				repeat: Number(body.repeat),
				weight: Number(body.weight),
				isCompleted: !body.isCompleted
			}),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['getExercise', currentExerciseId])
			}
		}
	)

	return useMemo(
		() => ({ updateTime: mutate, errorChange }),
		[errorChange, currentExerciseId]
	)
}
