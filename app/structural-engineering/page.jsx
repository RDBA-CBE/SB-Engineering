import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";

export const metadata = {
  title: "Structural Engineering",
  description: ""
};
export default function page() {

    const banner ={
        title:"Structural Engineering",
        link:"architectural-design"
    }

    const innovativesolutions ={
        title:"Engineering strength and stability into every structure",
        content1:"At SB Engineers, we deliver high-performance structural engineering solutions that ensure the safety, stability and longevity of built environments. Our services cover the complete structural lifecycle, from concept development and structural analysis to detailed design and execution oversight.",
        content2:"Our expert structural engineers work closely with clients to deliver innovative and efficient designs that comply with industry benchmarks. Our structural design solutions are customized to meet the functional demands, project objectives and site-specific requirements. We use cutting-edge tools, industry best practices and rigorous analysis to ensure structures can confidently withstand applied loads and environmental forces.",
        img:"/images/about/event/about3.jpg"
    }


      const serviceContent = {
        title: "Ensuring precision, safety and reliability in all our structural engineering projects, which includes:",
         img:"/images/about/about3.jpg",
        list: [
          "Conventional RCC (Reinforced Cement Concrete) Structures",
          "Structural Steel Buildings",
          "Pre-Engineered Buildings (PEBs)",
          "Light Gauge Steel Structures",
          "Precast Concrete Structures",
          "Underground Structures",
          "Pipe Rack Supports",
          "Space Truss Buildings",
          "Load-Bearing Structures",
          "Post Tensioned Structures",
          "Composite Hollow Core Structures",
          "Precast Structures",
        ],
      };

      const addedValue={
        title:"How we add value",
        content1:"Our structural engineering services prioritize resilience, constructability and long-term performance. By integrating advanced materials, modelling techniques and cost-efficient design approaches, we help optimize both construction and lifecycle costs.",
        content2:"Our team work in synergy across all project phases to ensure structural integrity without compromising design intent. Our dedication to quality, safety standards and on-time delivery makes SB Engineers a trusted partner for structurally sound, futuristic infrastructure projects.",
        
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
