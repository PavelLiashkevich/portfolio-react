import img from './../img/projects/todo-app.png'
import ButtonGitHub from '../components/ButtonGitHub/ButtonGitHub'

const Project = () => {
	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>Video service</h1>

					<img
						src={img}
						alt='Project Image'
						className='project-details__cover'
					/>

					<div className='project-details__desc'>
						<p>Skills: React, Node.js, MongoDB</p>
					</div>

					<ButtonGitHub link='https://github.com' />
				</div>
			</div>
		</main>
	)
}

export default Project
