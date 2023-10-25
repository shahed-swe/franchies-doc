import React from 'react'
import "./Card.css";
import playIcon from '../../assets/svg/PlayButton.svg'
import placeholderLogo from '../../assets/svg/logoPlaceholder.svg'
import tagicon from "../../assets/svg/tagicon.svg";
import taglogo from "../../assets/svg/tagiconlogo.svg";
import stars from "../../assets/svg/5StarRating.svg";
import rightArrow from "../../assets/svg/rightArrow.svg";

const SingleCard = (props) => {
  return (
    <div className={props.isSlider ? "lg:w-[95%] md:w-[100%]  bg-blue bg-[#f5f5f5] rounded-lg card-item":"lg:w-[45%] md:w-[100%]  bg-blue bg-[#f5f5f5] rounded-lg card-item"}>
    <div className=" p-3">
      <div className="bg-[#fff] p-2 rounded-lg">
        <div className="flex w-[100%] gap-3">
          <div className="w-[20%]">
            <img src={placeholderLogo} alt="" />
          </div>
          <div className="w-[80%]">
            <div className="font-[Montserrat] text-[25px] leading-[30px]">
              SUPPLIER NAME
            </div>
            <div className="flex font-[600] items-center text-[20px] leading-[24px] mt-[2%] font-[Montserrat] review-res">
              4.9 <img src={stars} alt="" className="mx-3" />{" "}
              <span className="text-[#eb0544] flex text-[12px] items-center font-[Montserrat]">
                10 REVIEWS{" "}
                <img src={rightArrow} alt="" className="mx-3" />
              </span>
            </div>
          </div>
          <div className="ribbon">
            <img src={tagicon} alt="" className="m-auto " />
            <p className="mt-[-122%] relative font-[Montserrat] font-normal text-[14px]"><img src={taglogo} alt="" className="mx-auto pb-[6px]" />Franchise Sales</p>
          </div>
        </div>
        <div className="flex w-[100%] border-t-2 border-gray-200 gap-8 mt-5">
          <div className="w-[50%] border-r-2 border-gray-200">
            <div className="font-[Montserrat] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6 mb-[12px]">
              Location:
            </div>
            <div className="font-[Montserrat] font-[500] text-[24px] leading-[30px]">
              Houston, TX
            </div>
          </div>
          <div className="w-[50%]">
            <div className="font-[Montserrat] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6 mb-[12px]">
              Founded:
            </div>
            <div className="font-[Montserrat] font-[500] text-[24px] leading-[30px]">
              2013
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="p-3">
      <div className="font-[Montserrat] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6 mb-[12px]">
        Description:
      </div>
      <div className="font-[Montserrat] font-[400] text-[14px] leading-[22px] mb-[12px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
        massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
        sapien fringilla, mattis ligula consectetur, ultrices mauris.
      </div>
    </div>
    <div className="flex w-[100%] mt-2 view-brand-res">
      <div className="w-[50%] brand-page font-[Montserrat] font-[500] text-[20px] flex justify-center items-center leading-[37px] cursor-pointer view-brand-res-btn">
        <button className="px-[14px] py-[12px]">VIEW BRAND PAGE</button>
      </div>
      <div className="w-[50%] supply-btn flex justify-center items-center font-[Montserrat] font-[500] text-[20px] leading-[37px] cursor-pointer view-brand-res-btn">
        <button className="px-[0px] py-[12px] flex items-center">
          MEET THE SUPPLIER{" "}
          <img src={playIcon} alt="" className="ml-3" />{" "}
        </button>
      </div>
    </div>
  </div>
  )
}

export default SingleCard