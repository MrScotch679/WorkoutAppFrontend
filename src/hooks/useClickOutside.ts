import { useEffect, useState, useRef } from 'react'

export const useClickOutside = (initialValue: boolean) => {
	const [isShow, setIsShow] = useState(initialValue)

	const ref = useRef<HTMLDivElement>(null)

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)

		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return {
		ref,
		isShow,
		setIsShow
	}
}
