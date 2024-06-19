import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import '../Styles/About.css';
import about_us from '../assets/acc24.svg';
import { IoCheckmarkDone } from 'react-icons/io5';

const About = () => {
	return (
		<div className="font-lato">
			<div className=" bg-[url('/src/assets/acc33.jpg')] bg-cover bg-center   h-[350px] relative  gap-10 mt-20  ">
				<div className="absolute top-0 right-0 left-0 bottom-0  ">
					<div className="lg:w-[45%] w-full h-full  bg-[#37393F] bg-opacity-90 backdrop-blur-sm flex flex-col justify-center lg:items-start items-center lg:px-[100px] px-[10px]   ">
						<div className="flex  space-x-2">
							<div className="h-3 w-3 lg:mt-[7px] mt-[4px] bg-blue-400"></div>
							<p className="text-gray-400 lg:text-[18px] text-[15px]">
								About Us
							</p>
						</div>
						<p className="lg:text-[50px] text-white text-[35px] lg:text-left text-center font-semibold">
							Know About Us
						</p>
						<p className="text-gray-400 lg:text-[17px] text-[15px] lg:text-left text-center pt-3">
							At MAOA Consulting Ltd, we are your dedicated partners in
							financial success. Our commitment to precision, integrity, and
							personalized service sets us apart in the industry.
						</p>
					</div>
					<div className="w-[55%]"></div>
				</div>
			</div>
			<div className=" flex lg:flex-row flex-col ">
				<div className=" bg-gray-50 lg:w-[45%] w-full lg:py-[100px] py-[30px]  ">
					<img
						src={about_us}
						alt=""
						className="w-full  lg:h-[450px]  lg:pl-[135px] lg:px-5 px-[15px]"
					/>
					<p className="lg:pl-[150px] lg:px-0  px-[15px] text-gray-800  lg:text-left text-center  lg:text-[25px] text-[25px] font-semibold pt-[25px]">
						We’re Ready To Grow Your Business With Us
					</p>
					<p className="lg:pl-[150px] lg:px-0  px-[15px] text-gray-800 pt-[25px]">
						Our seasoned professionals bring diverse expertise to ensure
						top-notch financial guidance.
					</p>
					<div className="pt-[25px]">
						<a
							href="/contacts"
							className="underline lg:pl-[150px] lg:px-0  px-[15px] font-semibold text-gray-800 "
						>
							Get in touch
						</a>
					</div>
				</div>
				<div className=" lg:w-[55%]  w-full">
					<div className="lg:py-[100px] py-[30px]  lg:pl-[70px] lg:px-0 px-[15px] lg:mr-[150px]">
						<div className="lg:flex  space-x-2  hidden ">
							<div className="h-3 w-3 lg:mt-[4px] mt-[4px] bg-blue-400"></div>
							<p className="text-gray-800 lg:text-[12px] text-[10px]">
								Welcome to MAOA Consulting Ltd.
							</p>
						</div>
						<h1 className="text-gray-800 text-[30px] lg:pt-[25px] pt-[20px] font-semibold lg:text-left text-center">
							We Care About Your Business Plan.
						</h1>
						<p className="  text-gray-800 text-[15px] leading-7 pt-[25px] ">
							Our commitment goes beyond numbers; it's about understanding your
							unique financial landscape and helping you navigate towards
							prosperity. We pride ourselves on precision, integrity, and a
							client-centric approach that has earned us the trust of businesses
							and individuals alike.
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
									Empowering your financial journey is our vision. Whether
									you're a business or an individual, MAOA Consulting Limited is
									your singular source for trusted partnership and success.
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
									At MAOA Consulting Limited, our mission is to deliver
									unparalleled financial services that go beyond mere
									compliance. We are dedicated to providing strategic insights,
									fostering growth, and ensuring financial resilience for our
									clients. Through our commitment to accuracy, transparency, and
									client satisfaction, we strive to be the trusted partner in
									their financial journey.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default About;
