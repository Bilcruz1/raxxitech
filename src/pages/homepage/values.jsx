import React from 'react';
import {
	FaLightbulb,
	FaHandshake,
	FaUserTie,
	FaBullseye,
	FaHeart,
	FaGem,
} from 'react-icons/fa';
import ValueMethod from '../../ui/valueMethod';

export default function Values() {
	const items = [
		{
			title: 'Innovation',
			contents:
				'We are committed to innovation, leveraging the latest technologies and methodologies to provide cutting-edge solutions that drive business growth and success',
			icon: <FaLightbulb />,
		},
		{
			title: 'Reliability',
			contents:
				'With a focus on reliability, we consistently deliver high-quality products and services, meeting deadlines and exceeding expectations to build trust and long-lasting partnerships with our clients.',
			icon: <FaHandshake />,
		},
		{
			title: 'Expertise',
			contents:
				'Our team of experienced professionals possesses deep expertise in the IT industry, allowing us to offer comprehensive solutions and expert guidance to address complex challenges',
			icon: <FaUserTie />,
		},
		{
			title: 'Commitment',
			contents:
				'We maintain a relentless pursuit of excellence in everything we do, striving for perfection in our services, and customer interactions to consistently deliver exceptional results',
			icon: <FaBullseye />,
		},
		{
			title: 'Passion',
			contents:
				'Passion drives us to go the extra mile, delivering solutions with enthusiasm, energy, and dedication to exceed expectations and create lasting impact.',
			icon: <FaHeart />,
		},
		{
			title: 'Quality',
			contents:
				'Quality is at the core of everything we do. We ensure the highest standards in our work, delivering excellence and value to our clients with every project and service.',
			icon: <FaGem />,
		},
	];

	return (
		<div className="bg-gray-100 lg:px-[150px] px-[20px] py-24">
			<div className="flex justify-center items-center gap-5">
				<div className="bg-blue-400 h-1 w-10"></div>
				<h5 className="font-bold text-2xl">Why Choose Us</h5>
				<div className="bg-blue-400 h-1 w-10"></div>
			</div>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:mt-24 mt-20">
				{items.map((item, index) => (
					<ValueMethod
						key={index}
						title={item.title}
						contents={item.contents}
						icon={item.icon}
					/>
				))}
			</div>
		</div>
	);
}
