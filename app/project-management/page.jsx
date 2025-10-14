import Innovativesolutions from "@/components/SBService/Innovativesolutions";
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";
import React from "react";
import ServiceBanner from "@/components/SBService/ServiceBanner";
import MblBanner from "@/components/Sb-about/MblBanner";
import ServiceExtpertise from "@/components/SBService/ServiceExtpertise";
import AddedValue from "@/components/SBService/AddedValue";
import ServiceIntro from "@/components/SBService/ServiceIntro";

export const metadata = {
  title: "Project Management",
  description: ""
};
export default function page() {

    const banner ={
        title:"Project Management",
        link:"project-management",
        img:"/images/about/event/proj-manag-banner.jpg",
    }

    const innovativesolutions ={
        title:"",
         content1:"SB Engineers offers end-to-end Project Management & Construction Services designed to ensure your projects are delivered on time, within budget, and to the highest standards of quality.",
         //content2:"Our team has extensive experience across diverse sectors, in coordinating resources and managing risks. They work in synergy and maintain transparent communication between stakeholders to keep your project on track. Whether it’s a large-scale industrial development or a complex commercial facility, we take ownership of the process so you can stay focused on the bigger picture.",
         //img:"/images/about/event/project-management.jpg"
    }


      const serviceContent = {
        title: "What We Do",
         img:"/images/about/event/our-project.jpg",
        list: [
          "<b>Pre-construction Planning & Feasibility</b><p>Assess project viability, develop feasibility studies, carry out preliminary cost estimates, and help define project scope. Establish budgets, timelines, and key deliverables before construction begins.</p>",
          "<b>Design Coordination & Value Engineering</b><p>Manage the design process — architectural, structural, MEP, and others — ensuring consistency, constructability, and compliance with local/international standards. Identify cost-effective alternatives and optimize materials and methods without sacrificing quality.</p>",
          "<b>Tendering, Contracts & Procurement Management</b><p>Prepare tender documents, evaluate bids, appoint contractors & subcontractors. Negotiate contracts, manage procurement of materials, equipment and services, ensuring transparency and best value.</p>",
          "<b>Schedule, Cost & Risk Control</b><p>Maintain detailed project schedules and cash-flow forecasts. Monitor costs, manage variations/change orders, track risk throughout the lifecycle. Address delays, resource issues or unexpected challenges proactively.</p>",
          "<b>Site Supervision & Quality Assurance</b><p>Oversee on-site progress, ensuring work matches approved drawings and specifications. Implement quality control checks and assurance mechanisms. Ensure safety protocols and regulatory requirements are strictly followed.</p>",
          "<b>Stakeholder Communication & Reporting</b><p>Serve as central point of coordination among all parties—clients, consultants, contractors, suppliers. Provide regular progress reports, updates, and facilitate meetings to keep everyone aligned.</p>",
          "<b>Commissioning, Handover & Close-Out</b><p>Ensure systems are tested, compliance verified, punch-list items resolved. Provide as-built documentation, operation & maintenance manuals. Formal handover of the completed project to owner with clarity and accountability.</p>",
        ],
      };

      const addedValue={
        title:"Why SB Engineers?",
         content1:"<ul class='services-list-item'><li><b>Holistic Management</b><p>We cover every phase of the project, from inception through to final handover.</p></li><li><b>Risk-Smart Approach</b><p>We identify risks early, manage changes efficiently, and aim for minimal disruption.</p></li><li><b>Cost & Time Optimisation</b><p>Through value engineering, strong procurement practices and schedule vigilance, we aim to save you both time and money.</p></li><li><b>Quality & Standards Compliance</b><p>All work adheres to relevant codes, norms, and best practices.</p></li><li><b>Transparent Collaboration</b><p>You stay informed and involved; your goals guide our decisions.</p></li></ul>",
        
         img:"/images/about/event/how-we-project.jpg"
      }
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
         
        <ServiceBanner banner={banner}/>
        <MblBanner title="Project Management"/>
        <ServiceIntro innovativesolutions={innovativesolutions}/>

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
