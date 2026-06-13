import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="footer">
			<div className="wrapper footer-content">
				<Link to='/about'>{t('nav.about')}</Link>
				<Link to='/contact'>{t('nav.contact')}</Link>
				<a href="https://github.com/Nikos-96" target='_blank' rel='noopener noreferrer'>GitHub</a>
			</div>
		</footer>
	) 
};
