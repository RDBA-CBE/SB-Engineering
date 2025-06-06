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
        link:"structural-steel-detailing"
    }

    const innovativesolutions ={
        title:"Innovative solutions for sustainable impact",
         content1:"At SB Engineers, our expertise and client-centric approach enable us to deliver cutting-edge architectural design solutions that include the entire project lifecycle, from initial planning and conceptualization to final completion. With a strong focus on sustainability, we ensure our architectural designs are best-in-class, environmentally responsible and future-ready.",
         content2:"We work closely with clients to understand their vision and objectives, translating them into innovative, practical designs that optimize space, functionality and aesthetics. Whether you are embarking on a new development or redesigning an existing space, we deliver architectural designs tailored to your unique project goals.",
         img:"/images/about/event/about3.jpg"
    }


      const addedValue={
        title:"How we add value",
         content1:"Our architectural design services go beyond aesthetics. We integrate sustainable design principles to lower environmental impact and operational costs. We prioritize open communication and teamwork through each phase of the process, ensuring that your project is delivered on time, within budget and complies with industry benchmarks.",
        
         img:"/images/about/event/about3.jpg"
      }

       const serviceContent1 = {
    title: "Strategic Advantages",
    img: "/images/about/about3.jpg",
    list: [
      "Proven Experience Across Geographies",
      "Technology-Driven Delivery",
      "Integrated & Collaborative Approach",
    ],
  };
  const serviceContent2 = {
    title: "Our Structural BIM Capabilities Include",
    img: "/images/about/about3.jpg",
    list: [
      "3D Structural Modelling",
      "Structural Analysis Models",
      "Construction Documentation",
      "Reinforcement Detailing",
      
    ],
  };

  const serviceContent3 = {
    title: "Inputs We Work With:",
    img: "/images/about/about3.jpg",
    list: [
      "Conceptual Sketches and Markups",
      "Architectural and Structural Drawings",
      "Redline Corrections",
      "Design Briefs and BIM Execution Plans",
     
    ],
  };
  const serviceContent4 = {
    title: "Inputs We Work With:",
    img: "/images/about/about3.jpg",
    list: [
      "Conceptual Sketches and Markups",
      "Architectural and Structural Drawings",
      "Redline Corrections",
      "Design Briefs and BIM Execution Plans",
     
    ],
  };
  const serviceContent5 = {
    title: "Inputs We Work With:",
    img: "/images/about/about3.jpg",
    list: [
      "Conceptual Sketches and Markups",
      "Architectural and Structural Drawings",
      "Redline Corrections",
      "Design Briefs and BIM Execution Plans",
     
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
