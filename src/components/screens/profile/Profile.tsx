import styles from './Profile.module.scss'
import { useProfile } from './useProfile'

export const Profile = () => {
	const { isLoading, data } = useProfile()

	const mockImages = [
		'https://picsum.photos/id/237/200/300',
		'https://picsum.photos/id/238/200/300'
	]

	return (
		<div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div className={styles.before_after}>
					{mockImages?.map((image, index) => (
						<div key={image}>
							<div className={styles.heading}>
								{index === 1 ? 'After' : 'Before'}
							</div>
							<img src={image} alt={image} draggable={false} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
