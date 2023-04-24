import todoApp from './../img/projects/todo-app.png'
import shopApp from './../img/projects/shop-app.png'
import quizGame from './../img/projects/quiz-game.png'
import colourApp from './../img/projects/colour-app.png'
import slider from './../img/projects/slider.png'
import cards from './../img/projects/cards.png'

const Projects = () => {
	return (
		<main className='section'>
			<div className='container'>
				<h2 className='title-1'>Projects</h2>
				<ul className='projects'>
					<li className='project'>
						<a href='./project-page.html'>
							<img src={todoApp} alt='Project img' className='project__img' />
							<h3 className='project__title'>Todo App</h3>
						</a>
					</li>
					<li className='project'>
						<a href='./project-page.html'>
							<img src={shopApp} alt='Project img' className='project__img' />
							<h3 className='project__title'>Shop App</h3>
						</a>
					</li>
					<li className='project'>
						<a href='./project-page.html'>
							<img src={quizGame} alt='Project img' className='project__img' />
							<h3 className='project__title'>Quiz Game</h3>
						</a>
					</li>

					<li className='project'>
						<img src={colourApp} alt='Project img' className='project__img' />
						<h3 className='project__title'>Colour App</h3>
					</li>
					<li className='project'>
						<img src={slider} alt='Project img' className='project__img' />
						<h3 className='project__title'>Slider</h3>
					</li>
					<li className='project'>
						<img src={cards} alt='Project img' className='project__img' />
						<h3 className='project__title'>Cards</h3>
					</li>
				</ul>
			</div>
		</main>
	)
}

export default Projects
