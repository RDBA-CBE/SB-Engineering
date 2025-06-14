import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";

export const metadata = {
  title: "About",
  description: ""
};
export default function page() {

    const banner ={
        title:"Project Management",
        link:"project-management",
        img:"/images/about/event/proj-manag-banner.jpg",
    }

    const innovativesolutions ={
        title:"Seamless Execution from Concept to Completion",
         content1:"Our Project Management services are designed to drive success across every stage of your construction journey. We bring together proven methodologies, technical expertise and a collaborative approach to ensure your project is delivered on time, within budget, meeting the highest standards of quality.",
         content2:"Our team has extensive experience across diverse sectors, in coordinating resources and managing risks. They work in synergy and maintain transparent communication between stakeholders to keep your project on track. Whether it’s a large-scale industrial development or a complex commercial facility, we take ownership of the process so you can stay focused on the bigger picture.",
         img:"/images/about/event/project-management.jpg"
    }


      const serviceContent = {
        title: "Our Project Management Expertise Includes:",
         img:"/images/about/event/our-project.jpg",
        list: [
          "Planning & Scheduling",
          "Cost Management",
          "Risk Management",
          "Quality Control",
          "Resource Management",
          "Contract Management",
          "Stakeholder Communication",
        ],
      };

      const addedValue={
        title:"How we add value",
         content1:"At SB Engineers, we understand that successful project delivery is more than just meeting deadlines. It’s about creating value at every step, through efficiency, precision and proactive leadership. ",
        
         img:"/images/about/event/how-we-project.jpg"
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
