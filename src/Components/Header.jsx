import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logooo1.svg';
import { HiMenu } from 'react-icons/hi';
import Hamburger from './Hamburger';

export default function Header() {
	const location = useLocation();
	const [activeLink, setActiveLink] = useState('Home');
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const currentPath = location.pathname.split('/').pop();
		setActiveLink(currentPath || 'Home');
	}, [location.pathname]);

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
			<div className="flex justify-between lg:px-[150px] md:px-[30px] px-[20px] py-[5px] bg-[#1d2c33] fixed w-full z-30 border border-r-0 border-l-0 border-t-0 border-b-[1px] border-[#222222]">
				<div
					className=""
					onClick={() => handleLinkClick('Home')}
				>
					<img
						src={logo}
						alt="logo"
					/>
				</div>
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
							className={`cursor-pointer ${
								activeLink === 'Home'
									? 'text-blue-400 hover:[#4545f2] '
									: 'text-[#AAAAAA] hover:text-white'
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
							className={`cursor-pointer ${
								activeLink === 'Services'
									? 'text-blue-400 hover:[#4545f2] '
									: 'text-[#AAAAAA] hover:text-white'
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
							className={`cursor-pointer ${
								activeLink === 'About'
									? 'text-blue-400 hover:[#4545f2] '
									: 'text-[#AAAAAA] hover:text-white'
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
							className={`cursor-pointer ${
								activeLink === 'Contacts'
									? 'text-blue-400 hover:[#4545f2] '
									: 'text-[#AAAAAA] hover:text-white'
							}`}
							onClick={() => handleLinkClick('contacts')}
						>
							Contact Us
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}
