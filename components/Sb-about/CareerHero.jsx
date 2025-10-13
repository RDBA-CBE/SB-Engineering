// import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareerHero() {
  return (
    <div className="section-full content-inner const-about home-about SB-careers py-5">
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* TEXT SECTION */}
          <div className="col-12 col-md-6">
            <div className="content-bx1">
              <div className="section-head style2">
                <h2 className="title main-ti">Build your future with us</h2>
                <p>
                  At SB Engineers, we don’t just build structures, we build careers. We're always looking for passionate engineers, designers and thinkers who are ready to take on exciting challenges.
                </p>
                <p>
                  We offer an inclusive work environment, ongoing professional development and the opportunity to be part of projects that shape skylines and communities.
                </p>
                <p>
                  If you're driven, curious and ready to grow, we would love to meet you.
                </p>

               
                {/* Optional CTA Button */}
                {/* 
                <Link
                  href="/portfolio-grid-2"
                  className="btn btn-primary d-inline-flex align-items-center gap-2 mt-3"
                >
                  <ArrowRight size={18} />
                  More about Us
                </Link> 
                */}
              </div>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="col-12 col-md-6">
            <div className="rounded overflow-hidden w-100">
              <Image
                alt="Build Your Future"
                src="/images/Careers/build-your-future.jpg"
                width={600}
                height={600}
                className="img-fluid w-100 rounded"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          
        </div>
<div className="row align-items-center gy-4">
  <div className="section-head style2">
    <h2 className="title main-ti">SB Engineers Openings</h2>
  </div>

<div className="row">
  {/* Job 1 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
        <li><b>Position:</b> Sr.Structural Engineer - RCC</li>
        <li><b>Number of Openings:</b> 1</li>
        <li><b>Required Experience (Years):</b> 6 – 10 yrs</li>
        <li><b>Required Key Software Skills:</b> STAAD Pro, ETABS, SAFE, RCDC, AutoCAD</li>
        <li><b>Position Role:</b> Structural design, analysis, coordination with architects & MEP</li>
        <li><b>Job Location:</b> Coimbatore</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 1 End */}
</div>
  {/* row end*/}
  
  <div className="row">
  {/* Job 2 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
        <li><b>Position:</b> Sr.Structural Engineer - Steel</li>
          <li><b>Number of Openings:</b> 1</li>
          <li><b>Required Experience (Years):</b> 6 – 10 yrs</li>
          <li><b>Required Key Software Skills:</b> STAAD Pro, Idea Statica</li>
          <li><b>Position Role:</b> Structural design, analysis, coordination with architects & MEP</li>
          <li><b>Job Location:</b> Coimbatore</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 2 End */}
</div>
  {/* row end*/}

  <div className="row">
  {/* Job 3 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
        <li><b>Position:</b> Structural Engineer - Steel</li>
          <li><b>Number of Openings:</b> 1</li>
          <li><b>Required Experience (Years):</b> 2 – 5 yrs</li>
          <li><b>Required Key Software Skills:</b> STAAD Pro, Idea Statica</li>
          <li><b>Position Role:</b>Structural design, analysis, coordination with architects & MEP</li>
          <li><b>Job Location:</b> -</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 3 End */}
</div>
  {/* row end*/}

  <div className="row">
  {/* Job 4 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
        <li><b>Position:</b> Senior Architect</li>
          <li><b>Number of Openings:</b> 1</li>
          <li><b>Required Experience (Years):</b>6 – 10 yrs</li>
          <li><b>Required Key Software Skills:</b> AutoCAD, Revit, SketchUp, Photoshop, MS Office</li>
          <li><b>Position Role:</b> Concept design, architectural drawings, client coordination</li>
          <li><b>Job Location:</b> Coimbatore</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 4 End */}
</div>
  {/* row end*/}


  <div className="row">
  {/* Job 5 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
        <li><b>Position:</b> Architect (Design + Detailing)</li>
          <li><b>Number of Openings:</b> 2</li>
          <li><b>Required Experience (Years):</b>4 – 6 yrs</li>
          <li><b>Required Key Software Skills:</b> AutoCAD, Revit, SketchUp, Photoshop, MS Office</li>
          <li><b>Position Role:</b> Concept design, architectural drawings, client coordination</li>
          <li><b>Job Location:</b> Coimbatore</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 5 End */}
</div>
  {/* row end*/}

  <div className="row">
  {/* Job 5 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
          <li><b>Position:</b> Mechanical Design Engineer (HVAC & Plumbing)</li>
          <li><b>Number of Openings:</b> 1</li>
          <li><b>Required Experience (Years):</b>4 – 8 yrs</li>
          <li><b>Required Key Software Skills:</b> AutoCAD MEP, Revit MEP, HAP/Dialux, Navis work</li>
          <li><b>Position Role:</b> HVAC, Plumbing, Fire Fightingdesign & coordination</li>
          <li><b>Job Location:</b> Coimbatore</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 5 End */}
