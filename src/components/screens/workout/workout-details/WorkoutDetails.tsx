import cx from 'clsx'
import { FC, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { IExerciseLog } from 'types/exercise/exercise-log'

import { ScreenRoutes } from 'constants/routes/screen.routes'

import styles from './WorkoutDetails.module.scss'

interface IWorkoutDetails {
	exerciseLog: IExerciseLog
}

export const WorkoutDetails: FC<IWorkoutDetails> = memo(({ exerciseLog }) => {
	const navigation = useNavigate()

	return (
		<div
			className={cx(styles.item, {
				[styles.completed]: exerciseLog.isCompleted
			})}
		>
			<button
				aria-label='Move to exercise'
				onClick={() =>
					navigation(`${ScreenRoutes.EXERCISE}?exerciseId=${exerciseLog.id}`)
				}
			>
				<span>{exerciseLog.exercise.name}</span>
				<img
					src={import.meta.env.VITE_API_URL + exerciseLog.exercise.iconPath}
					alt='exercise'
					draggable={false}
				/>
			</button>
		</div>
	)
})
