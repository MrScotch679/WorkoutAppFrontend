import cx from 'clsx'
import { memo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import ExercisesService from 'services/exercises/exercises.service'
import { ICreateExercise } from 'types/methods/create-exercise'

import { Alert } from 'components/ui/alert/Alert'
import { Button } from 'components/ui/button/Button'
import { Field } from 'components/ui/filed/Field'
import { Loader } from 'components/ui/loader/Loadder'

import styles from './NewExercise.module.scss'
import { exersiceList } from './exercise.config'
import { getIconPath } from './getIconPath'

export const NewExercise = memo(() => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		control
	} = useForm<ICreateExercise>({
		mode: 'onChange'
	})

	const { isSuccess, isLoading, mutate } = useMutation(
		['createExercise'],
		ExercisesService.createExercise,
		{
			onSuccess: () => reset()
		}
	)

	const onSubmit = (data: ICreateExercise) => mutate(data)

	return (
		<div className='wrapper-inner-page'>
			{isSuccess && <Alert text='Exercise created' />}

			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					type='text'
					placeholder='Enter name'
					register={register}
					registerId='name'
					registerOptions={{ required: 'Name is required' }}
					error={errors.name?.message as string}
				/>

				<Field
					type='number'
					placeholder='Enter times'
					register={register}
					registerId='times'
					registerOptions={{
						valueAsNumber: true,
						validate: value => value > 0,
						required: 'Times is required'
					}}
					error={errors.times?.message as string}
				/>

				<Controller
					name='iconPath'
					control={control}
					render={({ field: { value, onChange } }) => (
						<div className={styles.images}>
							{exersiceList.map(name => (
								<img
									key={`ex img ${name}`}
									src={`${import.meta.env.VITE_API_URL}${getIconPath(name)}`}
									alt={name}
									className={cx({
										[styles.active]: value === getIconPath(name)
									})}
									onClick={() => onChange(getIconPath(name))}
									draggable={false}
								/>
							))}
						</div>
					)}
				/>

				{isLoading ? <Loader /> : <Button>{'Create'}</Button>}
			</form>
		</div>
	)
})
