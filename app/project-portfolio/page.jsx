
import Footer25 from "@/components/footers/Footer25";
import Header19 from "@/components/headers/Header19";

import ProjectBanner from "@/components/projects/Projectbanner";
import MblBanner from "@/components/Sb-about/MblBanner";
import ProjectClients from "@/components/projects/ProjectClients";
import ProjectsItems from "@/components/projects/ProjectsItems";
import React from "react";

export const metadata = {
  title: "Project Portfolio"
};
export default function page() {
  return (
    <>
      <div className="page-wraper  ">
        <Header19 />
        <div className="page-content bg-white">
         

          <ProjectBanner/>
          <MblBanner title="Project Portfolio"/>
          <ProjectsItems/>
          <ProjectClients/>
          

         

          <div className="dlab-divider bg-gray-dark tb10 mt-5" />

        </div>
        <div className="footertop">
          <Footer25 />
        </div>
        
      </div>
    </>
  );
}
