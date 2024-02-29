import cx from 'clsx'
import { FC, PropsWithChildren, memo, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import cookiesService from 'services/cookies.service'

import { useAuth } from 'hooks/useAuth'

import { Token } from 'constants/auth/token'
import { imagesRoutes } from 'constants/routes/images.routes'
import { ScreenRoutes } from 'constants/routes/screen.routes'

import styles from './Layout.module.scss'
import { Header } from './header/Header'

interface LayoutProps extends PropsWithChildren {
	heading?: string
	backLink?: string
}

export const Layout: FC<LayoutProps> = memo(props => {
	const { children, backLink = '/' } = props

	const [backgroundImage, setBackgroundImage] = useState<string | undefined>(
		undefined
	)
	const [heading, setHeading] = useState<string | undefined>(undefined)

	const navigate = useNavigate()
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
		setHeading(imagesRoutes[pathname].heading)
	}, [pathname, isAuth])

	return (
		<section
			className={cx(styles.wrapper, { [styles.otherPage]: !!heading })}
			style={{
				...(backgroundImage && {
					backgroundImage: `url(${backgroundImage})`
				})
			}}
		>
			{!isAuthRoute ? <Header backLink={backLink} /> : null}
			{heading && (
				<div className={styles.heading}>
					<h1 className={styles.heading}>{heading}</h1>
				</div>
			)}

			{children}
		</section>
	)
})
