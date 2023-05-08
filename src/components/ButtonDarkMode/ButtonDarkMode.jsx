import { useEffect, useRef } from 'react'
import { useLocalStorage } from '../../utils/useLocalSorage'
import detectDarkMode from '../../utils/detectDarkMode'

import sun from './sun.svg'
import moon from './moon.svg'

import './ButtonDarkMode.css'

const ButtonDarkMode = () => {
	// Использование кастомного хука 'useLocalStorage'
	const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

	// Ссылка на кнопку, которая переключает тему
	const btnRef = useRef(null)

	// Добавление/удаление кнопке класса 'active', а также добавление/удаление класса 'dark'
	// Срабатывает на старте и при любом изменении 'darkMode'
	useEffect(() => {
		if (darkMode === 'dark') {
			document.body.classList.add('dark')
			btnRef.current.classList.add('dark-mode-btn--active')
		} else {
			document.body.classList.remove('dark')
			btnRef.current.classList.remove('dark-mode-btn--active')
		}
	}, [darkMode])

	// Переключение темы ( светлая / темная )
	const toggleDarkMode = () => {
		setDarkMode(currentValue => {
			return currentValue === 'light' ? 'dark' : 'light'
		})
	}

	return (
		<button ref={btnRef} className='dark-mode-btn' onClick={toggleDarkMode}>
			<img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
			<img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
		</button>
	)
}

export default ButtonDarkMode
