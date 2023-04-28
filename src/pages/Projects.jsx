import Project from '../components/Project/Project'

import { projects } from './../helpers/ProjectsList'

const Projects = () => {
	function getId() {
		return '_' + Math.random().toString(36).substring(2, 9)
	}

	return (
		<main className='section'>
			<div className='container'>
				<h2 className='title-1'>Projects</h2>
				<ul className='projects'>
					{projects.map(project => {
						return (
							<Project title={project.title} img={project.img} key={getId()} />
						)
					})}
				</ul>
			</div>
		</main>
	)
}

export default Projects
