import { IExercise } from 'types/exercise/exercise'

export interface IWorkout {
	id: number
	name: string
	exercises: IExercise[]
	createdAt: Date
	updatedAt: Date
}
