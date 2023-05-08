import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Автоматический скролл вверх при переключении страниц
export default function ScrollToTop() {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}
