import cx from 'clsx'
import { memo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useCompleteExercise } from './hooks/useCompleteExercise'
import { useGetExerciseData } from './hooks/useGetExerciseData'
import { useUpdateExercise } from './hooks/useUpdateExercise'

import { Table } from './components/table/Table'
import { Alert } from 'components/ui/alert/Alert'
import { Button } from 'components/ui/button/Button'
import { Loader } from 'components/ui/loader/Loadder'

import styles from './Exercise.module.scss'

export const Exercise = memo(() => {
	const [queryParameters] = useSearchParams()
	const currentExerciseId = queryParameters.get('exerciseId') || ''

	const { exerciseData, isSuccess, isLoading } = useGetExerciseData()
	const { updateTime, errorChange } = useUpdateExercise(currentExerciseId)
	const { completeExercise, errorCompleted } = useCompleteExercise()

	if (!exerciseData) {
		return null
	}

	return (
		<div
			className={cx(
				styles.exerciseWrapper,
				'wrapper-inner-page',
				'wrapper-no-padding'
			)}
		>
			{errorChange ? <Alert type='error' text={errorChange as string} /> : null}
			{errorCompleted ? (
				<Alert type='error' text={errorCompleted as string} />
			) : null}

			{isLoading ? (
				<Loader />
			) : (
				<Table exerciseData={exerciseData} onClickSubmit={updateTime} />
			)}

			<Button
				aria-label='Complete Exercise'
				onClick={() =>
					completeExercise({
						id: currentExerciseId,
						isCompleted: exerciseData?.isCompleted
					})
				}
			>
				{exerciseData?.isCompleted ? 'Reopen Exercise' : 'Complete Exercise'}
			</Button>

			{isSuccess && exerciseData?.times?.length === 0 ? (
				<Alert type='warning' text='Times not found' />
			) : null}
		</div>
	)
})
