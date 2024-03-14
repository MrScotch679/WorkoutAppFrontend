import { apiService } from '../api.service'

class WorkoutLogService {
	url: string = '/workouts/log'

	getWorkoutLog = async (id: string) => {
		return apiService.get(`${this.url}/${id}`)
	}

	// TODO: add types
	createWorkoutLog = async (workoutId: string) => {
		return apiService.post(`${this.url}/${workoutId}`)
	}

	completeExerciseLog = async (workoutLogId: string) => {
		return apiService.patch(`${this.url}/complete/${workoutLogId}`)
	}
}

export default new WorkoutLogService()
