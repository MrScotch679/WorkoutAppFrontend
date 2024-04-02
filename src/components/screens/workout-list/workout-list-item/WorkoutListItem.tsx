import { FC, memo } from 'react'
import { IWorkout } from 'types/workout/workout'

import styles from './WorkoutListItem.module.scss'

interface IWorkoutListItem {
	workout: IWorkout
	onClickCreateWorkoutLog: () => void
}

export const WorkoutListItem: FC<IWorkoutListItem> = memo(
	({ workout, onClickCreateWorkoutLog }) => {
		return (
			<div className={styles.item}>
				<button
					aria-label='Create new workout'
					onClick={onClickCreateWorkoutLog}
				>
					<span>{workout.name}</span>
				</button>
			</div>
		)
	}
)
