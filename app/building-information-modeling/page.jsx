import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import MblBanner from "@/components/Sb-about/MblBanner";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";
import ExpertiseTable from "@/components/SBService/ExpertiseTable";

export const metadata = {
  title: "Building Information Modeling",
  description: "",
};
export default function page() {
  const banner = {
    title: "Building Information Modeling",
    link: "building-information-modeling",
    img:"/images/about/event/building-banner-image.jpg",
  };

  const innovativesolutions = {
    title: "BIM Services",
    content1:
      "At SB Engineers, we harness the power of Building Information Modeling (BIM) to deliver smarter, more efficient, and highly coordinated building & infrastructure solutions. Our BIM services integrate multi-disciplinary design data into a unified digital model—allowing better planning, visualization, and collaboration across every phase of your project.SB Engineers is at the forefront of delivering competent Structural BIM Services.",
    content2:
      "We integrate  engineering precision and cutting-edge technology to enhance structural design, coordination and construction efficiency. With deep domain expertise and a client-centric approach, we enable smarter decision-making through every phase of the structural lifecycle, from conceptual design and analysis to detailing and documentation.",
    img: "/images/about/event/building-info.jpg",
  };

  const serviceContent = {
    title: "What We Do",
    img: "/images/about/about3.jpg",
    list: [
      "<b>Architectural BIM Modeling</b><p>We create accurate, parametric 3D architectural models, incorporating design intent, materials, and spatial relationships. These models help architects, clients, and stakeholders visualize the project before construction begins.</p>",
      "<b>Structural BIM Modeling</b><p>Our structural engineers produce detailed BIM models for beams, columns, slabs, and reinforcement layouts—supporting reliable structural analysis, clash detection, and coordinated detailing.</p>",
      "<b>MEP (Mechanical, Electrical & Plumbing) BIM </b><p> We model mechanical systems (HVAC, ductwork, piping), electrical networks (lighting, power, wiring), and plumbing/waste systems in the same BIM environment, ensuring seamless integration with architecture and structure.</p>",
      "<b>Clash Coordination & Detection</b><p> Using industry tools, we run clash detection to identify conflicts between disciplines (e.g. an HVAC duct crossing a beam). Our coordinated models allow for early issue resolution and fewer conflicts on-site.</p>",
      "<b>4D Scheduling & 5D Cost Estimation</b><p> 4D (Time): We link the BIM model with construction schedules to simulate the sequence of activities over time.<br/>5D (Cost): We integrate cost data to generate material takeoffs and cost estimates tied to project phases.</p>",
      "<b>Scan-to-BIM / As-Built Modeling</b><p>For existing structures or renovation projects, we convert point-cloud / laser scan data into accurate BIM models. We also keep models updated when changes occur in the field, ensuring the as-built BIM reflects the actual built condition.</p>",
      "<b>CAD to BIM Conversion</b><p>We convert 2D CAD drawings, PDFs, or older formats into intelligent BIM models—reducing redundancy, enabling better data management, and facilitating future upgrades.</p>",
      "<b>BIM Consulting & Implementation</b><p>We help clients define BIM standards, execution plans, workflows, and coordinate across all project stakeholders to adopt BIM effectively.</p>",
      "<b>Facility Management Support</b><p>Post-construction, we deliver BIM models enriched with metadata (equipment specs, warranties, maintenance schedules) so that facility managers can use the model for operations, maintenance, and future retrofits.</p>",
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
    title: "Why Choose SB Engineers for BIM?",
    content1:
      "<ul class='services-list-item'><li><b>End-to-End Integration</b><p>From architecture through structure, MEP, scheduling, and cost — we provide a full BIM continuum under one skilled team.</p></li><li><b>Improved Efficiency & Risk Mitigation</b><p>Early clash detection, coordinated design reviews, and virtual mock-ups reduce costly rework and site conflicts.</p></li><li><b>Greater Transparency & Control</b><p>Clients can visually track progress, review design alternatives, and make data-driven decisions based on the BIM model.</p></li><li><b>Scalability & Adaptability</b><p>Whether it’s a small renovation or a large-scale industrial complex, we tailor the level of detail (LOD) and scope to match project needs.</p></li><li><b>Data-driven Operations</b><p>Our BIM models are not just 3D visuals — they carry intelligent data (metadata, schedules, cost, specs) to support operations and lifecycle management.</p></li></ul>",

    img: "/images/about/event/how-we-build.jpg",
  };
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
          <ServiceBanner banner={banner} />
          <MblBanner title="Building Information Modeling"/>
          <Innovativesolutions innovativesolutions={innovativesolutions} />

          <ServiceExtpertise serviceContent={serviceContent} />

          {/* <ExpertiseTable
            serviceContent={serviceContent}
            BIMCapabilities={BIMCapabilities}
            Inputs={Inputs}
            content="By integrating BIM into the structural design process, SB Engineers reduces design errors, enhances constructability, and enables better project coordination, which helps save time and cost. Our BIM solutions are tailored to meet your unique project requirements and covers new construction as well as redesigning of existing structures.  "
          /> */}

          <AddedValue addedValue={addedValue} />
        </div>
        <div className="footertop">
          <Footer25 />
        </div>
      </div>
    </>
  );
}
