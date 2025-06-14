import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";

import ExpertiseTableTwo from "@/components/SBService/ExpertiseTableTwo";

export const metadata = {
  title: "About",
  description: ""
};
export default function page() {

    const banner ={
        title:"Structural Steel Detailing",
        link:"structural-steel-detailing",
        img:"/images/about/event/struct-steel-banner.jpg"
    }

    const innovativesolutions ={
        title:"",
         content1:"SB Engineers delivers high-quality structural steel detailing services that support structural integrity, improve fabrication efficiency and ensure flawless on-site execution. With a commitment to accuracy and innovation, our detailing solutions cover the entire project lifecycle, from initial concepts and modelling to final fabrication and erection drawings.",
         content2:"We use advanced software like Tekla Xsteel for 2D drafting and 3D modelling to help fabricators, contractors and engineers bring complex steel structures to life. Our services cater to a wide range of sectors including residential, commercial, industrial and infrastructure.",
         content3:"Our experienced detailing team work closely with clients to produce shop-ready drawings and models that eliminate ambiguities, reduce material wastage and enhance project timelines. Whether you're building from the ground up or upgrading existing infrastructure, our steel detailing services are designed to meet your unique project specifications.",
         img:"/images/about/event/struct-img.jpg"
    }


      const addedValue={
        title:"How we add value",
         content1:"Our structural steel detailing services go beyond technical drawings. We bring a deep understanding of construction workflows, fabrication constraints and industry standards to every project. We prioritize clarity, synergy and precision to ensure that each component is correctly represented, connected and ready for efficient assembly.",
        
         img:"/images/about/event/how-we-struc-steel.jpg"
      }

       const serviceContent = {
    title: "Our structural steel detailing expertise includes:",
    img: "/images/about/event/our-structural.jpg",
    list: [
      "Detailed Fabrication Drawings",
      "2D Shop Drawings",
      "Joist Shop Drawings",
      "Handrail Shop Drawings",
      "Stair Shop Drawings",
      "3D Modelling",
      "Tekla Xsteel Detailing",
      "Output in multiple formats like pdf, tiff, plt, etc.",
    ],
  };
 

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
