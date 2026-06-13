import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GithubIcon } from '../../assets/icons/GithubIcon';
import { MenuIcon, XIcon } from 'lucide-react';

export const Header = () => {
	const { t, i18n } = useTranslation();
	const toggle = () => i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de');

	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		setMenuOpen(false);
	}, [location]);

	return (
		<header className={scrolled ? 'scrolled' : ''}>
			<div className='header-top'>
				<div className='wrapper header-content'>
					<Link to='/' onClick={scrollToTop}>
						<h2>Nikos</h2>
					</Link>

					<nav className='navbar'>
						<Link to='/' onClick={scrollToTop}>{t('nav.home')}</Link>
						<Link to='/about'>{t('nav.about')}</Link>
						<Link to='/contact'>{t('nav.contact')}</Link>
						<button onClick={toggle} className='lang-toggle'>
							{i18n.language === 'de' ? 'EN' : 'DE'}
						</button>
						<a href='https://github.com/Nikos-96' target='_blank' rel='noopener noreferrer'>
							<GithubIcon />
						</a>
					</nav>

					<button className='hamburger' onClick={() => setMenuOpen((o) => !o)}>
						{menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
					</button>
				</div>
			</div>

			{menuOpen && (
				<nav className='mobile-menu'>
					<Link to='/' onClick={scrollToTop}>{t('nav.home')}</Link>
					<Link to='/about'>{t('nav.about')}</Link>
					<Link to='/contact'>{t('nav.contact')}</Link>
					<div className='mobile-menu-bottom'>
						<button onClick={toggle} className='lang-toggle'>
							{i18n.language === 'de' ? 'EN' : 'DE'}
						</button>
						<a href='https://github.com/Nikos-96' target='_blank' rel='noopener noreferrer'>
							<GithubIcon />
						</a>
					</div>
				</nav>
			)}
		</header>
	);
};
