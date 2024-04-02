import {
	FC,
	PropsWithChildren,
	ReactElement,
	memo,
	useEffect,
	useState
} from 'react'
import { useLocation } from 'react-router-dom'
import cookiesService from 'services/cookies.service'

import { useAuth } from 'hooks/useAuth'
import { useNavigation } from 'hooks/useNavigate'

import { Token } from 'constants/auth/token'
import { imagesRoutes } from 'constants/routes/images.routes'
import { ScreenRoutes } from 'constants/routes/screen.routes'

import styles from './Layout.module.scss'
import { Header } from './header/Header'

interface LayoutProps extends PropsWithChildren {}

export const Layout: FC<LayoutProps> = memo(({ children }) => {
	const [backgroundImage, setBackgroundImage] = useState<string | undefined>(
		undefined
	)
	const [heading, setHeading] = useState<ReactElement | undefined>(undefined)

	const { navigate } = useNavigation()
	const { pathname } = useLocation()
	const { setIsAuth, isAuth } = useAuth()

	const isAuthRoute = pathname === ScreenRoutes.AUTH

	useEffect(() => {
		const token = cookiesService.getCookie(Token.TOKEN)

		if (!token) {
			setIsAuth(false)
			navigate(ScreenRoutes.AUTH)
		}

		if (isAuthRoute && isAuth) {
			navigate(ScreenRoutes.HOME)
		}

		setBackgroundImage(imagesRoutes[pathname].image)
		setHeading(imagesRoutes[pathname].headingComponent)
	}, [pathname, isAuth])

	return (
		<section className={styles.wrapper}>
			{heading && (
				<div
					className={styles.heading}
					style={{
						...(backgroundImage && {
							backgroundImage: `url(${backgroundImage})`
						})
					}}
				>
					{!isAuthRoute ? <Header /> : null}

					{heading}
				</div>
			)}

			{children}
		</section>
	)
})
