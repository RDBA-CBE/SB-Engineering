import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";

export const metadata = {
  title: "MEP Engineering",
  description: ""
};
export default function page() {

    const banner ={
        title:"MEP Engineering",
        link:"mep-engineering"
    }

    const innovativesolutions ={
        title:"Smart building systems for efficient, safe, and comfortable spaces",
        content1:"Our Mechanical, Electrical and Plumbing (MEP) engineering services form the core of functional and sustainable building design. We specialize in delivering fully integrated MEP solutions that support seamless building performance to assure safety, efficiency and occupant comfort across all project types.",
        content2:"Our experienced team of engineers and design experts work closely with our clients to provide intelligent system designs that align with project goals, architectural intent and compliance requirements. Our MEP services are comprehensive and cover the entire project lifecycle, from concept to construction documentation.",
        content3:"Whether it’s a new build or refurbishing existing facilities, SB Engineers offer solutions tailored to your building’s operational and energy efficiency needs.",
        img:"/images/about/event/about3.jpg"
    }


      const serviceContent = {
        title: "Our MEP expertise covers:",
         img:"/images/about/about3.jpg",
        list: [
          "HVAC Design",
          "Plumbing Design",
          "Electrical Design",
          "Fire Protection Design",
          "ELV",
        ],
      };

      const addedValue={
        title:"How we add value",
         content1:"We don’t just design systems, we engineer smart, coordinated solutions that enhance building performance and minimize lifecycle costs. Using advanced CAD and BIM tools, we ensure that MEP components are integrated into the overall building design, reducing clashes and improving construction efficiency.",
         content2:"At SB Engineers, we prioritize clear communication and integrated project delivery through every stage, resulting in MEP systems that are technically sound, scalable and sustainable, aligning with your long-term vision.",
        
         img:"/images/about/event/about3.jpg"
      }
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
         
         <ServiceBanner banner={banner}/>
          <Innovativesolutions innovativesolutions={innovativesolutions}/>

        <ServiceExtpertise serviceContent={serviceContent} />

        <AddedValue addedValue={addedValue}/>




        </div>
        <div className="footertop">
          <Footer25 />
        </div>
        
      </div>
    </>
  );
}
