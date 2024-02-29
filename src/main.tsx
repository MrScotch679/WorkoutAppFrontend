import { AuthProvider } from 'providers/AuthProvider'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import './assets/styles/index.scss'
import { Router } from './routes/Router'

const rootElement = document.getElementById('root')

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<Router />
				</AuthProvider>
			</QueryClientProvider>
		</React.StrictMode>
	)
} else {
	console.error('Root element not found')
}
