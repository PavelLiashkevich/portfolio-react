import './styles/main.css'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<div className='App'>
			<Navbar />

			<Home />

			<Footer />
		</div>
	)
}

export default App
