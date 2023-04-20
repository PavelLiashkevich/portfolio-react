import './styles/main.css'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Projects from './pages/Projects'

function App() {
	return (
		<div className='App'>
			<Navbar />

			<Home />

			<Projects />

			<Footer />
		</div>
	)
}

export default App
