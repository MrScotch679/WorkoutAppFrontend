import { memo } from 'react'

import { useNavigation } from 'hooks/useNavigate'

import { Button } from 'components/ui/button/Button'

import { ScreenRoutes } from 'constants/routes/screen.routes'

export const Home = memo(() => {
	const { navigate } = useNavigation()

	return (
		<div className='wrapper-inner-page'>
			<Button onClick={() => navigate(ScreenRoutes.NEW_WORKOUT)}>New</Button>
		</div>
	)
})
