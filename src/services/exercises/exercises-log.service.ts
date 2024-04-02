import { AxiosResponse } from 'axios'
import { IExerciseLog } from 'types/exercise/exercise-log'
import { IBodyUpdateExerciseLog } from 'types/methods/update-exercise-log'

import { apiService } from '../api.service'

class ExercisesLogService {
	url: string = '/exercises/log'

	getExerciseLog = async (id: string): Promise<AxiosResponse<IExerciseLog>> => {
		return apiService.get(`${this.url}/${id}`)
	}

	createExerciseLog = async (
		exersiceId: string
	): Promise<AxiosResponse<IExerciseLog>> => {
		return apiService.post(`${this.url}/${exersiceId}`)
	}

	updateExerciseLog = async (timeId: number, body: IBodyUpdateExerciseLog) => {
		return apiService.put(`${this.url}/time/${timeId}`, body)
	}

	completeExerciseLog = async (
		exersiceLogId: string,
		body: {
			isCompleted: boolean
		}
	) => {
		return apiService.patch(`${this.url}/complete/${exersiceLogId}`, body)
	}
}

export default new ExercisesLogService()
