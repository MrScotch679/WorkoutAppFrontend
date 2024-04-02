import { IStatistics } from './statistics'

export interface IProfile {
	id: number
	email: string
	createdAt: Date
	updatedAt: Date
	name: string
	images: string[]
	statistics: IStatistics[]
}
