import { Link } from 'react-router-dom';
import { GithubIcon } from '../../assets/icons/GithubIcon';

export const Header = () => {
	return (
		<header>
			<div className='header-top'>
				<div className='wrapper header-content'>
					<Link to='/'>
						<h2>Nikos</h2>
					</Link>
					<nav className='navbar'>
						<Link to='/'>Home</Link>
						<Link to='/about'>About</Link>
						<Link to='/contact'>Contact</Link>
						<a href="https://github.com/Nikos-96" target='_blank' rel='noopener noreferrer'><GithubIcon /></a>
					</nav>
				</div>
			</div>
		</header>
	);
};
