import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../assets/images/raxitech.png';
import { CiFacebook } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import { CiLinkedin, CiInstagram } from 'react-icons/ci';
import {
	HiOutlineLocationMarker,
	HiOutlinePhone,
	HiOutlineMail,
} from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
	const location = useLocation();
	const [activeLink, setActiveLink] = useState('Home');

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
		<div className="bg-[url('/src/assets/images/footer.jpg')] bg-cover bg-center lg:h-[400px] h-[500px]   relative ">
			<div className="bg-[#15181a] absolute top-0 left-0 bottom-0 right-0 bg-opacity-80">
				<div className=" pt-14 lg:px-[150px] px-[20px] text-white grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-14">
					<div>
						<div className="">
							<Link
								to="/"
								onClick={() => handleLinkClick('Home')}
							>
								<img
									src={logo}
									alt="Logo"
									className=" w-[100px]"
								/>
							</Link>
						</div>
						<div>
							<div className="flex gap-2 mt-7">
								<HiOutlineLocationMarker />
								<p className="text-[14px]">
									2255 Solomon Nwachikwu street, sector F FHA Lugbe, Abuja
								</p>
							</div>
							<div className="flex gap-2 py-4">
								<HiOutlinePhone />
								<p className="text-[14px]">08107337765</p>
							</div>
							<div className="flex gap-2 ">
								<HiOutlineMail />
								<p className="text-[14px]">
									<a href="mailto:raxitech@gmail.com">
										raxitechdigital@gmail.com
									</a>
								</p>
							</div>
						</div>
					</div>
					<div>
						<h1>Solutions</h1>
						<div className="h-[2px] w-5 bg-blue-400"></div>
						<div className="text-[14px] mt-6 ">
							<p className="hover:scale-110">
								<Link
									to="/Services"
									onClick={() => handleLinkClick('Services')}
								>
									Web Development and Design
								</Link>
							</p>
							<p className="pt-3 hover:scale-110">
								<Link
									to="/Services"
									onClick={() => handleLinkClick('Services')}
								>
									IT Consulting
								</Link>
							</p>
							<p className="pt-3 hover:scale-110">
								<Link
									to="/Services"
									onClick={() => handleLinkClick('Services')}
								>
									Mobile App Development
								</Link>
							</p>
							<p className="pt-3 hover:scale-110">
								<Link
									to="/Services"
									onClick={() => handleLinkClick('Services')}
								>
									Cybersecurity Services
								</Link>
							</p>
							<div className="lg:block hidden">
								<p className="pt-3 hover:scale-110">
									<Link
										to="/Services"
										onClick={() => handleLinkClick('Services')}
									>
										Tech Support & Troubleshooting
									</Link>
								</p>
								<p className="pt-3 hover:scale-110">
									<Link
										to="/Services"
										onClick={() => handleLinkClick('Services')}
									>
										Software Installation and Setup
									</Link>
								</p>
							</div>
						</div>
					</div>
					<div>
						<h1>Useful Links</h1>
						<div className="h-[2px] w-5 bg-blue-400"></div>
						<div className="text-[14px] mt-6">
							<p
								className={
									location.pathname === '/' ? 'active' : 'hover:scale-110'
								}
							>
								<Link
									to="/"
									duration={500}
									smooth={true}
									offset={-70}
									onClick={() => handleLinkClick('Home')}
								>
									Home
								</Link>
							</p>
							<p
								className={
									location.pathname === '/About'
										? 'active pt-3 '
										: 'pt-3 hover:scale-110'
								}
							>
								<Link
									to="/About"
									duration={500}
									smooth={true}
									offset={-70}
									onClick={() => handleLinkClick('About')}
								>
									About Us
								</Link>
							</p>
							<p
								className={
									location.pathname === '/About'
										? 'active pt-3'
										: 'pt-3  hover:scale-110'
								}
							>
								<Link
									to="/About"
									duration={500}
									smooth={true}
									offset={-70}
									onClick={() => handleLinkClick('About')}
								>
									Mission and Vision
								</Link>
							</p>
						</div>
					</div>

					<div className="flex gap-4">
						<p className=" w-fit">
							<a href="#">
								<CiFacebook size={24} />
							</a>
						</p>
						<p className=" w-fit">
							<a href="#">
								<FaXTwitter size={24} />
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
