import React, { useEffect, useState } from "react";
import Line from "../../assets/svg/Line";
import "./Card.css";
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import SingleCard from "./SingleCard";
import pagination from "../../assets/svg/pagination.svg";
const data = [
  { id: 0, label: "Istanbul, TR (AHL)" },
  { id: 1, label: "Paris, FR (CDG)" },
];
const Cards = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <div>
      <div className="">
        <div className="w-[80%] m-auto mb-8">
          <div className="m-auto w-full font-[Caveat] text-center my-8 mt-24  supply-heading font-[400] text-[50px] leading-[49px] text-[#eb0c49]">
            Supplier Review Database
          </div>
          <div className="flex justify-around gap-8 card-dropdown w-[100%]">
            <div className="res-submit-btn w-[20%] text-end bg-[#d2043d] submit-button cursor-pointer flex justify-center items-center rounded-lg">
              <button className=" text-white font-[Montserrat] ">SUBMIT A REVIEW</button>
            </div>
            <div className="bg-[#f1f3f3]  w-[80%] rounded-lg">
              <div className="flex rounded-lg h-[80px] maincard-input">
                <div className="w-[50%] px-9 pt-[12px] font-[Montserrat] res-lable bg-[#f1f3f3]">
                  <label htmlFor="" className="text-[12px] text-[#f15681]">
                    Sort By Type
                  </label>
                  <div className="dropdown w-auto">
                  {/* onClick={toggleDropdown} */}
                    <div className="dropdown-header">
                      {selectedItem
                        ? items.find((item) => item.id == selectedItem).label
                        : "Accounting"}
                      <DownOutlined
                        className={`fa fa-chevron-right icon ${
                          isOpen && "open"
                        }`}
                        style={{fontSize:'12px'}}
                      />
                    </div>
                    <div className={`dropdown-body ${isOpen && "open"}`}>
                      {items.map((item) => (
                        <div
                          className="dropdown-item"
                          onClick={(e) => handleItemClick(e.target.id)}
                          id={item.id}
                        >
                          <span
                            className={`dropdown-item-dot ${
                              item.id == selectedItem && "selected"
                            }`}
                          >
                            •{" "}
                          </span>
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <Line className="pt-10" />
                <div className=" w-[50%] px-8 pt-[12px] font-[Montserrat] rounded-lg res-lable bg-[#f1f3f3]">
                  <label
                    htmlFor=""
                    className="text-[12px] text-[#f15681] font-[Montserrat]  w-[40%] "
                  >
                    Filter Reviews By
                  </label>
                  <div className="dropdown w-auto">
                    <div className="dropdown-header" onClick={toggleDropdown}>
                      {selectedItem
                        ? items.find((item) => item.id == selectedItem).label
                        : "Select"}
                      <DownOutlined
                        className={`fa fa-chevron-right icon ${
                          isOpen && "open"
                        }`}
                        style={{fontSize:'12px'}}

                      />
                    </div>
                    <div className={`dropdown-body ${isOpen && "open"}`}>
                      {items.map((item) => (
                        <div
                          className="dropdown-item"
                          onClick={(e) => handleItemClick(e.target.id)}
                          id={item.id}
                        >
                          <span
                            className={`dropdown-item-dot ${
                              item.id == selectedItem && "selected"
                            }`}
                          >
                            •{" "}
                          </span>
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="res-filter-btn w-[200px] text-end bg-[#d2043d] filter-button cursor-pointer flex justify-center items-center rounded-br-[10px] rounded-tr-[10px]">
                  <button className=" text-white font-[Montserrat]">FILTER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:flex  gap-8 lg:w-[90%] m-auto flex-wrap justify-center mb-[80px] md:col md:w-[100%] gap-y-8 md:mt-8">
         
          <SingleCard />
         <SingleCard />
         <SingleCard />
         <SingleCard />
         <SingleCard />
         <SingleCard />
         <div className="mt-[4%] cursor-pointer flex justify-center">
          <img src={pagination} alt=""  />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
