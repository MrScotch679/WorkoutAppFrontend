import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import WorkoutService from 'services/workout/workout.service'

export const useNewWorkout = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm({
		mode: 'onChange'
	})

	const { isSuccess, isLoading, mutate } = useMutation(
		['createWorkout'],
		WorkoutService.createWorkout,
		{
			onSuccess: () =>
				reset({
					name: '',
					exercisesIds: []
				})
		}
	)

	const onSubmit = data =>
		mutate({
			name: data.name,
			exercisesIds: data.exercisesIds.map((exercise: any) => exercise.value)
		})

	return useMemo(
		() => ({
			errors,
			isLoading,
			control,
			isSuccess,
			onSubmit,
			register,
			handleSubmit
		}),
		[errors, isLoading]
	)
}
