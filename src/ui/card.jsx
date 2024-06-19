import React, { useState } from 'react';

export default function Card({ image, title, description }) {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className="relative  bg-cover h-[350px]   rounded-lg shadow-md lg:h-[509px]  lg:w-full  place-content-center lg:place-self-start"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={{ backgroundImage: `url(${image})` }}
		>
			{/* <img
				src={image}
				alt={title}
				className="lg:h-[509px] h-[371px] lg:w-[449px] mx-auto w-full"
			/> */}
			<div
				className={`absolute bottom-0 left-0 right-0 bg-gray-100 lg:mx-5 mx-10 mb-5 text-gray-800 p-10  transition-opacity duration-300 ease-in-out ${
					hovered ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<div className=" p-3 ">
					<h2 className="text-lg text-center font-bold">{title}</h2>
					<p className="text-sm text-center pt-3 ">{description}</p>
				</div>
			</div>
			<h2
				className={`absolute bottom-0 left-0 right-0 bg-gray-100 lg:mx-5 mx-10 mb-5 p-7 text-gray-800 text-lg font-bold text-center transition-opacity duration-300 ease-in-out ${
					hovered ? 'opacity-0' : 'opacity-100'
				}`}
			>
				{title}
			</h2>
		</div>
	);
}
