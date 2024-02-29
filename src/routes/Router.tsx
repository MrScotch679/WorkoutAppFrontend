import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'

import { NotFound } from 'components/screens/not-found/NotFound'

import { Layout } from 'components/layout/Layout'

import { routesConfig } from './routes.config'

export const Router = () => {
	const { isAuth } = useAuth()

	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					{routesConfig.map(route => {
						if (route.isAuth && !isAuth) return

						return (
							<Route
								key={route.path}
								path={route.path}
								element={<route.component />}
							/>
						)
					})}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}
