import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Homepage from '../src/pages/homepage/homepage';
import Services from '../src/pages/services/services';
import Header from '../src/layout/header';
import Contact from './pages/contact us/contact';
import Footer from './layout/footer';
import About from './pages/about us/about';

export function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						element={<Homepage />}
						path="/"
					/>
					<Route
						element={<Services />}
						path="Services"
					/>
					<Route
						element={<About />}
						path="About"
					/>
					<Route
						element={<Contact />}
						path="Contacts"
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}
