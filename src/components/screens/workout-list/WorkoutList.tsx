import cx from 'clsx'
import { memo } from 'react'
import { IWorkout } from 'types/workout/workout'

import { useWorkouts } from './hooks/useWorkouts'

import { Alert } from 'components/ui/alert/Alert'
import { Loader } from 'components/ui/loader/Loadder'

import { WorkoutListItem } from './workout-list-item/WorkoutListItem'

export const WorkoutList = memo(() => {
	const { data, isLoading, isSuccess, createWorkoutLog } = useWorkouts()

	return (
		<div className={cx('wrapper-inner-page', 'wrapper-no-padding')}>
			{isLoading ? <Loader /> : null}

			{isSuccess ? (
				<div>
					{data.map((workout: IWorkout) => (
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
