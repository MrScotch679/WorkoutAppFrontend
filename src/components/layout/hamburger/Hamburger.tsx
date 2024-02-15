import { useState } from 'react'
import styles from './Hamburger.module.scss'

import { RxCross2 } from 'react-icons/rx'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Menu } from '../menu/Menu'

export const Hamburger = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsOpen(prev => !prev)}>
				{isOpen ? <RxCross2 color='white' /> : <HiMenuAlt3 color='white' />}
			</button>
			<Menu isPopupOpen={isOpen} />
		</div>
	)
}
