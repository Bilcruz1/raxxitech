import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Hamburger({ setIsOpen }) {
	const location = useLocation();
	const navigate = useNavigate(); // Hook for programmatically navigating
	const [activeLink, setActiveLink] = useState('Home');

	useEffect(() => {
		const currentPath = location.pathname.split('/').pop();
		setActiveLink(currentPath || 'Home');
	}, [location.pathname]);

	const handleLinkClick = path => {
		setIsOpen(false); // Close the hamburger menu
		navigate(path); // Programmatically navigate to the specified path
		window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
	};

	return (
		<div>
			<div
				className="lg:hidden opacity-100 backdrop-blur fixed top-0 l-0 w-full h-full flex justify-end z-50"
				onClick={() => setIsOpen(!setIsOpen)}
			>
				<div className="h-full w-1/2 bg-[#1d2c33] font-medium flex flex-col text-white text-center pt-[40px] px-[20px]">
					<div
						onClick={() => handleLinkClick('/')} // Set the handleLinkClick function for the Home link
						className={`text-[#AAAAAA] text-[16px] pb-[20px] font-semibold cursor-pointer border border-t-0 border-r-0 border-l-0 border-b-1 border-b-[#aaaaaa] ${
							activeLink === 'Home' ? 'active' : ''
						}`}
					>
						Home
					</div>

					<div
						onClick={() => handleLinkClick('/Services')} // Set the handleLinkClick function for the Services link
						className={`text-[#AAAAAA] text-[16px] pt-[27px] pb-[20px] font-semibold cursor-pointer border border-t-0 border-r-0 border-l-0 border-b-1 border-b-[#aaaaaa] ${
							activeLink === 'Services' ? 'active' : ''
						}`}
					>
						Services
					</div>

					<div
						onClick={() => handleLinkClick('/About')} // Set the handleLinkClick function for the About link
						className={`text-[#AAAAAA] text-[16px] pt-[27px] pb-[20px] font-semibold cursor-pointer border border-t-0 border-r-0 border-l-0 border-b-1 border-b-[#aaaaaa] ${
							activeLink === 'About' ? 'active' : ''
						}`}
					>
						About us
					</div>

					<div
						onClick={() => handleLinkClick('/Contacts')} // Set the handleLinkClick function for the Contacts link
						className={`text-[#AAAAAA] text-[16px] pt-[27px] pb-[20px] font-semibold cursor-pointer border border-t-0 border-r-0 border-l-0 border-b-1 border-b-[#aaaaaa] ${
							activeLink === 'Contacts' ? 'active' : ''
						}`}
					>
						Contact us
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hamburger;
