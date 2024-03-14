import { apiService } from '../api.service'

class ExercisesLogService {
	url: string = '/exercises/log'

	getExerciseLog = async (id: string) => {
		return apiService.get(`${this.url}/${id}`)
	}

	// TODO: add types
	createExerciseLog = async (exersiceId: string) => {
		return apiService.post(`${this.url}/${exersiceId}`)
	}

	updateExerciseLog = async (timeId: string, body: any) => {
		return apiService.put(`${this.url}/time/${timeId}`, body)
	}

	completeExerciseLog = async (exersiceLogId: string, body) => {
		return apiService.patch(`${this.url}/complete/${exersiceLogId}`, body)
	}
}

export default new ExercisesLogService()
