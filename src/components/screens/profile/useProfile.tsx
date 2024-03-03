import { useQuery } from 'react-query'
import UserService from 'services/user.service'

export const useProfile = () =>
	useQuery(['getProfile'], () => UserService.getUserProfile(), {
		select: ({ data }) => data
	})
