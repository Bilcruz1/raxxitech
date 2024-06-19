import React from 'react';
import Footer from '../Components/Footer';

import { Link } from 'react-scroll';

export default function Homee() {
	return (
		<div className="mx-0 font-lato ">
			<div className=" text-black bg-[url('/src/assets/acc16.svg')] relative  lg:bg-cover bg-contain lg:h-[720px] h-[720px] lg:pt-[200px] lg:pb-[120px] pb-5 pt-[130px]  lg:px-[80px] px-[40px] flex   ">
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-[#37393F] bg-opacity-90 backdrop-blur-sm lg:w-[47%] w-full   flex flex-col justify-center items-center pt-28  ">
					<div className="lg:w-4/5 w-full flex flex-col justify-center items-center lg:block  lg:text-left text-center -mt-16">
						<div className="flex  space-x-2">
							<div className="h-3 w-3 lg:mt-[4px] mt-[4px] bg-blue-400"></div>
							<p className="text-gray-400 lg:text-[13px] text-[14px]">
								WELCOME TO MAOA & CO CONSULTING LTD
							</p>
						</div>
						<p className="  text-gray-50 lg:text-[50px] text-[30px] font-semibold leading-tight lg:mt-3 mt-7 lg:px-0 px-2 ">
							OPTIMIZE YOUR <span className="text-blue-400">FINANCIAL</span>{' '}
							FUTURE WITH US
						</p>
						<p className="text-gray-400  text-[15px] lg:mt-3 mt-7 lg:px-0 px-2">
							At MAOA Consulting Ltd, we are your dedicated partners in
							financial success. Our commitment to precision, integrity, and
							personalized service sets us apart in the industry.
						</p>
						<div className="lg:mt-5 mt-10">
							<button className="bg-blue-400 text-gray-50 rounded lg:py-4 lg:px-6 py-3 px-5">
								<a
									href="/contacts"
									className=" "
								>
									Get consulting
								</a>
							</button>
						</div>

						{/* <p className="lg:mt-10   text-white lg:text-[45px] text-[35px] text-center">
							OPTIMIZE YOUR FINANCIAL FUTURE WITH
						</p>
						<p className="text-center text-[#4545f2] lg:text-[30px] text-[30px]">
							MAOA & CO CONSULTING LTD.
						</p> */}
					</div>
				</div>
				<div className="w-[53%]"></div>
			</div>

			<div className="pb-20 ">
				<h1 className="text-center text-[35px] pt-20 leading-10 font-bold text-[#212222]">
					What we offer
				</h1>
				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:px-[150px] px-[15px] mt-10 pt-8">
					<div className="bg-[#EDF1F2] p-5 rounded">
						<div className="text-[30px] text-[#031F28]">01</div>
						<div className="flex flex-col">
							<h1 className="text-[25px] pt-7 text-[#3a3939] font-semibold">
								Accounting Services
							</h1>
							<p className="text-[14px] text-[#031F28] pt-5 leading-[24px] ">
								Our Accounting Services cover the entire spectrum of financial
								management for your business. From meticulously recording
								day-to-day transactions to preparing comprehensive financial
								statements, we ensure that your financial records are accurate,
								organized, and compliant.
							</p>
						</div>
					</div>
					<div className="bg-[#EDF1F2] p-5 rounded">
						<div className="text-[30px] text-[#031F28]">02</div>
						<div className="flex flex-col">
							<h1 className="text-[25px] pt-7 text-[#3a3939] font-semibold">
								Taxation
							</h1>
							<p className="text-[14px] text-[#031F28] pt-5 leading-[24px]">
								Navigating the intricate landscape of taxation is our forte. Our
								Taxation services encompass strategic planning, meticulous
								preparation, and rigorous compliance to optimize your tax
								position. We stay abreast of ever-changing tax regulations,
								identifying opportunities for deductions and credits.
							</p>
						</div>
					</div>
					<div className="bg-[#EDF1F2] p-5 rounded">
						<div className="text-[30px] text-[#031F28]">03</div>
						<div className="flex flex-col">
							<h1 className="text-[25px] pt-7 text-[#3a3939] font-semibold">
								Auditing
							</h1>
							<p className="text-[14px] text-[#031F28] pt-5 leading-[24px]">
								Our Auditing services offer more than just compliance. We
								conduct thorough examinations of your financial statements,
								internal controls, and processes. Our goal is to provide
								assurance on the accuracy of your financial information while
								identifying opportunities for operational improvement.
							</p>
						</div>
					</div>
					<div className="bg-[#EDF1F2] p-5 rounded">
						<div className="text-[30px] text-[#031F28]">04</div>
						<div className="flex flex-col">
							<h1 className="text-[25px] pt-7 text-[#3a3939] font-semibold">
								Bussiness Advisory
							</h1>
							<p className="text-[14px] text-[#031F28] pt-5 leading-[24px]">
								Consider us your partners in growth. Our Business Advisory
								services go beyond analysis; we collaborate with you to develop
								and execute strategic plans. Whether you're entering new
								markets, launching new products.
							</p>
						</div>
					</div>
					<div className="bg-[#EDF1F2] p-5 rounded">
						<div className="text-[30px] text-[#031F28]">05</div>
						<div className="flex flex-col">
							<h1 className="text-[25px] pt-7 text-[#3a3939] font-semibold">
								Financial Advisory
							</h1>
							<p className="text-[14px] text-[#031F28] pt-5 leading-[24px]">
								Secure your financial future with our Financial Advisory
								services. Our seasoned advisors work closely with you to develop
								personalized investment strategies, manage wealth effectively,
								and plan for a comfortable retirement.
							</p>
						</div>
					</div>
					<div className="bg-[#EDF1F2] p-5 rounded">
						<div className="text-[30px] text-[#031F28]">06</div>
						<div className="flex flex-col">
							<h1 className="text-[25px] pt-7 text-[#3a3939] font-semibold">
								Merchandise
							</h1>
							<p className="text-[14px] text-[#031F28] pt-5 leading-[24px]">
								Explore new horizons in the world of merchandise with our
								Merchandise Consulting and Advisory services. We guide you
								through every aspect, from optimizing inventory management to
								strategic market positioning
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
