import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Homepage from '../pages/homepage/homepage';
import Services from '../pages/services/services';
import Header from '../layout/header';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Header />
				<Route
					element={<Homepage />}
					path="/"
				/>
				<Route
					element={<Services />}
					path="services"
				/>
			</Routes>
		</BrowserRouter>
	);
}
