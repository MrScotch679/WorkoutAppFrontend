import { memo } from 'react'

import { useGetExerciseData } from '../../hooks/useGetExerciseData'

import { Loader } from 'components/ui/loader/Loadder'

export const ExerciseHeading = memo(() => {
	const { data: exerciseLog, isSuccess } = useGetExerciseData()

	console.log('exerciseLog :>> ', exerciseLog)

	return (
		<>
			{isSuccess ? (
				<div className='heading-wrapper'>
					<img
						src={import.meta.env.VITE_API_URL + exerciseLog?.exercise?.iconPath}
						height='34'
						alt=''
						draggable={false}
					/>
					<h1>{exerciseLog?.exercise?.name}</h1>
				</div>
			) : (
				<Loader />
			)}
		</>
	)
})
