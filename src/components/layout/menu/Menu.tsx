import { menuData } from './Menu.data'
import styles from './Menu.module.scss'
import cx from 'clsx'

export const Menu = ({ isPopupOpen }) => {
	return (
		<nav className={cx(styles.menu, { [styles.show]: isPopupOpen })}>
			<ul>
				{menuData.map(({ title, link }) => (
					<li key={title}>{title}</li>
				))}
				<li>
					<button>Logout</button>
				</li>
			</ul>
		</nav>
	)
}
