import './ButtonDarkMode.css'
import { useEffect } from 'react'
import { useLocalStorage } from '../../utils/useLocalSorage'
import detectDarkMode from '../../utils/detectDarkMode'

import sun from './sun.svg'
import moon from './moon.svg'


const ButtonDarkMode = () => {
	// Использование кастомного хука 'useLocalStorage'
	const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

	// Добавление/удаление класса 'dark'
	// Срабатывает на старте и при любом изменении 'darkMode'
	useEffect(() => {
		if (darkMode === 'dark') {
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
		}
	}, [darkMode])

	// Переключение темы ( светлая / темная )
	const toggleDarkMode = () => {
		setDarkMode(currentValue => {
			return currentValue === 'light' ? 'dark' : 'light'
		})
	}

	const btnNormal = 'dark-mode-btn'
	const btnActive = 'dark-mode-btn dark-mode-btn--active'

	return (
		<button
			className={darkMode === 'dark' ? btnActive : btnNormal}
			onClick={toggleDarkMode}
		>
			<img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
			<img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
		</button>
	)
}

export default ButtonDarkMode
