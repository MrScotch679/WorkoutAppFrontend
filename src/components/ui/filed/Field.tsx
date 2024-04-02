/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, InputHTMLAttributes, memo } from 'react'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'

import styles from './Field.module.scss'

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
	registerId: string
	register: UseFormRegister<any>
	registerOptions?: RegisterOptions
	error?: string
}

export const Field: FC<FieldProps> = memo(props => {
	const { register, registerId, registerOptions, error, ...rest } = props

	return (
		<div>
			<input
				{...register(registerId, registerOptions)}
				{...rest}
				className={styles.input}
			/>
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
})
