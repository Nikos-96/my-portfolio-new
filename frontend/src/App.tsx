import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { MainLayout } from './layouts/MainLayout';
import { useAppStore } from './store/useAppStore';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
	const { i18n } = useTranslation();
	useEffect(() => {
		useAppStore.getState().fetchAll(i18n.language);
	}, [i18n.language]);

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
