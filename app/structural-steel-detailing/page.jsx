import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import MblBanner from "@/components/Sb-about/MblBanner";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";

import ExpertiseTableTwo from "@/components/SBService/ExpertiseTableTwo";
import Deliverables from "@/components/SBService/Deliverables";

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
        title:"Structural Steel Detailing",
         content1:"At SB Engineers, we specialize in delivering high-precision structural steel detailing solutions that form the backbone of efficient steel fabrication and erection. Our services support fabricators, contractors, structural engineers, and EPC firms — offering detailed drawings, 3D models, and bills of materials that eliminate guesswork, reduce delays, and minimize on-site issues.",
        // content2:"We use advanced software like Tekla Xsteel for 2D drafting and 3D modelling to help fabricators, contractors and engineers bring complex steel structures to life. Our services cater to a wide range of sectors including residential, commercial, industrial and infrastructure.",
        // content3:"Our experienced detailing team work closely with clients to produce shop-ready drawings and models that eliminate ambiguities, reduce material wastage and enhance project timelines. Whether you're building from the ground up or upgrading existing infrastructure, our steel detailing services are designed to meet your unique project specifications.",
         img:"/images/structural-steel-detailing/structural-steel-detailing.webp"
    }


      const addedValue={
        title:"What Sets Us Apart",
         content1:"<ul class='services-list-item'><li><b>Precision & Compliance</b><p> Drawings adhere to international standards like AISC, IS, BS, and Eurocodes.</p></li><li><b>Constructability Focus</b><p>We prioritize real-world assembly feasibility and avoid over-engineered or impractical detailing.</p></li><li><b>Fast Turnarounds</b><p>Agile processes and an experienced team help us meet tight schedules without sacrificing quality.</p></li><li><b>3D Coordination</b><p>We work closely with other disciplines (structural, MEP, architectural) to ensure all conflicts are resolved before they reach the site.</p></li><li><b>Global Experience</b><p>We’ve successfully detailed projects across commercial, industrial, infrastructure, and residential sectors worldwide.</p></li></ul>",
        
         img:"/images/structural-steel-detailing/what-sets.webp"
      }

       const serviceContent = {
    title: "Our Capabilities",
    img: "/images/structural-steel-detailing/our-capabilities.webp",
    list: [
      "<b>Shop & Fabrication Drawings</b><p>Complete detailing for columns, beams, trusses, braces, stairs, handrails, ladders, and more — ready for direct fabrication.</p>",
      "<b>Connection Detailing</b><p>We develop clear detailing for welded and bolted joints, including base plates, splice plates, stiffeners, and gussets — per structural engineer's specifications or design-build inputs.</p>",
    "<b>3D Steel Modeling</b><p>Using tools like Tekla Structures, SDS/2, Advance Steel, or Revit, we create clash-free, coordinated 3D models aligned with the rest of the project (BIM compatible).</p>",
    "<b>Erection Drawings</b><p>Logical and safe erection sequences, anchor bolt plans, and on-site coordination drawings to ensure smooth assembly.</p>",
    "<b>Bills of Materials (BoM)</b><p>Material take-offs with exact quantities, sizes, weights, and specifications — aiding procurement, cost estimation, and logistics planning.</p>",
    "<b>Anchor Bolt & Base Plate Detailing</b><p>We accurately detail embedded items with necessary alignment, leveling, and installation information for proper integration with civil works.</p>",
    ],
  };
 

  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
         
        <ServiceBanner banner={banner}/>
        <MblBanner title="Structural Steel Detailing"/>
        <Innovativesolutions innovativesolutions={innovativesolutions}/>
        <ServiceExtpertise serviceContent={serviceContent} />
        <AddedValue addedValue={addedValue}/>
        <Deliverables/>
      

        </div>
        <div className="footertop">
          <Footer25 />
        </div>
        
      </div>
    </>
  );
}
