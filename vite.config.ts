import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			asserts: '/src/assets',
			constants: '/src/constants',
			components: '/src/components',
			services: '/src/services',
			providers: '/src/providers',
			hooks: '/src/hooks',
			types: '/src/types'
		}
	}
})
