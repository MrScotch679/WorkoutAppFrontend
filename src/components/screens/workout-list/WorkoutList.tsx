import { memo } from 'react'

import { useWorkouts } from './hooks/useWorkouts'

import { Alert } from 'components/ui/alert/Alert'
import { Loader } from 'components/ui/loader/Loadder'

import { WorkoutListItem } from './workout-list-item/WorkoutListItem'

export const WorkoutList = memo(() => {
	const { data, isLoading, isSuccess, createWorkoutLog } = useWorkouts()

	return (
		<div
			className='wrapper-inner-page'
			style={{ paddingLeft: 0, paddingRight: 0 }}
		>
			{isLoading ? <Loader /> : null}

			{isSuccess ? (
				<div /* className={styles.wrapper} */>
					{data.map(workout => (
						<WorkoutListItem
							key={workout.id}
							workout={workout}
							onClickCreateWorkoutLog={() => createWorkoutLog(workout.id)}
						/>
					))}
				</div>
			) : (
				<Loader />
			)}

			{isSuccess && !data?.length ? (
				<Alert type='warning' text='Workouts not found' />
			) : null}
		</div>
	)
})
