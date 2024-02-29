import Cookies from 'js-cookie'
import {
	Dispatch,
	FC,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useState
} from 'react'

interface AuthContextProps {
	isAuth: boolean
	setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextProps | undefined>(
	undefined
)

interface AuthProviderProps extends PropsWithChildren {}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get('token'))

	const contextValue: AuthContextProps = {
		isAuth,
		setIsAuth
	}

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	)
}
