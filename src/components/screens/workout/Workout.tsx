import cx from 'clsx'
import { memo } from 'react'
import { IExerciseLog } from 'types/exercise/exercise-log'

import { useCompleteWorkout } from './hooks/useCompleteWorkout'
import { useGetWorkoutDataById } from './hooks/useGetWorkoutDataById'

import { Button } from 'components/ui/button/Button'
import { Loader } from 'components/ui/loader/Loadder'

import { WorkoutDetails } from './workout-details/WorkoutDetails'

export const Workout = memo(() => {
	const { workoutLog, isSuccess, currentWorkoutId } = useGetWorkoutDataById()
	const { completeWorkout } = useCompleteWorkout()

	if (!currentWorkoutId || !workoutLog) {
		return null
	}

	return (
		<div className={cx('wrapper-inner-page', 'wrapper-no-padding')}>
			{isSuccess ? (
				<div>
					{workoutLog?.exerciseLogs?.map(
						(exerciseLog: IExerciseLog, index: number) => (
							<WorkoutDetails key={index} exerciseLog={exerciseLog} />
						)
					)}
				</div>
			) : (
				<Loader />
			)}

			<Button
				onClick={() =>
					completeWorkout({
						currentWorkoutId,
						isCompleted: workoutLog?.isCompleted
					})
				}
			>
				{workoutLog?.isCompleted ? 'Reopen Workout' : 'Complete Workout'}
			</Button>
		</div>
	)
})
