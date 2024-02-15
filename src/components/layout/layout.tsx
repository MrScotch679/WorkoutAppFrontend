import { FC, PropsWithChildren, memo } from 'react'
import { Header } from './header/header'

interface LayoutProps extends PropsWithChildren {}

export const Layout: FC<LayoutProps> = memo(({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
})
