import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import { useExercisesList } from '../hooks/useExercisesList'

export const ExercisesSelect = ({ control }) => {
	const { data: exersiceList = [] } = useExercisesList()

	return (
		<Controller
			name='exercisesIds'
			control={control}
			render={({ field: { value, onChange } }) => (
				<ReactSelect
					isMulti
					name='Exercises'
					placeholder='Select exercise'
					classNamePrefix='select2-selection'
					options={exersiceList?.map(exercise => ({
						value: exercise?.id,
						label: exercise?.name
					}))}
					value={value}
					onChange={onChange}
				/>
			)}
		/>
	)
}
