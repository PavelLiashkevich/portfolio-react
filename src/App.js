import './styles/main.css'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Project from './pages/Project'

function App() {
	return (
		<div className='App'>
			<Navbar />

			{/*<Home />*/}

			{/*<Projects />*/}

			<Project />

			{/*<Contacts />*/}

			<Footer />
		</div>
	)
}

export default App
