import { memo } from 'react'

import styles from '../Table.module.scss'

export const TableHeader = memo(() => {
	return (
		<div className={styles.row}>
			<div>
				<span>Previous</span>
			</div>
			<div>
				<span>Repeat & Weight</span>
			</div>
			<div>
				<span>Completed</span>
			</div>
		</div>
	)
})
