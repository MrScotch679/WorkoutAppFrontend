import { memo } from 'react'

import styles from './AuthHeading.module.scss'

export const AuthHeading = memo(() => {
	return (
		<div className={styles.authHeading}>
			<h1>Auth</h1>
		</div>
	)
})
