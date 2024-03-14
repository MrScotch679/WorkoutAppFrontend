import { apiService } from '../api.service'

class ExercisesService {
	url: string = '/exercises'

	getExercises = async () => {
		return apiService.get(this.url)
	}

	getExercise = async (id: string) => {
		return apiService.get(`${this.url}/${id}`)
	}

	// TODO: add types
	createExercise = async (body: any) => {
		return apiService.post(this.url, body)
	}

	updateExercise = async (id: string, body: any) => {
		return apiService.put(`${this.url}/${id}`, body)
	}

	deleteExercise = async (id: string) => {
		return apiService.delete(`${this.url}/${id}`)
	}
}

export default new ExercisesService()
