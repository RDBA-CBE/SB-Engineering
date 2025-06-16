import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import CareerBanner from "@/components/Sb-about/CareerBanner";
import CareerForm from "@/components/Sb-about/CareerForm";
import MblBanner from "@/components/Sb-about/MblBanner";
import CareerHero from "@/components/Sb-about/CareerHero";
import { LucidePhone, MailIcon, Phone, PhoneCall, PhoneIcon, Timer } from "lucide-react";

import React from "react";

export const metadata = {
  title: "Careers",
  description: ""
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-gray">

          <CareerBanner/>
          <MblBanner title="Career"/>
          <CareerHero/>

            <CareerForm/>
            

           

            
         

        </div>
        <div className=" bg-gray" style={{paddingTop:"60px"}}>
          <Footer25 />
        </div>
        
      </div>
    </>
  );
}
