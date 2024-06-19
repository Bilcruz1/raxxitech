import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homee from './Components/Homee';
import Header from './Components/header';

import Contact from './Components/Contact';
import About from './Components/About';
import Services from './Components/Services';

function App() {
	return (
		<div className="mx-0 overflow-x-hidden font-lato">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Homee />}
					/>

					<Route
						path="Services"
						element={<Services />}
					/>
					<Route
						path="About"
						element={<About />}
					/>
					<Route
						path="contacts"
						element={<Contact />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
