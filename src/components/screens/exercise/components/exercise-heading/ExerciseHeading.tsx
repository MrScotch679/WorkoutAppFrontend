import { memo } from 'react'

import { useGetExerciseData } from '../../hooks/useGetExerciseData'

import { Loader } from 'components/ui/loader/Loadder'

import styles from './ExerciseHeading.module.scss'

export const ExerciseHeading = memo(() => {
	const { exerciseData, isSuccess } = useGetExerciseData()

	return (
		<>
			{isSuccess ? (
				<div className='heading-wrapper'>
					<div className={styles.exerciseHeadingWrapper}>
						<img
							src={
								import.meta.env.VITE_API_URL + exerciseData?.exercise?.iconPath
							}
							alt=''
							draggable={false}
						/>
						<h1>{exerciseData?.exercise?.name}</h1>
					</div>
				</div>
			) : (
				<Loader />
			)}
		</>
	)
})
