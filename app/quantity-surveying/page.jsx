import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import MblBanner from "@/components/Sb-about/MblBanner";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";

export const metadata = {
  title: "About",
  description: ""
};
export default function page() {

    const banner ={
        title:"Quantity Surveying",
        link:"quantity-surveying",
        img:"/images/about/event/quantity-banner.jpg",
    }

    const innovativesolutions ={
        title:"",
         content1:"At SB Engineers, our Quantity Surveying services are designed to add value at every stage of your project. With a deep understanding of construction processes, financial planning and client goals, we go beyond conventional cost estimation to offer comprehensive cost control, risk assessment and contract advisory services.",
         content2:"Our team of experienced Quantity Surveyors works closely with clients, consultants and contractors to ensure every financial aspect of the project is accounted for, from feasibility to final account settlement. We prioritize transparency, efficiency and sustainability to support project delivery within scope, time and budget.",
         content3:"Whether you're developing a large-scale commercial complex or a public infrastructure asset, we have the expertise to effectively allocate resources, monitor costs rigorously, and maximize value.",
         img:"/images/about/event/about3.jpg"
    }


      const serviceContent = {
        title: "Our Quantity Surveying Services include:",
         img:"/images/about/event/our-quantity-surveying.jpg",
        list: [
          "Cost Consultancy & Estimation",
          "Lifecycle Cost Planning & Budget Forecasting",
          "Value Engineering & Optimization",
          "Tender Preparation, Analysis & Bid Evaluation",
          "Procurement Strategy & Advice",
          "Contract Documentation & Management",
          "Change Management & Variation Analysis",
          "Claims, Dispute Resolution & Risk Management",
          "Ongoing Cost Monitoring & Reporting",
          "Final Account Preparation & Negotiation",
        ],
      };

      const addedValue={
        title:"How we add value",
         content1:"At SB Engineers, we align our cost strategies with your project vision. Our quantity surveying services are not only about managing numbers, they’re about enabling smarter decisions. ",
        
         img:"/images/about/event/how-we-value.jpg"
      }
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
         
        <ServiceBanner banner={banner}/>
        <MblBanner title="Quantity Surveying"/>
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
