import { IExerciseLog } from 'types/exercise/exercise-log'

import { IWorkout } from './workout'

export interface IWorkoutLog {
	id: number | string
	createdAt: Date
	updatedAt: Date
	isCompleted: boolean
	userId: number
	workoutId: number
	workout: IWorkout
	minute: number
	exerciseLogs: IExerciseLog[]
}
