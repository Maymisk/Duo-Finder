import { Route, Routes } from 'react-router-dom';
import { Ads } from '../pages/Ads';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<Home />} />
			<Route path="/ads/game/:id" element={<Ads />} />
		</Routes>
	);
}
