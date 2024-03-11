import { memo } from 'react'
import { Link } from 'react-router-dom'

import { useNewWorkout } from './hooks/useNewWorkout'

import { Alert } from 'components/ui/alert/Alert'
import { Button } from 'components/ui/button/Button'
import { Field } from 'components/ui/filed/Field'
import { Loader } from 'components/ui/loader/Loadder'

import { ScreenRoutes } from 'constants/routes/screen.routes'

import { ExercisesSelect } from './exercises-select/ExercisesSelect'

export const NewWorkout = memo(() => {
	const {
		onSubmit,
		register,
		control,
		handleSubmit,
		isSuccess,
		errors,
		isLoading
	} = useNewWorkout()

	return (
		<div className={'wrapper-inner-page'}>
			{isSuccess && <Alert text='Workout was created' />}

			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					type='text'
					placeholder='Enter name'
					register={register}
					registerId='name'
					registerOptions={{ required: 'Name is required' }}
					error={errors.name?.message as string}
				/>

				<Link to={ScreenRoutes.NEW_EXERCISE} className='dark-link'>
					Add new exercise
				</Link>

				<ExercisesSelect control={control} />

				{isLoading ? <Loader /> : <Button>{'Create'}</Button>}
			</form>
		</div>
	)
})
