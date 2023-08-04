import React from 'react';
import banking from '../assets/Bbanking.svg';
import premium from '../assets/PremiumH.svg';
import onepint from '../assets/Onepint.svg';
import Idan from '../assets/Idan.svg';
import glitzy from '../assets/Gmoney.svg';
import market from '../assets/Marketplace.svg';
import { useState } from 'react';

export default function Portfolio() {
  const [showMore, setShowMore] = useState('hidden');
  const [hideMore, setHideMore] = useState('block');
  const scrollToSection = () => {
    // Replace 'sectionID' with the ID of the section you want to scroll to
    const section = document.getElementById('sectionID');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const HandleShowMore = () => {
    setShowMore('block');
    setHideMore('hidden');
  };
  const HandleHideMore = () => {
    setShowMore('hidden');
    setHideMore('block');
    scrollToSection();
  };

  return (
    <div
      className="lg:pb-[100px] pb-[20px] lg:px-[60px] px-[15px] lg:pt-[70px] pt-[40px] bg-[#0C0C0C] text-[#CCCCCC]"
      id="works">
      <div>
        <h1 className="lg:text-[32px] text-[14px] text-center text-[#EEEEEE] font-semibold md:leading-[60px] leading-[21px] ">
          Portfolio
        </h1>
        <div className="lg:pt-10 pt-[10px]">
          <div className=" flex lg:flex-row flex-col lg:justify-between lg:gap-[60px] gap-[40px] ">
            <div className="lg:w-1/3 w-full">
              <img className="w-full scale-90 lg:scale-100 " src={banking} />
              <p className="text-center text-[12px] text-[#AAAAAA] lg:pt-7 pt-2">
                Fintech app
              </p>
              <p className="text-center text-[14px] font-semibold pt-1">
                B-Banking
              </p>
            </div>

            <div className=" lg:w-1/3 w-full">
              <img className=" w-full scale-90 lg:scale-100 " src={premium} />
              <p className="text-center text-[12px] text-[#AAAAAA] lg:pt-7 pt-2">
                Healthcare app
              </p>
              <p className="text-center text-[14px] font-semibold pt-1">
                Premium health
              </p>
            </div>
            <div className="lg:w-1/3 w-full">
              <img className="w-full scale-90 lg:scale-100" src={Idan} />
              <p className="text-center text-[12px] text-[#AAAAAA] lg:pt-7 pt-2">
                E-Commerce
              </p>
              <p className="text-center text-[14px] font-semibold pt-1">
                Dan-Aike
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center lg:hidden  lg:mt-[40px] mt-[28px] ">
            <button
              className={`${hideMore} border border-r-0 border-l-0 border-t-0 border-b-2 border-b-[#FFFFFF]`}
              id="sectionID"
              onClick={HandleShowMore}>
              view more
            </button>
          </div>

          <div
            className={`${showMore}  lg:flex lg:flex-row flex-col lg:justify-between lg:gap-[60px] gap-[40px] lg:mt-[80px]`}>
            <div className="lg:w-1/3 w-full">
              <img className="w-full scale-90 lg:scale-100 " src={onepint} />
              <p className="text-center text-[12px] text-[#AAAAAA] lg:pt-7 pt-2">
                Fintech app
              </p>
              <p className="text-center text-[14px] font-semibold pt-1">
                B-Banking
              </p>
            </div>

            <div className=" lg:w-1/3 w-full lg:mt-0  mt-[40px]">
              <img className=" w-full scale-90 lg:scale-100 " src={glitzy} />
              <p className="text-center text-[12px] text-[#AAAAAA] lg:pt-7 pt-2">
                Healthcare app
              </p>
              <p className="text-center text-[14px] font-semibold pt-1">
                Premium health
              </p>
            </div>
            <div className="lg:w-1/3 w-full lg:mt-0  mt-[40px]">
              <img className="w-full scale-90 lg:scale-100" src={market} />
              <p className="text-center text-[12px] text-[#AAAAAA] lg:pt-7 pt-2">
                E-Commerce
              </p>
              <p className="text-center text-[14px] font-semibold pt-1">
                Dan-Aike
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center lg:hidden  lg:mt-[40px] mt-[28px] ">
            <button
              className={`${showMore} border border-r-0 border-l-0 border-t-0 border-b-2 border-b-[#FFFFFF]`}
              onClick={HandleHideMore}>
              view less
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
