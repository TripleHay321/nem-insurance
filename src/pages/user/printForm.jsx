import React from "react";
import Header from "../../components/common/header";
import { 

  Calender, 
  UserIcon, 
  ContactIcon, 
  PhoneIcon,
  TimeIcon,
  QueryIcon,
  AlarmIcon,
  GroupIcon

} from "../../assets";
import { useNavigate } from "react-router-dom";

let userDetails = [
  {
    icon :  `${UserIcon}`,
    title : "ID",
    value : "MD2041A/291",
    valueExtra: ""
  },
  {
    icon :  `${UserIcon}`,
    title : "Full Name",
    value : "Andre Tosin,",
    valueExtra: "ADERINDE"
  },
  {
    icon :  `${ContactIcon}`,
    title : "Email Address",
    value : "andretosin@gmail.com",
    valueExtra: ""
  },
  {
    icon :  `${PhoneIcon}`,
    title : "Phone Number",
    value : "+234 812 888 5604",
    valueExtra: ""
  },
  {
    icon :  `${Calender}`,
    title : "Date",
    value : "22/10/2023",
    valueExtra: ""
  },
  {
    icon :  `${TimeIcon}`,
    title : "Time",
    value : "15:30",
    valueExtra: "WAT"
  },
  {
    icon :  `${QueryIcon}`,
    title : "Reason for Visit (Optional)",
    value : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt",
    valueExtra: ""
  },
  {
    icon :  `${AlarmIcon}`,
    title : "Invite Status",
    value : "Scheduled",
    valueExtra:""
  },
  {
    icon :  `${GroupIcon}`,
    title : "Reception By",
    value : "James,",
    valueExtra: "ANDREW"
  }

];

export default function PrintForm() {
  const navigate = useNavigate();

  const handlePrint = () => {
    navigate("/");
  };
  return (
    <div>
      <Header />
      <div className="my-10 ">
        <h1 className="text-black font-dmSans font-bold text-4xl text-center">Invite Details/Status:  <span className="text-[#828282]">MD2041A/291</span> </h1>
      </div>
      <div className="overflow-y-auto py-14 h-screen w-full flex flex-col justify-center items-center">
        {userDetails.map((userDetail) => {
          return (
            <div key={userDetail.title} className="w-[70%] py-6  font-roboto flex justify-between items-center">
              <div className="flex justify-center items-center gap-3">
                <div>
                  <img src={userDetail?.icon} alt="" />
                </div>
                <div>
                  <h3 className="w-full px-4 py-2">{userDetail?.title}</h3>
                </div>
              </div>
                        
              <div className=" text-left w-[20rem]">
                <h3 className="px-4 py-2 ">{userDetail?.value} <span>{ !undefined && (`${userDetail?.valueExtra}`) }</span></h3>
              </div>
            </div>
          );

        })}

            
        
      </div>
      <div className="flex py-10 justify-end items-center pr-10">
        <button
          type="button"
          className="bg-[#4F4F4F] font-bold w-[10rem] py-3 text-white rounded-lg outline-none border-none font-dmSans"
          onClick={handlePrint}
        >
                    Print
        </button>
      </div>
    </div>
  );
}
