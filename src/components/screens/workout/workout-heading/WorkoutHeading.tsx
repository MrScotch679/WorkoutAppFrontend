import { memo } from 'react'

import { useGetWorkoutDataById } from '../hooks/useGetWorkoutDataById'

import { Loader } from 'components/ui/loader/Loadder'

import styles from './WorkoutHeading.module.scss'

export const WorkoutHeading = memo(() => {
	const { workoutLog, isSuccess } = useGetWorkoutDataById()

	return (
		<div className='heading-wrapper'>
			{isSuccess ? (
				<div>
					<time className={styles.time}>{`${workoutLog?.minute} min.`}</time>
					<h1>{workoutLog?.workout?.name}</h1>
				</div>
			) : (
				<Loader />
			)}
		</div>
	)
})
