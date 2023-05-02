import { useParams } from 'react-router-dom'

import ButtonGitHub from '../components/ButtonGitHub/ButtonGitHub'
import { projects } from '../helpers/ProjectsList'

const Project = () => {
	const { id } = useParams()
	const project = projects[id]

	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{project.title}</h1>

					<img
						src={project.img}
						alt={projects.title}
						className='project-details__cover'
					/>

					<div className='project-details__desc'>
						<p>Skills: {project.skills}</p>
					</div>

					<ButtonGitHub link={project.gitHubLink} target='_blank' />
				</div>
			</div>
		</main>
	)
}

export default Project
