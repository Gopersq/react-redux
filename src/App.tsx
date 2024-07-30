import { Suspense } from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Link } from 'react-router-dom';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', [theme])}>
			<button onClick={toggleTheme}>Toggle</button>

			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О себе</Link>
			<Suspense fallback={<div>...loading</div>}>
				<Routes>
					<Route path='/' element={<MainPageAsync />} />
					<Route path='/about' element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
