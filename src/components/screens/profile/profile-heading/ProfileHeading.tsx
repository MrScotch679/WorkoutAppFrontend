import { Loader } from 'components/ui/loader/Loadder'

import { ProfileStatistics } from '../profile-statistics/ProfileStatistics'
import { useProfile } from '../useProfile'

import styles from './ProfileHeading.module.scss'

export const ProfileHeading = () => {
	const { isLoading, data } = useProfile()

	return (
		<div className={styles.center}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<img
						src='/images/header/user.svg'
						alt='Profile'
						height='56'
						draggable={false}
					/>
					<h1>{data?.email}</h1>
				</>
			)}

			<ProfileStatistics />
		</div>
	)
}
