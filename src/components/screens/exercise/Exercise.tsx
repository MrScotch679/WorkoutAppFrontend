import { memo } from 'react'

import { useGetExerciseData } from './hooks/useGetExerciseData'

import { Table } from './components/table/Table'
import { Alert } from 'components/ui/alert/Alert'
import { Loader } from 'components/ui/loader/Loadder'

import styles from './Exercise.module.scss'

export const Exercise = memo(() => {
	const { data: exerciseData, isSuccess, isLoading } = useGetExerciseData()

	return (
		<div
			className='wrapper-inner-page'
			style={{ paddingLeft: 0, paddingRight: 0 }}
		>
			{isLoading ? <Loader /> : <Table exerciseData={exerciseData} />}

			{isSuccess && exerciseData?.times?.length === 0 ? (
				<Alert type='warning' text='Times not found' />
			) : null}
		</div>
	)
})
