import React, { useState } from "react";
import Input from "../../components/atoms/input";
import AuthLayout from "../../layout/authLayout";
import { 

  UserIcon, 
  ContactIcon 

} from "../../assets";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [remember, setRemember] = useState(true);

  return (
    <div>
      <AuthLayout
        heading={"Sign in as an Admin!"}
        subHeading={"Enter your username and password"}>
        <form action="" method="post"  onSubmit={(e)=>{
          e.preventDefault();
        }}>

          <div>
            <div className="w-full">
              <Input className={"my-8"} label={"full name"} icon={UserIcon} type={"text"} placeholder={"Full Name"} defaultValue={fullName} onChange={e => setFullname(e.target.value)}/>
            </div>
            <div className="w-full">
              <Input className={"my-8"} label={"email address"} icon={ContactIcon} type={"email"} placeholder={"Email Address"} defaultValue={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="flex my-4 justify-start items-center gap-2">
              <div>
                <input type="checkbox" value={remember} onChange={e => setRemember(e.target.value)}/>
              </div>
              <div className="font-dmSan text-[#141414] font-400 text-md">Remeber my password</div>
            </div>                              
            <div className="flex justify-center items-center ">
              <button className="bg-[#4F4F4F] w-[20rem] py-3 text-white rounded-lg ">Login</button>
            </div>
            <div className=" text-center py-4">
              <Link className="font-roboto text-[#828282] underline text-md font-normal">Forgot Password?</Link>
            </div>
          </div>
          <div className="font-roboto text-[#828282] text-2xl flex justify-end items-end font-bold">
            <h2>ADMIN</h2>
          </div> 
        </form>
                    
      </AuthLayout>
    </div>
  );
}
