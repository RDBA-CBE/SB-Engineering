import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import MblBanner from "@/components/Sb-about/MblBanner";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";

import ExpertiseTableThree from "@/components/SBService/ExpertiseTableThree";
import ServiceIntro from "@/components/SBService/ServiceIntro";

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
         content1:"At SB Engineers, our Precast Detailing Services are crafted to bring precision, efficiency, and reliability to every precast concrete project — from concept through fabrication to erection.",
        // content2:"We work closely with clients to understand their vision and objectives, translating them into innovative, practical designs that optimize space, functionality and aesthetics. Whether you are embarking on a new development or redesigning an existing space, we deliver architectural designs tailored to your unique project goals.",
         img:"/images/about/event/precast.jpg"
    }


      const addedValue={
        title:"Why Choose SB Engineers for Precast Detailing",
         content1:"<ul class='services-list-item'><li><b>Reduced Errors & Faster Turnaround</b><p>With detailed shop, erection and fabrication drawings, mistakes are caught early minimizing rework on site.</p></li><li><b>Cost & Time Savings </b><p>Optimized detailing, precise take-offs, and efficient workflow cut down waste, lower fabrication and installation costs, and speed up project completion.</p></li><li><b>Seamless Coordination </b><p>Strong integration with architects, structural engineers, fabricators and site teams to ensure everything fits together — literally.</p></li><li><b>Durability & Structural Integrity</b><p> Correct reinforcement, connection and cast-in detail ensures long-term performance and safety.</p></li><li><b>Expert Team & Tech-Driven Solutions</b><p>Our engineers bring both field experience and mastery of the latest tools (2D & 3D CAD/BIM) to every project.</p></li></ul>",
        
         img:"/images/about/event/how-we-do-precast.jpg"
      }
       const serviceContent = {
    title: "What We Offer",
    img: "/images/about/about3.jpg",
    list: [
      "<b>Precast Shop & Fabrication Drawings</b><p>Detailed drawings covering formwork geometry, mould/form layout, reinforcement, cast-in inserts/plates, connection points, and finish specifications for every precast element: panels, beams, columns, slabs, stairs, hollow & solid wall panels, etc.</p>",
      "<b>Erection & Installation Drawings</b><p>Clear plans, elevations, sections showing how precast elements fit together on site. Includes erection sequence, lifting & handling details (lifting hooks, inserts), bracket and support location, and alignment guidance.</p>",
      "<b>Reinforcement Detailing & Bar Bending Schedule (BBS)</b><p>Precise specification for rebar placement, bend shapes, lengths, lap splices, cover, and all reinforcement within each precast component. Accompanied by complete BBS for manufacturing and procurement.</p>",
      "<b>Connection Design & Cast-in Components</b><p>Designing and detailing connections between precast units and other structural or architectural elements. This includes all embedded plates, dowels, grout joints, and cast-in accessories.</p>",
      "<b>Quantity Take-Off & Material Estimation</b><p>Accurate calculation of material volumes (concrete, reinforcement, inserts), fittings, and accessories to support budgeting, ordering, and reduction of waste.</p>",
      "<b>3D Modeling & BIM Coordination</b><p>Use of advanced CAD/BIM tools (e.g. Revit, Tekla, AutoCAD) to model the precast components, detect clashes (structure, MEP), validate dimensions, and optimize for manufacture and erection.</p>",
      "<b>Quality Assurance and Standards Compliance</b><p>Ensuring all detailing adheres to relevant local and international codes and best practices. Strict quality checks on drawings, review loops, and deliverables in formats usable by fabrication plants and site teams.</p>",
    ],
  };
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
        <ServiceIntro innovativesolutions={innovativesolutions}/>

        <ServiceExtpertise serviceContent={serviceContent} />
{/* 
         <ExpertiseTableThree
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
