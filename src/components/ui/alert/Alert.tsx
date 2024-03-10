import cn from 'clsx'
import { FC, memo } from 'react'

import styles from './Alert.module.scss'

interface AlertProps {
	text: string
	type?: 'success' | 'info' | 'warning' | 'error'
}

export const Alert: FC<AlertProps> = memo(({ type = 'success', text }) => {
	return <div className={cn(styles.alert, styles[type])}>{text}</div>
})
