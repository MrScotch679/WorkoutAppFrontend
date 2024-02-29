import { ButtonHTMLAttributes, FC, memo } from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = memo(({ children, ...rest }) => {
	return (
		<div className={styles.wrapper}>
			<button className={styles.button} {...rest}>
				{children}
			</button>
		</div>
	)
})
