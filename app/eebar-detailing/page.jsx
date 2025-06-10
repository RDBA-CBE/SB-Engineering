import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";

import ExpertiseTableTwo from "@/components/SBService/ExpertiseTableTwo";

export const metadata = {
  title: "Rebar Detailing",
  description: ""
};
export default function page() {

    const banner ={
        title:"Rebar Detailing",
        link:"eebar-detailing"
    }

    const innovativesolutions ={
        title:"",
         content1:"At SB Engineers, we provide highly accurate rebar detailing services that are essential for the structural integrity and performance of reinforced concrete structures. Our experienced team uses advanced detailing software to develop comprehensive fabrication drawings that ensure precision, reduce material wastage and improve construction workflows.",
         content2:"From high-rise buildings to infrastructure and industrial facilities, we deliver bespoke rebar detailing solutions that meet global standards and project specifications. Our rebar drawings are created from structural design documents, offering precise bar bending schedules (BBS), quantity estimations and placing drawings that support efficient on-site execution.",
         content3:"Whether you're working on a new development or redesigning an existing structure, our detailing services are designed to enhance constructability, minimize delays and improve teamwork between stakeholders.",
         img:"/images/about/event/about3.jpg"
    }


      const addedValue={
        title:"How we add value",
         content1:"Our rebar detailing services focus on accuracy, speed and constructability. By translating structural drawings into detailed rebar plans, we help contractors, fabricators and construction teams execute their projects efficiently and cost-effectively. ",
        
         img:"/images/about/event/about3.jpg"
      }

       const serviceContent1 = {
    title: "Foundation Details",
    img: "/images/about/about3.jpg",
    list: [
      "Roof Truss and Joint Details",
      "Constructability Reviews",
    ],
  };
  const serviceContent2 = {
    title: "Bar Bending Schedules",
    img: "/images/about/about3.jpg",
    list: [
      "Rebar 2D & 3D Modelling",
      "Retaining Wall Detailing",
      
    ],
  };

  const serviceContent3 = {
    title: "As-Built Drawings",
    img: "/images/about/about3.jpg",
    list: [
      "Grade Beam Detailing",
      "Total Rebar Estimation",
     
    ],
  };
  const serviceContent4 = {
    title: "Rebar Shop Drawings",
    img: "/images/about/about3.jpg",
    list: [
      "Quality Take-Offs",
      "Concrete Joint and Slab Details",
     
    ],
  };
  const serviceContent5 = {
    title: "Rebar Shop Drawings",
    img: "/images/about/about3.jpg",
    list: [
      "Bar Listing in ASA Format",
      "Concrete Masonry Detailing",
     
    ],
  };

  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
         
         <ServiceBanner banner={banner}/>
          <Innovativesolutions innovativesolutions={innovativesolutions}/>

        {/* <ServiceExtpertise serviceContent={serviceContent} /> */}

         <ExpertiseTableTwo
                    serviceContent1={serviceContent1}
                    serviceContent2={serviceContent2}
                     serviceContent3={serviceContent3}
                     serviceContent4={serviceContent4}
                     serviceContent5={serviceContent5}

                  />

        <AddedValue addedValue={addedValue}/>




        </div>
        <div className="footertop">
          <Footer25 />
        </div>
        
      </div>
    </>
  );
}
