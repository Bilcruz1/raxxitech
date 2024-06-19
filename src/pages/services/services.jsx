import React, { useEffect } from 'react';
import Card from '../../ui/card';
import img from '../../assets/images/serv3.jpg';
import img2 from '../../assets/images/serv2.jpg';
import img3 from '../../assets/images/serv1.jpg';
import img4 from '../../assets/images/serv10.jpg';
import img5 from '../../assets/images/serv5.jpg';
import img6 from '../../assets/images/serv6.jpg';
import img7 from '../../assets/images/serv23a.jpg';
import img8 from '../../assets/images/serv24.jpg';
import img9 from '../../assets/images/serv25.jpg';
import Banner from '../../ui/banner';

export default function Services() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);
	const items = [
		{
			img: img2,
			title: 'Web Development and Design',
			description:
				' Offering services to design and develop websites for businesses, including e-commerce sites, landing pages, and corporate websites.',
		},
		{
			img: img,
			title: 'IT Consulting ',
			description:
				'Providing expert advice and guidance on various IT-related matters, including technology adoption, system integration and digital transformation strategies.',
		},
		{
			img: img5,
			title: 'Mobile App Development',
			description:
				'Developing mobile applications  for various platforms like iOS and Android, catering to the specific needs of clients or creating innovative new apps.',
		},
		{
			img: img7,
			title: 'Purchasing and Supply Management',
			description:
				'Seamlessly handle procurement and vendor negotiations for cost-effective and reliable sourcing of hardware and software components.',
		},
		{
			img: img8,
			title: 'Satellite Communication Deployment',
			description:
				'Design, deploy, and maintain satellite communication systems for remote connectivity, disaster recovery, and global communication needs.',
		},
		{
			img: img9,
			title: 'Network Infrastructure Management',
			description:
				'	Ensure optimal network performance and security with comprehensive design, installation, monitoring, and maintenance services tailored to your business.',
		},
		{
			img: img4,
			title: 'Cybersecurity Services',
			description:
				'Offering services to protect businesses from cyber threats, including vulnerability assessments, penetration testing, firewall management, and security awareness training.',
		},
		{
			img: img3,
			title: 'Tech Support & Troubleshooting',
			description:
				'Providing assistance with resolving technical issues, setting up hardware and software, and offering guidance on using IT systems effectively.',
		},
		{
			img: img6,
			title: 'Software Installation and Setup',
			description:
				'Assisting businesses with installing and configuring software applications tailored to their specific needs, ensuring smooth integration and optimal functionality.',
		},
	];

	return (
		<div>
			<div>
				<div className="lg:pt-[10px] pt-[5px]">
					<div
						className={`bg-[url('/src/assets/images/serv19b.jpg')] bg-cover bg-bottom h-[350px] relative`}
					>
						<div className="absolute top-0 right-0 left-0 bottom-0">
							<div className="lg:w-full w-full h-full bg-[#37393F] bg-opacity-70 flex flex-col justify-center items-center lg:px-[100px] px-[10px]">
								<div className="flex space-x-5 items-center">
									<div className="lg:h-7 lg:w-7 h-4 w-4 bg-blue-400 lg:mt-2 "></div>
									<p className="lg:text-[50px] text-white text-[35px] lg:text-left text-center font-semibold">
										Our Services
									</p>
									<div className="lg:h-7 lg:w-7 h-4 w-4 bg-gray-100 lg:mt-2"></div>
								</div>

								<p className="text-gray-400 lg:text-[17px] text-[15px] lg:text-left text-center pt-3"></p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className=" mx-auto lg:mt-28 mt-14">
				<p className="text-center lg:text-[28px] text-[25px]  px-4 font-semibold">
					Unveiling Our Impressive Suite of IT Services
				</p>
				<p className=" lg:text-center lg:px-[200px] px-[20px] lg:mt-7 mt-5">
					Our principles remain unwavering, regardless of the project's scale or
					scope. Our Research, Design, Build framework has been rigorously
					tested and stands as a proven methodology.
				</p>
			</div>
			<div className="lg:px-[150px] px-5 ">
				<div className="lg:py-20 py-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10  ">
					{items.map((item, index) => {
						return (
							<Card
								key={index}
								image={item.img}
								title={item.title}
								description={item.description}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
