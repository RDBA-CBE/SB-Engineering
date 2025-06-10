import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";
import ExpertiseTable from "@/components/SBService/ExpertiseTable";

export const metadata = {
  title: "About",
  description: "",
};
export default function page() {
  const banner = {
    title: "Building Information Modeling",
    link: "building-information-modeling",
  };

  const innovativesolutions = {
    title: "Intelligent Modelling, Accurate Insights and Smarter Structures.",
    content1:
      "SB Engineers is at the forefront of delivering competent Structural BIM Services. We integrate  engineering precision and cutting-edge technology to enhance structural design, coordination and construction efficiency. With deep domain expertise and a client-centric approach, we enable smarter decision-making through every phase of the structural lifecycle, from conceptual design and analysis to detailing and documentation.",
    content2:
      "We serve a diverse clientele across the residential, commercial, industrial and infrastructure sectors, offering BIM solutions tailored to project needs, regional norms, and global benchmarks.",
    img: "/images/about/event/about3.jpg",
  };

  const serviceContent = {
    title: "Strategic Advantages:",
    img: "/images/about/about3.jpg",
    list: [
      "Proven Experience Across Geographies",
      "Technology-Driven Delivery",
      "Integrated & Collaborative Approach",
    ],
  };
  const BIMCapabilities = {
    title: "Our Structural BIM Capabilities Include:",
    img: "/images/about/about3.jpg",
    list: [
      "3D Structural Modelling",
      "Structural Analysis Models",
      "Construction Documentation",
      "Reinforcement Detailing",
      "Shop and Fabrication Drawings",
      "Smart Schedules &  Quantity Take-Offs",
      "LOD-Based BIM Modelling",
    ],
  };

  const Inputs = {
    title: "Inputs We Work With:",
    img: "/images/about/about3.jpg",
    list: [
      "Conceptual Sketches and Markups",
      "Architectural and Structural Drawings",
      "Redline Corrections",
      "Design Briefs and BIM Execution Plans",
      "Email Instructions or Cloud-Based Collaboration Platforms",
    ],
  };

  const addedValue = {
    title: "How we add value",
    content1:
      "Our BIM services go beyond modelling, we provide construction solutions that drive efficiency, reduce costs, manage risks, improve constructability and create long-term value. ",

    img: "/images/about/event/about3.jpg",
  };
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
          <ServiceBanner banner={banner} />
          <Innovativesolutions innovativesolutions={innovativesolutions} />

          {/* <ServiceExtpertise serviceContent={serviceContent} /> */}

          <ExpertiseTable
            serviceContent={serviceContent}
            BIMCapabilities={BIMCapabilities}
            Inputs={Inputs}
            content="By integrating BIM into the structural design process, SB Engineers reduces design errors, enhances constructability, and enables better project coordination, which helps save time and cost. Our BIM solutions are tailored to meet your unique project requirements and covers new construction as well as redesigning of existing structures.  "
          />

          <AddedValue addedValue={addedValue} />
        </div>
        <div className="footertop">
          <Footer25 />
        </div>
      </div>
    </>
  );
}
