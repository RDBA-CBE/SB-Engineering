import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import MblBanner from "@/components/Sb-about/MblBanner";

import Service from "@/components/SBService/SteelServiceList.jsx";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";
import Services1 from "@/components/homes/home-15/Services1";
import Services2 from "@/components/homes/home-13/Services2";

export const metadata = {
  title: "Steel &  Rebar Detailing (Tekla)",
  description: ""
};
export default function page() {
  const service2 = [
    {
      id: 83,
      name: '01',
      image: '/images/about-us/architectural-design.png',
      title: 'Structural Steel Detailing',
    //   description:
    //     'We believe that great partnerships are built on trust. That’s why, from client interactions to project execution, we ensure honesty, transparency and ethical practices in everything we do.',
      delay: '0.2s',
      link: 'structural-steel-detailing',
    },
    {
      id: 84,
      name: '02',
      image: '/images/about-us/structural-engineering.png',
      title: 'Precast Detailing',
    //   description:
    //     'With a commitment to excellence, we adopt stringent quality control to ensure our deliverables are both effective and enduring.',
      delay: '0.4s',
      link: 'precast-detailing',
    },
    {
      id: 85,
      name: '03',
      image: '/images/about-us/mep-engineering-services.png',
      title: 'Rebar Detailing',
    //   description:
    //     'We work closely with our clients at each phase, listening, adapting and designing solutions that reflect their vision and needs.',
      delay: '0.6s',
      link: 'rebar-detailing',
    },]
    
    const banner ={
        title:"Steel &  Rebar Detailing (Tekla)",
        link:"steel-& -rebar-detailing",
        img:"/images/about/event/steel-banner.jpg",
    }

    const innovativesolutions ={
        title:"Precision-driven detailing solutions for stronger structures",
         content1:"At SB Engineers, we offer specialized steel and rebar detailing services that combine technical expertise, industry best practices and cutting-edge tools to deliver accurate and reliable detailing solutions for all types of structural projects. From conceptual design to fabrication-ready drawings, our detailing solutions are crafted to support structural integrity, construction efficiency and compliance with global standards.",
         content2:"Our team of experienced detailers and engineers work closely with our clients to produce precise and coordinated detailing that reduces errors, minimizes rework and accelerates construction timelines. Whether for new builds or renovating existing projects, our services are customized to meet the exact needs of architects, consultants, contractors and fabricators.",
         img:"/images/about/event/precision-driven.jpg"
    }


      const serviceContent = {
        title: "Our steel and rebar detailing expertise covers:",
        img:"/images/about/event/our-steel-and-rebar.jpg",
        list: [
          "Steel Detailing Services",
          "Rebar Detailing Services",
          "Precast Detailing Services",
        ],
      };

      const addedValue={
        title:"How we add value",
        content1:"We combine accuracy, speed, and technical depth to consistently deliver design solutions that exceed expectations. Our team uses advanced tools like Tekla and AutoCAD to ensure high precision and compliance with global benchmarks and client-specific standards.",
        content2:"We adopt stringent quality control throughout the detailing lifecycle to help clients reduce project risks, control costs and maintain construction schedules without compromise.",
        img:"/images/about/event/how-we-do-steel.jpg"
      }
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
         
        <ServiceBanner banner={banner}/>
        <MblBanner title="Steel &  Rebar Detailing (Tekla)"/>
        <Innovativesolutions innovativesolutions={innovativesolutions}/>
        <Service SteelServiceContent ={service2} />
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
