import { apiService } from '../api.service'

const url = '/workouts'

class WorkoutsService {
	url: string = '/workouts'

	async getWorkouts() {
		return apiService.get(this.url)
	}

	async getWorkout(id: string) {
		return apiService.get(`${this.url}/${id}`)
	}

	// TODO: add types
	createWorkout = async (body: any) => {
		console.log('this.url :>> ', this.url)
		return apiService.post(this.url, body)
	}

	async updateWorkout(id: string, body: any) {
		return apiService.put(`${this.url}/${id}`, body)
	}

	async deleteWorkout(id: string) {
		return apiService.delete(`${this.url}/${id}`)
	}
}

export default new WorkoutsService()
