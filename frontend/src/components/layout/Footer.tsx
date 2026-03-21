import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="wrapper footer-content">
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
				<a href="https://github.com/Nikos-96" target='_blank' rel='noopener noreferrer'>GitHub</a>
			</div>
		</footer>
	) 
};
