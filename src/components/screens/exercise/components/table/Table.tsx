import { FC, memo, useCallback } from 'react'
import { IExerciseLog } from 'types/exercise/exercise-log'
import { IBodyUpdateExerciseLog } from 'types/methods/update-exercise-log'

import styles from './Table.module.scss'
import { TableHeader } from './table-header/TableHeader'
import { TableRow } from './table-row/TableRow'

interface ITable {
	exerciseData: IExerciseLog
	onClickSubmit: (body: { id: number; body: IBodyUpdateExerciseLog }) => void
}

export const Table: FC<ITable> = memo(({ exerciseData, onClickSubmit }) => {
	const handleUpdateExercise = useCallback(
		(id: number) => (body: IBodyUpdateExerciseLog) => {
			onClickSubmit({ id, body })
		},
		[]
	)

	return (
		<div className={styles.wrapper}>
			<TableHeader />
			{exerciseData?.times.map(item => (
				<TableRow
					item={item}
					key={item.id}
					onClickSubmit={handleUpdateExercise(item.id)}
				/>
			))}
		</div>
	)
})