</div>
  {/* row end*/}

  <div className="row">
  {/* Job 5 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
           <li><b>Position:</b> Electrical Design Engineer</li>
          <li><b>Number of Openings:</b> 1</li>
          <li><b>Required Experience (Years):</b>4 – 8 yrs</li>
          <li><b>Required Key Software Skills:</b> AutoCAD MEP, Revit MEP, HAP/Dialux, Navis work</li>
          <li><b>Position Role:</b> Electrical, CCTV, Fire Alarm, design & coordination</li>
          <li><b>Job Location:</b> Coimbatore</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 5 End */}
</div>
  {/* row end*/}


  <div className="row">
  {/* Job 5 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
         <li><b>Position:</b> Project Coordinator</li>
          <li><b>Number of Openings:</b> 1</li>
          <li><b>Required Experience (Years):</b> 5 – 10 yrs</li>
          <li><b>Required Key Software Skills:</b> MS Project/Primavera (basic), MS Excel, AutoCAD (basic)</li>
          <li><b>Position Role:</b> Coordination between architects, structural & MEP teams</li>
          <li><b>Job Location:</b> Coimbatore</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 5 End */}
</div>
  {/* row end*/}


  <div className="row">
  {/* Job 5 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
        <li><b>Position:</b> Architectural Draughtsman</li>
          <li><b>Number of Openings:</b> 2</li>
          <li><b>Required Experience (Years):</b> 2 – 6 yrs</li>
          <li><b>Required Key Software Skills:</b> AutoCAD, Revit (basic), SketchUp</li>
          <li><b>Position Role:</b> Drafting architectural drawings, detailing</li>
          <li><b>Job Location:</b> Coimbatore</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 5 End */}
</div>
  {/* row end*/}

   <div className="row">
  {/* Job 5 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
        <li><b>Position:</b> Structural Draughtsman</li>
          <li><b>Number of Openings:</b> 2</li>
          <li><b>Required Experience (Years):</b> 2 – 6 yrs</li>
          <li><b>Required Key Software Skills:</b> AutoCAD,  Structures</li>
          <li><b>Position Role:</b> Reinforcement detailing, structural drawings</li>
          <li><b>Job Location:</b> Coimbatore</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 5 End */}
</div>
  {/* row end*/}

  <div className="row">
  {/* Job 5 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
             <li><b>Position:</b> Structural Steel Detailer</li>
          <li><b>Number of Openings:</b> 2</li>
          <li><b>Required Experience (Years):</b> 2 – 6 yrs</li>
          <li><b>Required Key Software Skills:</b> AutoCAD, Revit Structures</li>
          <li><b>Position Role:</b> Steel 2D detailing, structural drawings</li>
          <li><b>Job Location:</b> Coimbatore</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 5 End */}
</div>
  {/* row end*/}


    <div className="row">
  {/* Job 5 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
        <li><b>Position:</b> Mechanical Draughtsman</li>
          <li><b>Number of Openings:</b> 2</li>
          <li><b>Required Experience (Years):</b> 2 – 6 yrs</li>
          <li><b>Required Key Software Skills:</b> AutoCAD MEP, Revit MEP</li>
          <li><b>Position Role:</b> Drafting MEP layouts, coordination drawings</li>
          <li><b>Job Location:</b> Coimbatore</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 5 End */}
</div>
  {/* row end*/}

      <div className="row">
  {/* Job 5 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
        <li><b>Position:</b> Electrical Draughtsman</li>
          <li><b>Number of Openings:</b> 2</li>
          <li><b>Required Experience (Years):</b> 2 – 6 yrs</li>
          <li><b>Required Key Software Skills:</b> AutoCAD MEP, Revit MEP</li>
          <li><b>Position Role:</b> Drafting MEP layouts, coordination drawings</li>
          <li><b>Job Location:</b> Coimbatore</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 5 End */}
</div>
  {/* row end*/}


        <div className="row">
  {/* Job 5 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
        <li><b>Position:</b> HR Manager (Female)</li>
          <li><b>Number of Openings:</b> 1</li>
          <li><b>Required Experience (Years):</b> 2 – 5 yrs</li>
          <li><b>Required Key Software Skills:</b> MS Office, HRMS tools</li>
          <li><b>Position Role:</b> Payroll, HR Compliance, Office Admin,Operations and Co-Ordination</li>
          <li><b>Job Location:</b> Coimbatore</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 5 End */}
</div>
  {/* row end*/}


          <div className="row">
  {/* Job 5 */}
  <div className="job-openings p-3 d-flex justify-content-between align-items-center flex-wrap">
    <div className="job-details">
      <ul className="mb-0">
        <li><b>Position:</b> TEKLA MODELER (For Site)</li>
          <li><b>Number of Openings:</b> 1</li>
          <li><b>Required Experience (Years):</b> 8-10 yrs</li>
          <li><b>Required Key Software Skills:</b> TEKLA</li>
          <li><b>Position Role:</b> urgent requirement ( Required in  10 days time)</li>
          <li><b>Job Location:</b> Nagpur</li>
      </ul>
    </div>

    <div className="apply-btn mt-3 mt-md-0">
      <a
        href="/careers#applyform"
        className="apply-link btn btn-warning fw-semibold text-dark"
      >
        Apply Now
      </a>
    </div>
  </div>
  {/* Job 5 End */}
</div>
  {/* row end*/}

</div>


      </div>
    </div>
  );
}
