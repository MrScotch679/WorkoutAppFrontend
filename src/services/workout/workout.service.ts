import { apiService } from '../api.service'

class WorkoutsService {
	url: string = '/workouts'

	getWorkouts = async () => {
		return apiService.get(this.url)
	}

	getWorkout = async (id: string) => {
		return apiService.get(`${this.url}/${id}`)
	}

	// TODO: add types
	createWorkout = async (body: any) => {
		console.log('this.url :>> ', this.url)
		return apiService.post(this.url, body)
	}

	updateWorkout = async (id: string, body: any) => {
		return apiService.put(`${this.url}/${id}`, body)
	}

	deleteWorkout = async (id: string) => {
		return apiService.delete(`${this.url}/${id}`)
	}
}

export default new WorkoutsService()
