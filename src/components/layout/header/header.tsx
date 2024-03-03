import { FC, memo } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'

import { Hamburger } from '../hamburger/Hamburger'

import styles from './Header.module.scss'

interface HeaderProps {}

export const Header: FC<HeaderProps> = memo(() => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button onClick={() => navigate('/')}>
					<BiArrowBack />
				</button>
			) : (
				<button onClick={() => navigate('/profile')}>
					<FiUser />
				</button>
			)}

			<Hamburger />
		</header>
	)
})
