import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/raxitech.png';
import { HiMenu } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Hamburger from './hamburger';

export default function Header() {
	const location = useLocation();
	const [activeLink, setActiveLink] = useState('Home');
	const [isOpen, setIsOpen] = useState(false);
	const [isFixed, setIsFixed] = useState(false);

	useEffect(() => {
		// Extract the last part of the pathname as the active link
		const currentPath = location.pathname.split('/').pop();
		setActiveLink(currentPath || 'Home');
	}, [location.pathname]);

	useEffect(() => {
		const handleScroll = () => {
			setIsFixed(window.scrollY > 40); // Adjust the scroll threshold as needed
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleLinkClick = linkName => {
		setActiveLink(linkName);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			{isOpen && <Hamburger setIsOpen={setIsOpen} />}

			<div className=" w-full z-30">
				<div className="bg-[#1d2c33] h-fit text-white lg:px-[150px] py-[5px] lg:flex hidden justify-center items-center">
					<div className="flex justify-between w-screen">
						<div className="flex gap-3 ">
							<a
								href="#"
								className="hover:text-blue-400 text-gray-300"
							>
								<FaFacebookF className="w-4 h-4" />
							</a>

							<a
								href="#"
								className="hover:text-blue-400 text-gray-300"
							>
								<FaXTwitter className="w-4 " />
							</a>
						</div>
						<div></div>
						<div className="flex gap-5 text-sm text-gray-300">
							<p>Call: +2348107337765 </p>
							<p className="h-5 w-[1px] bg-gray-500"></p>

							<a href="mailto:raxitech@gmail.com">raxitechdigital@gmail.com</a>
						</div>
					</div>
				</div>

				<div
					className={`flex justify-between shadow-xl lg:px-[150px] md:px-[30px] px-[20px] py-[25px] bg-gray-100 w-full z-30  ${
						isFixed ? 'fixed w-full shadow-lg' : ''
					}`}
					style={{ top: isFixed ? '0' : 'auto' }}
				>
					<Link
						to="/"
						className=" "
						duration={500}
						smooth={true}
						offset={-70}
						onClick={() => handleLinkClick('Home')}
					>
						<img
							src={logo}
							alt="logo"
							className="w-15 h-7"
						/>
					</Link>
					<button
						className="lg:hidden text-blue-400 flex justify-between items-center"
						onClick={handleOpen}
					>
						<HiMenu className="w-8 h-8" />
					</button>
					<ul className="lg:flex gap-[40px] justify-center items-center text-[16px] hidden ">
						<Link
							to="/"
							duration={500}
							smooth={true}
							offset={-70}
						>
							<li
								className={`cursor-pointer font-bold ${
									activeLink === 'Home'
										? 'text-blue-600'
										: 'text-gray-700 hover:text-gray-500'
								} `}
								onClick={() => handleLinkClick('Home')}
							>
								Home
							</li>
						</Link>
						<Link
							to="Services"
							duration={500}
							smooth={true}
							offset={-70}
						>
							<li
								className={`cursor-pointer font-bold ${
									activeLink === 'Services'
										? 'text-blue-600 '
										: 'text-gray-800 hover:text-gray-500'
								} `}
								onClick={() => handleLinkClick('Services')}
							>
								Services
							</li>
						</Link>
						<Link
							to="About"
							duration={500}
							smooth={true}
							offset={-70}
						>
							<li
								className={`cursor-pointer font-bold ${
									activeLink === 'About'
										? 'text-blue-600 '
										: 'text-gray-800 hover:text-gray-500'
								}`}
								onClick={() => handleLinkClick('About')}
							>
								About Us
							</li>
						</Link>
						<Link
							to="Contacts"
							duration={500}
							smooth={true}
							offset={-70}
						>
							<li
								className={`cursor-pointer font-bold ${
									activeLink === 'Contacts'
										? 'text-blue-600 '
										: 'text-gray-800 hover:text-gray-500'
								}`}
								onClick={() => handleLinkClick('contacts')}
							>
								Contact Us
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}
