import { useNavigate } from 'react-router-dom'

import { Button } from 'components/ui/button/Button'

import { ScreenRoutes } from 'constants/routes/screen.routes'

import styles from './Home.module.scss'

export const Home = () => {
	const navigate = useNavigate()

	return (
		<div>
			<Button onClick={() => navigate(ScreenRoutes.NEW_WORKOUT)}>New</Button>
			<h1 className={styles.heading}>Home page</h1>
		</div>
	)
}
