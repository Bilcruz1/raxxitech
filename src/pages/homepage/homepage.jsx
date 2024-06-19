import React, { useState, useEffect } from 'react';
import '../homepage/homepage.css';
import about_us from '../../assets/images/servv.jpg';
import { IoCheckmarkDone } from 'react-icons/io5';
import Values from './values';
import { Link, useLocation } from 'react-router-dom';

export default function Homepage() {
	const [secondTextVisible, setSecondTextVisible] = useState(false);
	const [buttonVisible, setButtonVisible] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSecondTextVisible(true);
		}, 500);

		const buttonTimeout = setTimeout(() => {
			setButtonVisible(true);
		}, 3000);

		return () => {
			clearTimeout(timeout);
			clearTimeout(buttonTimeout);
		};
	}, []);

	return (
		<div className="">
			<div>
				<div className="text-black bg-[url('/src/assets/images/raxi2.jpg')] relative lg:bg-cover bg-cover bg-no-repeat  lg:h-[900px] h-[700px]   ">
					<div className="absolute top-0 right-0 left-0 bottom-0 bg-opacity-80 bg-[#37393F]  flex justify-start ">
						<div className=" lg:w-[80%] w-full mx-auto text-center lg:pt-[200px] pt-[150px]">
							<div className=" text-white">
								<p className="text-gradientt lg:text-[25px] text-[20px] font-semibold lg:-mb-4 ">
									RaxiTech Digitals Limited
								</p>

								{secondTextVisible && (
									<p className="text-gradient fade-in lg:text-[60px] text-[25px] lg:px-0 px-5 font-bold leading-tight lg:mt-3 mt-3  ">
										I.T solutions without Hassle or Expenses
									</p>
								)}
								{secondTextVisible && (
									<div className="  mt-6 w-full flex justify-center items-center lg:px-20 px-4 ">
										<p className=" fade-in lg:text-[20px] text-[16px] text-gray-200  lg:px-10  ">
											We specialize in delivering innovative services tailored
											to meet your unique needs. Let us be your trusted partner
											on your journey to success in the digital world
										</p>
									</div>
								)}
								{buttonVisible && (
									<div
										className="lg:mt-10 mt-14 fade-in"
										style={{ animation: 'swipeIn 0.4s forwards' }}
									>
										<Link to="/Services">
											<button className="bg-blue-400 hover:bg-blue-300 text-white lg:py-[14px] py-[10px] lg:px-[28px] px-[20px] font-normal rounded-[4px] text-[16px] focus:outline-none">
												Discover Now
											</button>
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className=" flex lg:flex-row flex-col  lg:px-[150px] px-[20px] lg:mt-24 mt-10 py-10">
					<div className="  lg:w-[45%] w-full    ">
						<div className="rounded-lg h-full  lg:pl-[135px] lg:px-5 px-[15px] bg-[url('/src/assets/images/serv12f.jpg')] bg-cover bg-center  "></div>
					</div>

					<div className=" lg:w-[55%] w-full ">
						<div className=" lg:pl-[70px] lg:px-0  ">
							<div className="lg:flex  lg:space-x-2  ">
								<div className="h-3 w-3 mt-[11px] lg:block hidden bg-blue-400"></div>
								<p className="text-gray-800 lg:text-[20px] text-[15px] font-semibold">
									Our Amazing Services.
								</p>
							</div>
							<h1 className="text-gray-800 lg:text-[25px] text-[22px] lg:pt-[10px] pt-[5px] font-semibold text-left">
								Delivering Tailored IT Solutions!
							</h1>
							<p className="  text-gray-800 text-[15px] leading-7 pt-[25px] ">
								Our team of skilled professionals is devoted to providing
								unparalleled service, guaranteeing that every aspect of your IT
								infrastructure is meticulously managed. We strive not only to
								meet but to surpass your expectations, ensuring seamless
								operations and optimal performance for your business.
							</p>
							<div className="grid  grid-cols-2 lg:gap-5 gap-2 mt-6 font-semibold lg:text-[16px] text-[13px]">
								<h1 className="bg-gray-100  px-3 py-5 text-center  rounded-lg">
									Web Developement Design
								</h1>
								<h1 className="bg-gray-100 px-10 py-5 text-center rounded-lg">
									IT Consulting
								</h1>
								<h1 className="bg-gray-100 px-10 py-5 text-center  rounded-lg">
									Mobile App Development
								</h1>
								<h1 className="bg-gray-100 px-10 py-5 text-center rounded-lg">
									Cybersecurity Services
								</h1>
								<h1 className="bg-gray-100 px-10 py-5 text-center  rounded-lg">
									Tech Support & Troubleshooting
								</h1>
								<h1 className="bg-gray-100 px-10 py-5 text-center  rounded-lg">
									Software Installation and Setup
								</h1>
								<h1 className="bg-gray-100 px-10 py-5 text-center  rounded-lg">
									Purchasing and Supply Management
								</h1>
								<h1 className="bg-gray-100 px-10 py-5 text-center  rounded-lg">
									Satellite Communication Deployment
								</h1>
								<h1 className="bg-gray-100 px-10 py-7  rounded-lg col-span-2 text-center">
									Network Infrastructure Management
								</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:mt-20 mt-10">
					<Values />
				</div>

				<div className="bg-[url('/src/assets/images/techspt2.jpg')] bg-cover bg-top relative lg:mb-24 mb-14  lg:h-[450px] h-[400px] ">
					<div className="bg-[#37393F] absolute top-0 left-0 bottom-0 right-0 bg-opacity-75 flex justify-center items-center">
						<div className="text-gray-200">
							<h1 className="text-center">GET IN TOUCH</h1>
							<p className="lg:text-[40px] text-[30px] lg:py-2  font-semibold">
								Need Any Consultation?
							</p>
							<div className="flex gap-3 justify-center">
								<div className="lg:mt-8 mt-6 fade-in">
									<Link
										to="/Contacts"
										duration={500}
										smooth={true}
										offset={-70}
									>
										<button className="bg-blue-500 font-bold hover:bg-blue-300 text-white lg:py-[14px] py-[10px] lg:px-[28px] px-[20px] rounded-[4px] lg:text-[16px] text-[14px] focus:outline-none">
											Contact Us
										</button>
									</Link>
								</div>
								<div className="lg:mt-8 mt-6 fade-in">
									<Link
										to="/Services"
										duration={500}
										smooth={true}
										offset={-70}
									>
										<a>
											<button className="bg-gray-100 font-bold hover:bg-gray-300 text-gray-800 lg:py-[14px] py-[10px] lg:px-[28px] px-[20px]  rounded-[4px] lg:text-[16px] text-[14px] focus:outline-none">
												Our Services +
											</button>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
