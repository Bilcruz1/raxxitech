import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../assets/Logooo1.svg';
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
		// Extract the last part of the pathname as the active link
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
		<div className="font-lato">
			<div className="bg-[#293941] w-screen pt-14 pb-10 lg:px-[150px] px-[20px] text-white grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-14">
				<div>
					<div className="h-[50px] w-[50px]">
						<img
							src={logo}
							alt="Logo"
						/>
					</div>
					<div>
						<div className="flex gap-2">
							<HiOutlineLocationMarker />
							<p className="text-[13px]">
								Plot 13, Jama street new maitama, Kubwa, Abuja.
							</p>
						</div>
						<div className="flex gap-2 py-2">
							<HiOutlinePhone />
							<p className="text-[13px]">08141111229</p>
						</div>
						<div className="flex gap-2 py-2">
							<HiOutlineMail />
							<p className="text-[13px]">
								<a href="mailto:mapemiye@gmail.com">mapemiye@gmail.com</a>
							</p>
						</div>
					</div>
				</div>
				<div>
					<h1>Solutions</h1>
					<div className="h-[2px] w-5 bg-blue-400"></div>
					<div className="text-[13px] mt-6">
						<p>
							<Link
								to="/Services"
								onClick={() => handleLinkClick('Services')}
							>
								Accounting Services
							</Link>
						</p>
						<p className="pt-2">
							<Link
								to="/Services"
								onClick={() => handleLinkClick('Services')}
							>
								Taxation
							</Link>
						</p>
						<p className="pt-2">
							<Link
								to="/Services"
								onClick={() => handleLinkClick('Services')}
							>
								Auditing
							</Link>
						</p>
						<p className="pt-2">
							<Link
								to="/Services"
								onClick={() => handleLinkClick('Services')}
							>
								Business Advisory
							</Link>
						</p>
						<p className="pt-2">
							<Link
								to="/Services"
								onClick={() => handleLinkClick('Services')}
							>
								Financial Advisory
							</Link>
						</p>
						<p className="pt-2">
							<Link
								to="/Services"
								onClick={() => handleLinkClick('Services')}
							>
								Merchandise
							</Link>
						</p>
					</div>
				</div>
				<div>
					<h1>Useful Links</h1>
					<div className="h-[2px] w-5 bg-blue-400"></div>
					<div className="text-[13px] mt-6">
						<p className={location.pathname === '/' ? 'active' : ''}>
							<Link to="/">Home</Link>
						</p>
						<p
							className={
								location.pathname === '/About' ? 'active pt-2' : 'pt-2'
							}
						>
							<Link to="/About">About Us</Link>
						</p>
						<p
							className={
								location.pathname === '/About' ? 'active pt-2' : 'pt-2'
							}
						>
							<Link to="/About">Mission and Vision</Link>
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
					<p className=" w-fit">
						<a href="#">
							<CiLinkedin size={24} />
						</a>
					</p>
					<p className=" w-fit">
						<a href="#">
							<CiInstagram size={24} />
						</a>
					</p>
				</div>
			</div>
			<div className="bg-[#1d2c33] text-white lg:px-[150px] px-[15px] text-[12px] py-4 ">
				&copy; &nbsp; 2024 MAOA & Co Consulting Ltd.&nbsp; All Rights Reserved.
			</div>
		</div>
	);
}
