import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HiX, HiChevronDown, HiArrowSmUp } from 'react-icons/hi';

function Hamburger({ setIsOpen }) {
	return (
		<div>
			<div
				className="lg:hidden opacity-100 backdrop-blur fixed top-0 l-0 w-full h-full flex justify-end z-50"
				onClick={() => setIsOpen(!setIsOpen)}
			>
				<div className=" h-full w-1/2 bg-[#1d2c33]   font-medium flex flex-col text-white text-center pt-[40px] px-[20px]">
					<Link
						to="/"
						onClick={() => {
							setIsOpen(!setIsOpen);
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}}
						className="text-[#AAAAAA] text-[16px] pb-[20px]  font-semibold cursor-pointer  border border-t-0 border-r-0 border-l-0 border-b-1 border-b-[#aaaaaa]"
					>
						Home
					</Link>

					<Link
						to="Services"
						duration={500}
						smooth={true}
						offset={-70}
						className="text-[#AAAAAA] text-[16px] pt-[27px] pb-[20px]  font-semibold cursor-pointer  border border-t-0 border-r-0 border-l-0 border-b-1 border-b-[#aaaaaa]"
						onClick={() => {
							setIsOpen(!setIsOpen);
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}}
					>
						Services
					</Link>

					<Link
						to="About"
						duration={500}
						smooth={true}
						offset={-70}
						className="text-[#AAAAAA] text-[16px] pt-[27px] pb-[20px]  font-semibold cursor-pointer  border border-t-0 border-r-0 border-l-0 border-b-1 border-b-[#aaaaaa]"
						onClick={() => {
							setIsOpen(!setIsOpen);
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}}
					>
						About us
					</Link>

					<Link
						to="Contacts"
						duration={500}
						smooth={true}
						offset={-70}
						className="text-[#AAAAAA] text-[16px] pt-[27px]  pb-[20px]  font-semibold cursor-pointer  border border-t-0 border-r-0 border-l-0 border-b-1 border-b-[#aaaaaa]"
						onClick={() => {
							setIsOpen(!setIsOpen);
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}}
					>
						Contact us
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hamburger;
