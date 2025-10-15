import Innovativesolutions from "@/components/SBService/ServiceIntro";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import MblBanner from "@/components/Sb-about/MblBanner";
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
        link:"eebar-detailing",
        img:"/images/about/event/eeber-banner-image.jpg"
    }

    const innovativesolutions ={
        title:"",
         content1:"At SB Engineers, we provide highly accurate rebar detailing services that are essential for the structural integrity and performance of reinforced concrete structures. Our experienced team uses advanced detailing software to develop comprehensive fabrication drawings that ensure precision, reduce material wastage and improve construction workflows.",
       //  content2:"From high-rise buildings to infrastructure and industrial facilities, we deliver bespoke rebar detailing solutions that meet global standards and project specifications. Our rebar drawings are created from structural design documents, offering precise bar bending schedules (BBS), quantity estimations and placing drawings that support efficient on-site execution.",
         //content3:"Whether you're working on a new development or redesigning an existing structure, our detailing services are designed to enhance constructability, minimize delays and improve teamwork between stakeholders.",
         //img:"/images/about/event/eeber.jpg"
    }


      const addedValue={
        title:"Why Choose Our Rebar Detailing",
         content1:"<ul class='services-list-item'><li><b>Precision and Clarity</b><p>We prepare clear, unambiguous drawings that reduce errors on-site.</p></li><li><b>Standards Compliance</b><p>We follow relevant standards (local & international) to ensure safety and structural integrity.</p></li><li><b>Cost & Time Efficiency</b><p>By optimizing bar schedules, avoiding clashes, and giving reliable take-offs, we help you save time and reduce wastage.</p></li><li><b>Experienced Team</b><p>Our engineers and detailers bring solid hands-on experience in varied building, infrastructure, and industrial projects.</p></li><li><b>Smooth Coordination</b><p>Seamless integration with structural, architectural, and fabrication teams to ensure coherence in project execution.</p></li></ul> ",
        
         img:"/images/rebar/why-choose-ou-reba-detailing.webp"
      }
      const serviceContent = {
    title: "What We Provide",
    img: "/images/rebar/whst-we-provide.webp",
    list: [
      "<b>Shop & Placement Drawings</b><p>Detailed drawings that show exact dimensions, bends, hooks, lap splices, anchoring, cover, and positioning of rebars aligned with structural and architectural design.</p>",
      "<b>Bar Bending Schedule (BBS)</b><p>Complete schedules listing the shape, length, size, weight, and quantity of each rebar. Clearly formatted for fabrication and procurement.</p>",
      "<b>2D & 3D Modelling</b><p>Visual models to help you see reinforcement layout in context. Helps identify clashes or interferences before fabrication/installation begins.</p>",
      "<b>Quantity Take-offs & Estimation</b><p>Accurate measurements of material needs to avoid over-ordering or wastage, assist budgeting, and maintain cost control.</p>",
      "<b>Constructability Review</b><p>Detailed evaluation of design drawings for practicality on site—checking spacing, cover, reinforcement congestion, etc.—to avoid delays or rework.</p>",
      "<b>As-built Drawings / Final Documentation</b><p>Updated drawings reflecting actual installation for future reference, inspection and maintenance.</p>",
    ],
  };
       const serviceContent1 = {
    title: "Foundation Details",
    img: "/images/about/event/about3.jpg",
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
        <MblBanner title="Rebar Detailing"/>
        <Innovativesolutions innovativesolutions={innovativesolutions}/>

        <ServiceExtpertise serviceContent={serviceContent} />

         {/* <ExpertiseTableTwo
                    serviceContent1={serviceContent1}
                    serviceContent2={serviceContent2}
                     serviceContent3={serviceContent3}
                     serviceContent4={serviceContent4}
                     serviceContent5={serviceContent5}

                  /> */}

        <AddedValue addedValue={addedValue}/>




        </div>
        <div className="footertop">
          <Footer25 />
        </div>
        
      </div>
    </>
  );
}
