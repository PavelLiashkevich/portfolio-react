import './styles/main.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Project from './pages/Project'
import ScrollToTop from './utils/scrollToTop'

function App() {
	return (
		<div className='App'>
			<ScrollToTop />

			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/project/:id' element={<Project />} />
				<Route path='/contacts' element={<Contacts />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
