import { apiService } from '../api.service'

class ExercisesService {
	url: string = '/exercises'

	async getExercises() {
		return apiService.get(this.url)
	}

	async getExercise(id: string) {
		return apiService.get(`${this.url}/${id}`)
	}

	// TODO: add types
	async createExercise(body: any) {
		return apiService.post(this.url, body)
	}

	async updateExercise(id: string, body: any) {
		return apiService.put(`${this.url}/${id}`, body)
	}

	async deleteExercise(id: string) {
		return apiService.delete(`${this.url}/${id}`)
	}
}

export default new ExercisesService()
