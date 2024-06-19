import React from 'react';

export default function Banner() {
	return (
		<div>
			<div className="lg:pt-[130px] pt-[85px]">
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
	);
}
