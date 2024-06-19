import React, { useEffect } from 'react';

import Banner from '../../ui/banner';
import { IoCheckmarkDone } from 'react-icons/io5';

export default function About() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);
	return (
		<div>
			<div>
				<div className="lg:pt-[10px] pt-[5px]">
					<div
						className={`bg-[url('/src/assets/images/serv21c.jpg')] bg-cover bg-bottom h-[350px] relative`}
					>
						<div className="absolute top-0 right-0 left-0 bottom-0">
							<div className="lg:w-full w-full h-full bg-[#37393F] bg-opacity-70 flex flex-col justify-center items-center lg:px-[100px] px-[10px]">
								<div className="flex space-x-5 items-center">
									<div className="lg:h-7 lg:w-7 h-4 w-4 bg-blue-400 lg:mt-2 "></div>
									<p className="lg:text-[50px] text-white text-[35px] lg:text-left text-center font-semibold">
										About Us
									</p>
									<div className="lg:h-7 lg:w-7 h-4 w-4 bg-gray-100 lg:mt-2"></div>
								</div>

								<p className="text-gray-400 lg:text-[17px] text-[15px] lg:text-left text-center pt-3"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=" flex lg:flex-row flex-col lg:px-[150px] px-[20px] lg:mt-24 mt-10  py-10">
				<div className="  lg:w-[45%] w-full    ">
					<div className="rounded-lg h-full  lg:pl-[135px] lg:px-5 px-[15px] bg-[url('/src/assets/images/serv15.jpg')] bg-cover bg-center  "></div>
				</div>
				<div className=" lg:w-[55%]  w-full">
					<div className=" lg:pl-[70px] lg:px-0  ">
						<div className="lg:flex  lg:space-x-2  ">
							<div className="h-3 w-3 mt-[11px] lg:block hidden bg-blue-400"></div>
							<p className="text-gray-800 lg:text-[20px] text-[15px] font-semibold">
								About Us.
							</p>
						</div>
						<h1 className="text-gray-800 lg:text-[25px] text-[22px] lg:pt-[10px] pt-[5px] font-semibold text-left">
							Delivering Tailored IT Solutions!
						</h1>
						<p className="  text-gray-800 text-[15px] leading-7 pt-[25px] ">
							Welcome to RaxiTech Digitals Limited, your premier destination for
							cutting-edge IT solutions. As industry leaders, we specialize in
							revolutionizing technology to drive business success. With a
							dedicated team of experts, we offer tailored services spanning web
							development, cybersecurity, and IT consulting.
						</p>
						<div className="flex gap-3 text-gray-800 mt-[35px] lg:px-[40px] lg:py-[30px] px-[15px] py-[20px]  border-[1px] border-[#E3E3E3]">
							<div className="bg-blue-400 h-fit w-fit rounded-full lg:p-2 p-1 text-white">
								<IoCheckmarkDone />
							</div>
							<div>
								<h1 className="text-[20px] text-gray-800 font-semibold">
									Our Vision
								</h1>
								<p className="pt-3 text-gray-800 text-[14px] leading-7">
									To be the forefront of technological advancement, inspiring
									innovation, and shaping a future where every business thrives
									through seamless integration of technology.
								</p>
							</div>
						</div>
						<div className="flex gap-3 text-gray-800 mt-[35px] lg:px-[40px] lg:py-[30px] px-[15px] py-[20px]  border-[1px] border-[#E3E3E3]">
							<div className="bg-blue-400 h-fit w-fit rounded-full lg:p-2 p-1 text-white">
								<IoCheckmarkDone />
							</div>
							<div>
								<h1 className="text-[20px] text-gray-800 font-semibold">
									Our Mission
								</h1>
								<p className="pt-3  text-gray-800 text-[14px] leading-7">
									Ato empower businesses with transformative IT solutions.
									Through strategic partnerships, unparalleled expertise, and a
									relentless pursuit of excellence, we aim to deliver tailored,
									cutting-edge technology services that drive growth,
									efficiency, and success for our clients."
								</p>
							</div>
						</div>
					</div>
				</div>
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
								<a href="/Contacts">
									<button className="bg-blue-500 font-bold hover:bg-blue-300 text-white lg:py-[14px] py-[10px] lg:px-[28px] px-[20px] rounded-[4px] lg:text-[16px] text-[14px] focus:outline-none">
										Contact Us
									</button>
								</a>
							</div>
							<div className="lg:mt-8 mt-6 fade-in">
								<a href="/Services">
									<button className="bg-gray-100 font-bold hover:bg-gray-300 text-gray-800 lg:py-[14px] py-[10px] lg:px-[28px] px-[20px]  rounded-[4px] lg:text-[16px] text-[14px] focus:outline-none">
										Our Services +
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
