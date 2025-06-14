import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";

import ServiceBanner from "@/components/service/servicebanner.jsx";
import Service from "@/components/service/ServiceLists.jsx";
import React from "react";

export const metadata = {
  title: "Service",
  description: ""
};

export default function Page() {
  const service1 = [
    {
      id: 83,
      name: '01',
      image: '/images/about-us/architectural-design.png',
      title: 'Architectural Design',
    //   description:
    //     'We believe that great partnerships are built on trust. That’s why, from client interactions to project execution, we ensure honesty, transparency and ethical practices in everything we do.',
      delay: '0.2s',
      link: 'architectural-design',
    },
    {
      id: 84,
      name: '02',
      image: '/images/about-us/structural-engineering.png',
      title: 'Structural Engineering',
    //   description:
    //     'With a commitment to excellence, we adopt stringent quality control to ensure our deliverables are both effective and enduring.',
      delay: '0.4s',
      link: 'structural-engineering',
    },
    {
      id: 85,
      name: '03',
      image: '/images/about-us/mep-engineering-services.png',
      title: 'MEP Engineering',
    //   description:
    //     'We work closely with our clients at each phase, listening, adapting and designing solutions that reflect their vision and needs.',
      delay: '0.6s',
      link: 'mep-engineering',
    },
    
    {
      id: 86,
      name: '04',
      image: '/images/about-us/steel-structur.png',
      title: 'Steel & Rebar Detailing (Tekla)',
    //   description:
    //     "The engineering domain is constantly evolving, that’s why we use the latest tools and technologies to deliver modern, efficient and future-ready designs that push the boundaries of what's possible.",
      delay: '0.8s',
      link: 'steel-&-rebar-detailing',
    },
    {
      id: 86,
      name: '05',
      image: '/images/about-us/project-management.png',
      title: 'Project Management',
    //   description:
    //     "The engineering domain is constantly evolving, that’s why we use the latest tools and technologies to deliver modern, efficient and future-ready designs that push the boundaries of what's possible.",
      delay: '0.8s',
      link: 'steel-&-rebar-detailing',
    },
    {
      id: 87,
      name: '06',
      image: '/images/about-us/quantity-surveying.png',
      title: 'Quantity Surveying',
    //   description:
    //     "The engineering domain is constantly evolving, that’s why we use the latest tools and technologies to deliver modern, efficient and future-ready designs that push the boundaries of what's possible.",
      delay: '0.8s',
      link: 'quantity-surveying',
    },
    
    {
      id: 88,
      name: '07',
      image: '/images/about-us/bim.png',
      title: 'Building Information Modeling',
    //   description:
    //     "The engineering domain is constantly evolving, that’s why we use the latest tools and technologies to deliver modern, efficient and future-ready designs that push the boundaries of what's possible.",
      delay: '0.8s',
      link: 'building-information-modeling',
    },
  ];

  return (
    <div className="page-wraper">
      <Header19 />
      <div className="page-content bg-white">
        <ServiceBanner />
        <Service serviceContent={service1} />
      </div>
      <div className="footertop">
        <Footer25 />
      </div>
    </div>
  );
}
