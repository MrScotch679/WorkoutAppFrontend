import cx from 'clsx'
import { memo } from 'react'

import { Loader } from 'components/ui/loader/Loadder'

import styles from './Profile.module.scss'
import { useProfile } from './useProfile'

export const Profile = memo(() => {
	const { isLoading, data } = useProfile()

	return (
		<div>
			<div
				className={cx(styles.wrapper, 'wrapper-inner-page')}
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{isLoading ? (
					<Loader />
				) : data?.images?.length ? (
					<div className={styles.before_after}>
						{/* TODO: add types */}
						{data?.images?.map((image, index: number) => (
							<div key={image}>
								<div className={styles.heading}>
									{index === 1 ? 'After' : 'Before'}
								</div>
								<img src={image} alt={image} draggable={false} />
							</div>
						))}
					</div>
				) : (
					<div className={styles.center}>No images</div>
				)}
			</div>
		</div>
	)
})
