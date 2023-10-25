import React from "react";
import "../Footer/Footer.css";
import profileimg from "../../assets/svg/testprofile.svg";
import ServiceSec from "../ServiceSec/ServiceSec";
import MyFeaturedSply from "../MyFeaturedSply/MyFeaturedSply";
const WhatClientSay = () => {
  return (
    <>
    <div className="footer-main">
    <ServiceSec />
      <div className="containterFranchies  ">
       <div className="pb-[14%] pt-[] flex justify-between items-center res-client">
       <div className="w-[40%] flex justify-center items-center">
          <img src={profileimg} alt="" className="" />
        </div>
        <div className="w-[60%] res-client-text">
          <h3 className="font-[Caveat] text-[#EB0444] text-[28px]">
            What Our Clients Say:
          </h3>
          <h2 className="font-[Montserrat] text-white text-[24px] font-semibold uppercase">
            “I get the information I want in one easy place. Worth every penny.”
          </h2>
          <p className="mt-[2%] text-white  font-[Montserrat] font-[400] text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Sem viverra sed ipsum tortor
            bibendum vestibulum ullamcorper vitae ullamcorper. Mi id cras risus
            cursus cursus malesuada. Eget sed scelerisque tristique quam vitae
            amet. Bibendum velit eget blandit pharetra at felis lorem risus.
            Gravida viverra tempor odio in tortor massa ut tristique. Interdum
            tempor id at nibh mauris. Gravida vel pellentesque feugiat donec.
            Neque eros dui pharetra id urna faucibus at varius fermentum. Neque
            facilisi fringilla adipiscing amet in eu proin.
          </p>
          <h6 className="mt-[2%] font-[Caveat] text-[#EB0444] text-[34px]">
            John Smith
          </h6>
          <p className=" text-white text-[14px] font-[Montserrat] font-normal">
            Co-Founder Fitness Premier{" "}
          </p>
        </div>
       </div>
      </div>
      <div className="menubtnCards ">
      <div className="containterFranchies  py-[5%]  ">
        <h2 className="m-auto w-full font-[Caveat] text-center my-8  supply-heading font-[400] text-[50px] leading-[49px] text-[#fff]">
            Supplier Review Database
          </h2>
     <MyFeaturedSply />
      </div>
      </div>
    </div>
    </>
  );
};

export default WhatClientSay;
