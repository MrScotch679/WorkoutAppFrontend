import { memo } from 'react'

import { useGetWorkoutDataById } from './hooks/useGetWorkoutDataById'

import { Loader } from 'components/ui/loader/Loadder'

import { WorkoutDetails } from './workout-details/WorkoutDetails'

export const Workout = memo(() => {
	const { data: workoutLog, isSuccess, error } = useGetWorkoutDataById()

	return (
		<div
			className='wrapper-inner-page'
			style={{ paddingLeft: 0, paddingRight: 0 }}
		>
			<div style={{ width: '90%', margin: '0 auto' }}>
				{isSuccess ? (
					<div>
						{workoutLog?.exerciseLogs?.map((exerciseLog, index) => (
							<WorkoutDetails key={index} exerciseLog={exerciseLog} />
						))}
					</div>
				) : (
					<Loader />
				)}
				{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
			</div>
		</div>
	)
})
