import { AxiosResponse } from 'axios'
import { IWorkoutLog } from 'types/workout/workout-log'

import { apiService } from '../api.service'

class WorkoutLogService {
	url: string = '/workouts/log'

	getWorkoutLog = async (id: string): Promise<AxiosResponse<IWorkoutLog>> => {
		return apiService.get(`${this.url}/${id}`)
	}

	createWorkoutLog = async (
		workoutId: string | number
	): Promise<AxiosResponse<IWorkoutLog>> => {
		return apiService.post(`${this.url}/${workoutId}`)
	}

	completeWorkoutLog = async (
		workoutLogId: string | number,
		body: { isCompleted: boolean }
	): Promise<AxiosResponse<IWorkoutLog>> => {
		return apiService.patch(`${this.url}/complete/${workoutLogId}`, body)
	}
}

export default new WorkoutLogService()
