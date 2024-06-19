import React, { useEffect, useState } from 'react';
import contactImage from '../../assets/images/techspt.jpg';
import {
	HiOutlineLocationMarker,
	HiOutlinePhone,
	HiOutlineMail,
} from 'react-icons/hi';
import Banner from '../../ui/banner';
import ContactMethod from '../../ui/contactMethod';

export default function Contact() {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			<div>
				<div className="lg:pt-[10px] pt-[5px]">
					<div
						className={`bg-[url('/src/assets/images/serv7.jpg')] bg-cover bg-bottom h-[350px] relative`}
					>
						<div className="absolute top-0 right-0 left-0 bottom-0">
							<div className="lg:w-full w-full h-full bg-[#37393F] bg-opacity-70 flex flex-col justify-center items-center lg:px-[100px] px-[10px]">
								<div className="flex space-x-5 items-center">
									<div className="lg:h-7 lg:w-7 h-4 w-4 bg-blue-400 lg:mt-2 "></div>
									<p className="lg:text-[50px] text-white text-[35px] lg:text-left text-center font-semibold">
										Contact Us
									</p>
									<div className="lg:h-7 lg:w-7 h-4 w-4 bg-gray-100 lg:mt-2"></div>
								</div>

								<p className="text-gray-400 lg:text-[17px] text-[15px] lg:text-left text-center pt-3"></p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className={`flex lg:flex-row flex-col  lg:px-[150px] px-[20px] lg:mt-24 mt-10 py-10  ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				} transition-opacity duration-1000 ease-in-out transform`}
			>
				<div className="  lg:w-[45%] w-full    ">
					<div className="rounded-lg h-full  lg:pl-[135px] lg:px-5 px-[15px] bg-[url('/src/assets/images/serv13.jpg')] bg-cover bg-center  "></div>
				</div>
				<div className="lg:w-[55%] w-full ">
					<div className="lg:pl-[70px] lg:px-0 ">
						<div className="space-y-6">
							<h1 className="lg:text-[25px] text-[22px] text-left   text-gray-800 font-semibold">
								Get in Touch
							</h1>
							<p className="text-[15px] text-gray-800 leading-7">
								Should you have any inquiries or require assistance, please
								don't hesitate to contact us using the provided methods. Our
								committed team stands ready to offer prompt assistance. We value
								your questions and eagerly anticipate connecting with you in the
								near future!
							</p>
							<ContactMethod
								icon={
									<HiOutlinePhone
										className="text-blue-400"
										size={24}
									/>
								}
								title="Have any question?"
								info="Call: 08107337765"
							/>
							<ContactMethod
								icon={
									<HiOutlineMail
										className="text-blue-400"
										size={24}
									/>
								}
								title="Write email"
								info={
									<a
										href="mailto:raxitechdigital@gmail.com"
										className="text-gray-800 "
									>
										raxitechdigital@gmail.com
									</a>
								}
							/>
							<ContactMethod
								icon={
									<HiOutlineLocationMarker
										className="text-blue-400"
										size={24}
									/>
								}
								title="Visit us"
								info="2255 Solomon Nwachikwu street, sector F FHA Lugbe, Abuja"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:px-[150px] md:px-[30px] px-[20px] mt-[25px]">
				<div>
					<p className="text-center text-[30px] text-gray-800 font-semibold mt-20">
						Need Any Consultation?
					</p>
					<form className=" mt-[15px] mb-[50px]">
						<div className="flex lg:flex-row flex-col justify-between gap-6 mt-6">
							<input
								type="text"
								placeholder="Your Name"
								className="h-[65px] border-[1px] border-[#ddd] rounded-md bg-[#f7f7f7] p-6 w-full text-[#37393F] placeholder-[#37393F] lg:text-[17px] text-[12px] mt-4 focus:outline-none"
							/>
							<input
								type="text"
								placeholder="Email Address"
								className="h-[65px] border-[1px] border-[#ddd] rounded-md bg-[#f7f7f7] p-6 w-full text-[#37393F] placeholder-[#37393F] lg:text-[17px] text-[12px] mt-4 focus:outline-none"
							/>
						</div>
						<div className="flex lg:flex-row flex-col justify-between gap-6 mt-6">
							<input
								type="number"
								placeholder="Phone Number"
								className="h-[65px] border-[1px] border-[#ddd] rounded-md bg-[#f7f7f7] p-6 w-full text-[#37393F] placeholder-[#37393F] lg:text-[17px] text-[12px] mt-4 focus:outline-none"
							/>
							<input
								type="text"
								placeholder="Subject"
								className="h-[65px] border-[1px] border-[#ddd] rounded-md bg-[#f7f7f7] p-6 w-full text-[#37393F] placeholder-[#37393F] lg:text-[17px] text-[12px] mt-4 focus:outline-none"
							/>
						</div>
						<div className="mt-6">
							<textarea
								className="w-full lg:h-[200px] h-[150px] rounded-md p-6 text-[#37393F] placeholder-[#37393F] lg:text-[17px] text-[12px] mt-4 bg-[#f7f7f7] focus:outline-none resize-none border-[1px] border-[#ddd]"
								placeholder="Message..."
							/>
						</div>
						<div className="mt-6 flex justify-center items-center">
							<button className="bg-blue-400 hover:bg-blue-500 text-white lg:py-[18px] py-[14px] lg:px-[36px] px-[28px] font-normal rounded-[4px] text-[17px] focus:outline-none">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
