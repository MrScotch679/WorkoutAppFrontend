import cx from 'clsx'
import { FC, memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cookiesService from 'services/cookies.service'

import { useAuth } from 'hooks/useAuth'

import { Token } from 'constants/auth/token'

import { menuData } from './Menu.data'
import styles from './Menu.module.scss'

interface MenuProps {
	isPopupOpen: boolean
	setPopupState: React.Dispatch<React.SetStateAction<boolean>>
}

export const Menu: FC<MenuProps> = memo(({ isPopupOpen, setPopupState }) => {
	const navigate = useNavigate()
	const { setIsAuth } = useAuth()

	const logoutHandler = () => {
		cookiesService.removeCookie(Token.TOKEN)
		setIsAuth(false)
		setPopupState(false)

		navigate('/auth')
	}

	return (
		<nav className={cx(styles.menu, { [styles.show]: isPopupOpen })}>
			<ul>
				{menuData.map(({ title, link }) => (
					<li key={title}>
						<Link to={link}>{title}</Link>
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
})
