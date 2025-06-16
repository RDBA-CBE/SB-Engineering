import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import MblBanner from "@/components/Sb-about/MblBanner";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";

export const metadata = {
  title: "Architectural Design",
  description: ""
};
export default function page() {

    const banner ={
        title:"Architectural Design",
        link:"architectural-design",
        img:"/images/about/event/archi-banner.jpg"
    }

    const innovativesolutions ={
        title:"Innovative solutions for sustainable impact",
         content1:"At SB Engineers, our expertise and client-centric approach enable us to deliver cutting-edge architectural design solutions that include the entire project lifecycle, from initial planning and conceptualization to final completion. With a strong focus on sustainability, we ensure our architectural designs are best-in-class, environmentally responsible and future-ready.",
         content2:"We work closely with clients to understand their vision and objectives, translating them into innovative, practical designs that optimize space, functionality and aesthetics. Whether you are embarking on a new development or redesigning an existing space, we deliver architectural designs tailored to your unique project goals.",
         img:"/images/about/event/innovative-solutions.jpg"
    }


      const serviceContent = {
        title: "Our architectural design expertise covers",
        img:"/images/about/event/our-architectural-design.jpg",
        list: [
          "Master Planning & Urban Design",
          "Residential",
          "Retail",
          "Industrial and Commercial",
          "Hospitality",
          "Sports, Leisure & Culture",
          "Education",
          "Healthcare",
          "Public Realm & Landscaping",
          "Interior Design",
        ],
      };

      const addedValue={
        title:"How we add value",
         content1:"Our architectural design services go beyond aesthetics. We integrate sustainable design principles to lower environmental impact and operational costs. We prioritize open communication and teamwork through each phase of the process, ensuring that your project is delivered on time, within budget and complies with industry benchmarks.",
        
         img:"/images/about/event/how-we-add-value.jpg"
      }
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
         
        <ServiceBanner banner={banner}/>
        <MblBanner title="Architectural Design"/>
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
