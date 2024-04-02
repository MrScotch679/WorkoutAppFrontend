export interface ITimes {
	id: number
	createdAt: Date
	updatedAt: Date
	weight: number
	repeat: number
	isCompleted: boolean
	exerciseLogId: number
	prevWeight: number
	preRepeat: number
}
