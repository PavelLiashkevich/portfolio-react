import './project.css'

import todoApp from '../../img/projects/todo-app.png'

const Project = () => {
	return (
		<li className='project'>
			<a href='./project-page.html'>
				<img src={todoApp} alt='Project img' className='project__img' />
				<h3 className='project__title'>Todo App</h3>
			</a>
		</li>
	)
}

export default Project
