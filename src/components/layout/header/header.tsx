import { FaArrowLeft } from 'react-icons/fa6'

import styles from './Header.module.scss'
import { useAuth } from 'hooks/useAuth'
import { Hamburger } from '../hamburger/Hamburger'

export const Header = () => {
	const { isAuth } = useAuth()

	console.log('isAuth :>> ', isAuth)

	return (
		<header className={styles.header}>
			<button>
				<FaArrowLeft color='white' />
			</button>

			<Hamburger />
		</header>
	)
}
