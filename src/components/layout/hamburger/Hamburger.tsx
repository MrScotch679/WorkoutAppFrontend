import { memo } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'

import { useClickOutside } from 'hooks/useClickOutside'

import { Menu } from '../menu/Menu'

import styles from './Hamburger.module.scss'

export const Hamburger = memo(() => {
	const { ref, isShow, setIsShow } = useClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(prev => !prev)}>
				{isShow ? <RxCross2 /> : <HiMenuAlt3 />}
			</button>
			<Menu isPopupOpen={isShow} setPopupState={setIsShow} />
		</div>
	)
})
