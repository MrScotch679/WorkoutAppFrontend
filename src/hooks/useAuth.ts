import { AuthContext } from 'providers/AuthProvider'
import { useContext } from 'react'

interface AuthContextProps {
	isAuth: boolean
	setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export const useAuth = (): AuthContextProps => {
	const contextValue = useContext(AuthContext)

	if (!contextValue) {
		throw new Error('useAuth must be used within an AuthProvider')
	}

	return contextValue
}
