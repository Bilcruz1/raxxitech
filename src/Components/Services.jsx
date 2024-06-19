import React from 'react';
import Footer from './Footer';
import accounting_services from '../assets/acc1.jpg';
import taxation from '../assets/acc4.jpg';
import auditing from '../assets/acc2.jpg';
import business_advisory from '../assets/acc5.jpg';
import financial_advisory from '../assets/acc3.jpg';
import merchandise from '../assets/acc10.jpg';

export default function Services() {
	return (
		<div className="font-lato">
			<div className=" bg-[url('/src/assets/acc30.jpg')] bg-cover bg-center   h-[350px] relative  gap-10 mt-20  ">
				<div className="absolute top-0 right-0 left-0 bottom-0  ">
					<div className="lg:w-[45%] w-full h-full  bg-[#37393F] bg-opacity-90 backdrop-blur-sm flex flex-col justify-center lg:items-start items-center lg:px-[100px] px-[10px]   ">
						<div className="flex  space-x-2">
							<div className="h-3 w-3 lg:mt-[7px] mt-[4px] bg-blue-400"></div>
							<p className="text-gray-400 lg:text-[18px] text-[15px]">
								Our Services
							</p>
						</div>
						<p className="lg:text-[50px] text-white text-[35px] lg:text-left text-center font-semibold">
							We’re Offering
						</p>
						<p className="text-gray-400 lg:text-[17px] text-[15px] lg:text-left text-center pt-3">
							We excel in numbers, shaping success. As your dedicated financial
							partner, we go beyond traditional accounting with tailored
							solutions for peace of mind in business and personal finances.
						</p>
					</div>
					<div className="w-[55%]"></div>
				</div>
			</div>
			<div className="lg:py-[100px] py-[100px] lg:px-[50px] px-[20px] lg:mx-[100px] mx-[5px]   font-lato rounded-md">
				{/* Accounting Services Section */}
				<div className="flex flex-col-reverse lg:flex-row lg:items-center gap-10 ">
					<div className="lg:w-2/5 w-full lg:h-[300px] rounded-md">
						<img
							src={accounting_services}
							alt=""
							className="w-full h-full object-cover rounded-md"
						/>
					</div>
					<div className="lg:w-3/5 w-full lg:px-10 px-0">
						<div className="h-[5px] w-10 bg-blue-400 lg:mx-0 mx-auto"></div>
						<h1 className="text-[25px] text-[#3a3939] font-semibold py-3 lg:text-left text-center">
							Accounting Services
						</h1>
						<p className="text-[#747e81] pt-3 text-[15px] leading-8 lg:text-left text-center">
							Our Accounting Services cover the entire spectrum of financial
							management for your business. From meticulously recording
							day-to-day transactions to preparing comprehensive financial
							statements, we ensure that your financial records are accurate,
							organized, and compliant.
						</p>
					</div>
				</div>

				{/* Taxation Section */}
				<div className="flex flex-col-reverse lg:flex-row-reverse lg:items-center gap-10 pt-28">
					<div className="lg:w-2/5 w-full lg:h-[300px] rounded-md">
						<img
							src={taxation}
							alt=""
							className="w-full h-full object-cover rounded-md"
						/>
					</div>
					<div className="lg:w-3/5 w-full lg:px-10 px-0">
						<div className="h-[5px] w-10 bg-blue-400 lg:mx-0 mx-auto"></div>
						<h1 className="text-[25px] text-[#3a3939] font-semibold py-3 lg:text-left text-center">
							Taxation
						</h1>
						<p className="text-[#747e81] pt-3 text-[15px] leading-8 lg:text-left text-center">
							Navigating the intricate landscape of taxation is our forte. Our
							Taxation services encompass strategic planning, meticulous
							preparation, and rigorous compliance to optimize your tax
							position. We stay abreast of ever-changing tax regulations,
							identifying opportunities for deductions and credits.
						</p>
					</div>
				</div>

				{/* Auditing Section */}
				<div className="flex flex-col-reverse lg:flex-row lg:items-center gap-10 pt-28">
					<div className="lg:w-2/5 w-full lg:h-[300px] rounded-md">
						<img
							src={auditing}
							alt=""
							className="w-full h-full object-cover rounded-md"
						/>
					</div>
					<div className="lg:w-3/5 w-full lg:px-10 px-0">
						<div className="h-[5px] w-10 bg-blue-400 lg:mx-0 mx-auto"></div>
						<h1 className="text-[25px] text-[#3a3939] font-semibold py-3 lg:text-left text-center">
							Auditing
						</h1>
						<p className="text-[#747e81] pt-3 text-[15px] leading-8 lg:text-left text-center">
							Our Auditing services offer more than just compliance. We conduct
							thorough examinations of your financial statements, internal
							controls, and processes. Our goal is to provide assurance on the
							accuracy of your financial information while identifying
							opportunities for operational improvement.
						</p>
					</div>
				</div>

				{/* Business Advisory Section */}
				<div className="flex flex-col-reverse lg:flex-row-reverse lg:items-center gap-10 pt-28">
					<div className="lg:w-2/5 w-full lg:h-[300px] rounded-md">
						<img
							src={business_advisory}
							alt=""
							className="w-full h-full object-cover rounded-md"
						/>
					</div>
					<div className="lg:w-3/5 w-full lg:px-10 px-0">
						<div className="h-[5px] w-10 bg-blue-400 lg:mx-0 mx-auto"></div>
						<h1 className="text-[25px] text-[#3a3939] font-semibold py-3 lg:text-left text-center">
							Business Advisory
						</h1>
						<p className="text-[#747e81] pt-3 text-[15px] leading-8 lg:text-left text-center">
							Consider us your partners in growth. Our Business Advisory
							services go beyond analysis; we collaborate with you to develop
							and execute strategic plans. Whether you're entering new markets,
							launching new products.
						</p>
					</div>
				</div>

				{/* Financial Advisory Section */}
				<div className="flex flex-col-reverse lg:flex-row lg:items-center gap-10 pt-28">
					<div className="lg:w-2/5 w-full lg:h-[300px] rounded-md">
						<img
							src={financial_advisory}
							alt=""
							className="w-full h-full object-cover rounded-md"
						/>
					</div>
					<div className="lg:w-3/5 w-full lg:px-10 px-0">
						<div className="h-[5px] w-10 bg-blue-400 lg:mx-0 mx-auto"></div>
						<h1 className="text-[25px] text-[#3a3939] font-semibold py-3 lg:text-left text-center">
							Financial Advisory
						</h1>
						<p className="text-[#747e81] pt-3 text-[15px] leading-8 lg:text-left text-center">
							Secure your financial future with our Financial Advisory services.
							Our seasoned advisors work closely with you to develop
							personalized investment strategies, manage wealth effectively, and
							plan for a comfortable retirement.
						</p>
					</div>
				</div>

				{/* Merchandise Section */}
				<div className="flex flex-col-reverse lg:flex-row-reverse lg:items-center gap-10 pt-28">
					<div className="lg:w-2/5 w-full lg:h-[300px] rounded-md">
						<img
							src={merchandise}
							alt=""
							className="w-full h-full object-cover rounded-md"
						/>
					</div>
					<div className="lg:w-3/5 w-full lg:px-10 px-0">
						<div className="h-[5px] w-10 bg-blue-400 lg:mx-0 mx-auto"></div>
						<h1 className="text-[25px] text-[#3a3939] font-semibold py-3 lg:text-left text-center">
							Merchandise
						</h1>
						<p className="text-[#747e81] pt-3 text-[15px] leading-8 lg:text-left text-center">
							Explore new horizons in the world of merchandise with our
							Merchandise Consulting and Advisory services. We guide you through
							every aspect, from optimizing inventory management to strategic
							market positioning
						</p>
					</div>
				</div>
			</div>
			<div className="mt-16">
				<Footer />
			</div>
		</div>
	);
}
