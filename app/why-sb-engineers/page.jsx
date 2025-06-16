
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";

import WhySbBanner from "@/components/Sb-about/WhySbBanner";
import MblBanner from "@/components/Sb-about/MblBanner";
import WhySBEngineers from "@/components/Sb-about/WhySBEngineers";
import React from "react";

export const metadata = {
  title: "Why SB Engineers",
  description: ""
};
export default function page() {

     const services5 = [
  {
    id: 83,
    name: "01",
    image: "/images/about-us/integrity.png",
    title: "Integrity",
    description:
      "We believe that great partnerships are built on trust. That’s why, from client interactions to project execution, we ensure honesty, transparency and ethical practices in everything we do.",
    delay: "0.2s",
    link: "web-design-service",
  },
  {
    id: 83,
    name: "02",
    icon: "/images/about-us/quality.png",
    title: "Quality",
    description:
      "With a commitment to excellence, we adopt stringent quality control to ensure our deliverables are both effective and enduring.",
    delay: "0.2s",
    link: "digital-marketing-service",
  },
  {
    id: 83,
    name: "03",
    icon: "/images/about-us/collaboration.png",
    title: "Collaboration",
    description:
      "We work closely with our clients at each phase, listening, adapting and designing solutions that reflect their vision and needs.",
    delay: "0.2s",
    link: "academy-service",
  },
   {
    id: 83,
    name: "04",
    icon: "/images/about-us/innovation.png",
    title: "Innovation",
    description:
      "The engineering domain is constantly evolving, that’s why we use the latest tools and technologies to deliver modern, efficient and future-ready designs that push the boundaries of what's possible.",
    delay: "0.2s",
    link: "academy-service",
  },
  
];
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
         
        <WhySbBanner/>

        <MblBanner title="Why SB Engineers"/>

        <WhySBEngineers/>



        </div>
        <div className="footertop">
          <Footer25 />
        </div>
        
      </div>
    </>
  );
}
