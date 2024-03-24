import { memo } from 'react'

import styles from './Table.module.scss'
import { TableHeader } from './table-header/TableHeader'
import { TableRow } from './table-row/TableRow'

export const Table = memo(({ exerciseData }) => (
	<div className={styles.wrapper}>
		<TableHeader />
		{exerciseData?.times.map(item => <TableRow item={item} key={item.id} />)}
	</div>
))
