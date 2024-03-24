import { memo } from 'react'

import { useNavigation } from 'hooks/useNavigate'

import { Button } from 'components/ui/button/Button'

import { ScreenRoutes } from 'constants/routes/screen.routes'

import styles from './Home.module.scss'

export const Home = memo(() => {
	const { navigate } = useNavigation()

	return <Button onClick={() => navigate(ScreenRoutes.NEW_WORKOUT)}>New</Button>
})
