import React from 'react';
import Footer from './Footer';
import contact_us from '../assets/acc43.jpg';
import { IoCheckmarkDone } from 'react-icons/io5';
import {
	HiOutlineLocationMarker,
	HiOutlinePhone,
	HiOutlineMail,
} from 'react-icons/hi';

export default function Contact() {
	return (
		<div className="font-lato">
			<div className=" bg-[url('/src/assets/acc36.jpg')] bg-cover bg-top  h-[350px] relative  gap-10 mt-20  ">
				<div className="absolute top-0 right-0 left-0 bottom-0  ">
					<div className="lg:w-[45%] w-full h-full  bg-[#37393F] bg-opacity-90 backdrop-blur-sm flex flex-col justify-center lg:items-start items-center lg:px-[100px] px-[10px]   ">
						<div className="flex  space-x-2">
							<div className="h-3 w-3 lg:mt-[7px] mt-[4px] bg-blue-400"></div>
							<p className="text-gray-400 lg:text-[18px] text-[15px]">
								Contact Us
							</p>
						</div>
						<p className="lg:text-[50px] text-white text-[35px] lg:text-left text-center font-semibold">
							Get In Touch
						</p>
					</div>
					<div className="w-[55%]"></div>
				</div>
			</div>
			<div className=" flex lg:flex-row flex-col ">
				<div className="  lg:w-[45%] w-full lg:py-[100px] py-[30px] lg:pl-[150px]   ">
					<div className="">
						<img
							src={contact_us}
							alt=""
							className=""
						/>
					</div>
				</div>
				<div className=" lg:w-[55%]  w-full">
					<div className="lg:py-[100px] py-[30px]  lg:pl-[70px] lg:px-0 px-[15px] lg:mr-[150px]">
						<div className="lg:flex  space-x-2  hidden ">
							<div className="h-3 w-3 lg:mt-[4px] mt-[4px] bg-blue-400"></div>
							<p className="text-gray-800 lg:text-[12px] text-[10px]">
								Let's talk
							</p>
						</div>
						<h1 className="text-gray-800 text-[30px] lg:pt-[10px]  font-semibold lg:text-left text-center">
							Feel free to reach us
						</h1>
						<p className="  text-gray-800 text-[15px] leading-7 pt-[15px] ">
							Have questions or need assistance? Reach out to us through the
							provided options. Our dedicated team is ready to respond promptly.
							Your inquiries are important to us, and we look forward to
							connecting with you soon!
						</p>
						<div className="pt-[10px]">
							<div className="flex gap-3 py-2">
								<div className="lg:px-5 px-0 py-2">
									<HiOutlinePhone
										className="text-blue-400 "
										size={24}
									/>
								</div>
								<div>
									<p className="text-gray-800 text-[14px] pt-1">
										Have any question?
									</p>
									<p className=" text-[14px] text-gray-800 font-semibold ">
										Call: &nbsp; 08141111229
									</p>
								</div>
							</div>
							<div className="flex gap-3 py-2">
								<div className="lg:px-5 px-0 py-2">
									<HiOutlineMail
										className="text-blue-400  "
										size={24}
									/>
								</div>
								<div>
									<p className="text-gray-800 text-[14px] pt-1">Write email</p>
									<p className="text-[14px] text-gray-800 font-semibold">
										<a href="mailto:mapemiye@gmail.com">mapemiye@gmail.com</a>
									</p>
								</div>
							</div>
							<div className="flex gap-3 py-2">
								<div className="lg:px-5 px-0 py-2">
									<HiOutlineLocationMarker
										className="text-blue-400 "
										size={24}
									/>
								</div>
								<div>
									<p className="text-gray-800 text-[14px] pt-1">
										Visit anytime
									</p>
									<p className="text-[14px] text-gray-800 font-semibold">
										Plot 13, Jama street new maitama, Kubwa, Abuja.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="lg:px-[150px] px-[15px] mt-[25px]">
				<div>
					<div className="flex  space-x-2 justify-center">
						<div className="h-3 w-3 lg:mt-[7px] mt-[4px] bg-blue-400"></div>
						<p className="text-gray-800 lg:text-[18px] text-[15px]">
							Contact Us
						</p>
					</div>
					<form className=" mt-[5px] mb-[50px]">
						<div className="flex lg:flex-row flex-col justify-between  gap-6 mt-6  ">
							<input
								type="text"
								placeholder="Your Name"
								className="  h-[65px] border-[1px] border-[#ddd] rounded-md bg-[#ddd] p-6 w-full text-[#37393F]  placeholder-[#37393F] lg:text-[14px] text-[12px] mt-4  focus:outline-none "
							/>
							<input
								type="text"
								placeholder="Email Address"
								className=" h-[65px] border-[1px] border-[#ddd] rounded-md bg-[#ddd] p-6 w-full text-[#37393F]  placeholder-[#37393F] lg:text-[14px] text-[12px] mt-4  focus:outline-none "
							/>
						</div>
						<div className="flex lg:flex-row flex-col justify-between gap-6  mt-6 ">
							<input
								type="number"
								placeholder="Phone Number"
								className=" h-[65px]  border-[1px] border-[#ddd] rounded-md bg-[#ddd] p-6 w-full text-[#37393F]  placeholder-[#37393F] lg:text-[14px] text-[12px] mt-4  focus:outline-none "
							/>
							<input
								type="text"
								placeholder="Subject"
								className="h-[65px]  border-[1px] border-[#ddd] rounded-md bg-[#ddd] p-6 w-full text-[#37393F]  placeholder-[#37393F] lg:text-[14px] text-[12px] mt-4  focus:outline-none "
							/>
						</div>

						<div className="   mt-6 ">
							<textarea
								className="w-full lg:h-[300px] h-[150px] rounded-md p-6 text-[#37393F]  placeholder-[#37393F] lg:text-[14px] text-[12px] mt-4 bg-[#ddd] focus:outline-none  resize-none border-[1px] border-[#ddd]"
								placeholder="Message..."
							/>
						</div>
						<div className=" mt-6 flex justify-center items-center">
							<button className="bg-blue-400 text-white lg:py-[20px] py-[7px] lg:px-[75px] px-[40px] font-normal rounded-[4px] text-[16px] ">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}
