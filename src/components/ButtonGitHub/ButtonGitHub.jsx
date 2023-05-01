import './button.css'
import gitHub from './gitHub-black.svg'

const ButtonGitHub = ({ link }) => {
	return (
		<a href={link} target='_blank' class='btn-outline'>
			<img src={gitHub} alt='Icon GitHub' />
			GitHub repo
		</a>
	)
}

export default ButtonGitHub
