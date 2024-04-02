import cn from 'clsx'
import { FC, memo } from 'react'
import { useForm } from 'react-hook-form'
import { IBodyUpdateExerciseLog } from 'types/methods/update-exercise-log'
import { ITimes } from 'types/times'

import styles from '../Table.module.scss'

interface ITableRow {
	item: ITimes
	onClickSubmit: (body: IBodyUpdateExerciseLog) => void
}

export const TableRow: FC<ITableRow> = memo(({ item, onClickSubmit }) => {
	const prevWeight = item.prevWeight
	const weight = item.weight
	const isCompleted = item.isCompleted
	const rowId = item.id

	const kg = <i>kg/</i>

	const { register, handleSubmit } = useForm({
		defaultValues: {
			weight,
			repeat: item.repeat
		}
	})

	return (
		<form
			key={`time ${rowId}`}
			className={cn(styles.row, {
				[styles.completed]: isCompleted
			})}
			onSubmit={handleSubmit(data => onClickSubmit({ ...data, isCompleted }))}
		>
			<div className={styles.opacity} key={`Prev${rowId}/${prevWeight}`}>
				<input type='number' defaultValue={prevWeight} disabled />
				{kg}
				<input type='number' defaultValue={item.preRepeat} disabled />
			</div>

			<div key={`RepeatWeight ${rowId}/${weight}`}>
				<input
					type='number'
					{...register('weight', {
						required: 'Weight is required'
					})}
					defaultValue={weight}
					disabled={isCompleted}
				/>
				{kg}
				<input
					type='number'
					{...register('repeat', {
						required: 'Repeat is required'
					})}
					defaultValue={item.repeat}
					disabled={isCompleted}
				/>
			</div>

			<div key={`Completed${rowId}/${isCompleted}`}>
				<button type='submit' className={styles.checkbox}>
					<img
						src={
							isCompleted
								? '/images/exercises/check-completed.svg'
								: '/images/exercises/check.svg'
						}
					/>
				</button>
			</div>
		</form>
	)
})
