import { memo } from 'react'

import styles from './WorkoutListItem.module.scss'

export const WorkoutListItem = memo(({ workout, onClickCreateWorkoutLog }) => {
	return (
		<div className={styles.item}>
			<button aria-label='Create new workout' onClick={onClickCreateWorkoutLog}>
				<span>{workout.name}</span>
			</button>
		</div>
	)
})
