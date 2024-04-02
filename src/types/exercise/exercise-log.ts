import { ITimes } from 'types/times'

import { IExercise } from './exercise'

export interface IExerciseLog {
	id: number
	createdAt: Date
	updatedAt: Date
	isCompleted: boolean
	userId: number
	workoutLogId: number
	exerciseId: number
	exercise: IExercise
	times: ITimes[]
}
