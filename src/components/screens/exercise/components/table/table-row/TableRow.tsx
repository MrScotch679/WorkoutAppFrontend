import cn from 'clsx'
import { memo } from 'react'

import styles from '../Table.module.scss'

export const TableRow = memo(({ item }) => {
	const prevWeight = item.prevWeight || 0
	const weight = item.weight || 0
	const isCompleted = item.isCompleted
	const rowId = item.id

	const kg = <i>kg/</i>

	return (
		<div
			className={cn(styles.row, {
				[styles.completed]: isCompleted
			})}
			key={`time ${rowId}`}
		>
			<div className={styles.opacity} key={`Prev${rowId}/${prevWeight}`}>
				<input type='number' defaultValue={prevWeight} disabled />
				{kg}
				<input type='number' defaultValue={item.prevRepeat || 0} disabled />
			</div>

			<div key={`RepeatWeight ${rowId}/${weight}`}>
				<input
					type='tel'
					pattern='[0-9]*'
					defaultValue={weight}
					disabled={isCompleted}
				/>
				{kg}
				<input
					type='number'
					defaultValue={item.repeat}
					disabled={isCompleted}
				/>
			</div>

			<div key={`Completed${rowId}/${isCompleted}`}>
				<img
					src={
						isCompleted
							? '/images/exercises/check-completed.svg'
							: '/images/exercises/check.svg'
					}
					className={styles.checkbox}
					alt=''
					/* onClick={() => {
			 changeState({
				 timeIndex: item.id,
				 key: 'completed',
				 value: !item.isCompleted
			 })
		 }} */
				/>
			</div>
		</div>
	)
})
