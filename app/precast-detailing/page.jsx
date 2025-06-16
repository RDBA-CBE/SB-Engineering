import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import MblBanner from "@/components/Sb-about/MblBanner";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";

import ExpertiseTableThree from "@/components/SBService/ExpertiseTableThree";

export const metadata = {
  title: "About",
  description: ""
};
export default function page() {

    const banner ={
        title:"Precast Detailing",
        link:"precast-detailing",
        img:"/images/about/event/precast-banner.jpg",
      }

    const innovativesolutions ={
        title:"",
         content1:"At SB Engineers, our expertise and client-centric approach enable us to deliver cutting-edge architectural design solutions that include the entire project lifecycle, from initial planning and conceptualization to final completion. With a strong focus on sustainability, we ensure our architectural designs are best-in-class, environmentally responsible and future-ready.",
         content2:"We work closely with clients to understand their vision and objectives, translating them into innovative, practical designs that optimize space, functionality and aesthetics. Whether you are embarking on a new development or redesigning an existing space, we deliver architectural designs tailored to your unique project goals.",
         img:"/images/about/event/precast.jpg"
    }


      const addedValue={
        title:"How we add value",
         content1:"Our precast detailing services are engineered to improve constructability and eliminate rework. By working in synergy with contractors, engineers and manufacturers, we ensure each precast element is modelled and detailed for precision assembly and long-term performance.",
        
         img:"/images/about/event/how-we-do-precast.jpg"
      }

       const serviceContent1 = {
    title: "Precast Panel Detailing Services",
    img: "/images/about/about3.jpg",
    list: [
      "Precast Shop Drawings",
      "Precast Beam Details",
      "Tekla Precast Panel Design",
    ],
  };
  const serviceContent2 = {
    title: "Precast Concrete Wall Systems",
    img: "/images/about/about3.jpg",
    list: [
      "Precast Joinery Details",
      "Precast Engineering Services",
      "Precast Beam-Column Connection Details",
      
    ],
  };

  const serviceContent3 = {
    title: "Precast Detailing Services",
    img: "/images/about/about3.jpg",
    list: [
      "Precast Cladding Panels",
      "Tekla Precast Concrete Detailing",
      "Grout, Ferrule Locations",
     
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
    title: "Tilt up Panel Detailing",
    img: "/images/about/about3.jpg",
    list: [
      "Precast Column Details",
      "Tekla Precast Panel",
      "Slab - Detailing",
     
    ],
  };

  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
         
        <ServiceBanner banner={banner}/>
        <MblBanner title="Precast Detailing"/>
        <Innovativesolutions innovativesolutions={innovativesolutions}/>

        {/* <ServiceExtpertise serviceContent={serviceContent} /> */}

         <ExpertiseTableThree
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
