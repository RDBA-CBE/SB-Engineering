import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
export default function ExpertiseTableTwo({serviceContent1, serviceContent2,serviceContent3,serviceContent4,serviceContent5 }) {
  return (

   <div class="pricingBox-container">
  <div class="pricingBox-row pricingBox-row-1">
    <div class="pricingBox-card pricingBox-basic">
      <div className=" ">
            <h2
              className="main-sub-ti text-center"
              dangerouslySetInnerHTML={{ __html: serviceContent1?.title }}
            ></h2>
            <ul>
              {serviceContent1?.list?.map((li) => (
                <p className="expertise-p d-flex">
                  <span
                    className="icon-div-pri"
                    style={{ padding: "0 6px", backgroundColor: "#000",height:"27px" }}
                  >
                    <Check
                      className="icon-sm-new "
                      style={{
                        color: "#fff",
                        width: "12px",
                        height: "15px",
                        fontWeight: "700",
                      }}
                    />
                  </span>{" "}
                  <span style={{ color: "#000", fontWeight: "400" }}>
                    {li}
                  </span>{" "}
                </p>
              ))}
            </ul>
            {/* <Link
              href={`/project-portfolio`}
              className="btn__secondary_in  text-decoration-none "
              style={{ display: "inline-block" }}
            >
              <span className="icon-div-pri">
                <ArrowRight className="icon-sm-new " />
              </span>
              More About Us
            </Link> */}
          </div>
    </div>
    <div class="pricingBox-card pricingBox-professional">
       <div className=" ">
            <h2
              className="main-sub-ti text-center text-white"
              dangerouslySetInnerHTML={{ __html: serviceContent2?.title }}
            ></h2>
            <ul>
              {serviceContent2?.list?.map((li) => (
                <p className="expertise-p d-flex">
                  <span
                    className="icon-div-pri"
                    style={{ padding: "0 6px", backgroundColor: "#fff",height:"27px" }}
                  >
                    <Check
                      className="icon-sm-new "
                      style={{
                        color: "#000",
                        width: "12px",
                        height: "15px",
                        fontWeight: "700",
                      }}
                    />
                  </span>{" "}
                  <span style={{ color: "#fff", fontWeight: "400" }}>
                    {li}
                  </span>{" "}
                </p>
              ))}
            </ul>
            {/* <Link
              href={`/project-portfolio`}
              className="btn__secondary_in  text-decoration-none "
              style={{ display: "inline-block" }}
            >
              <span className="icon-div-pri">
                <ArrowRight className="icon-sm-new " />
              </span>
              More About Us
            </Link> */}
          </div>
    </div>
    <div class="pricingBox-card pricingBox-basic">
        <div className=" ">
            <h2
              className="main-sub-ti text-center"
              dangerouslySetInnerHTML={{ __html: serviceContent3?.title }}
            ></h2>
            <ul>
              {serviceContent3?.list?.map((li) => (
                <p className="expertise-p d-flex">
                  <span
                    className="icon-div-pri"
                    style={{ padding: "0 6px", backgroundColor: "#000", height:"27px" }}
                  >
                    <Check
                      className="icon-sm-new "
                      style={{
                        color: "#fff",
                        width: "12px",
                        height: "15px",
                        fontWeight: "700",
                      }}
                    />
                  </span>{" "}
                  <span style={{ color: "#000", fontWeight: "400" }}>
                    {li}
                  </span>{" "}
                </p>
              ))}
            </ul>
            {/* <Link
              href={`/project-portfolio`}
              className="btn__secondary_in  text-decoration-none "
              style={{ display: "inline-block" }}
            >
              <span className="icon-div-pri">
                <ArrowRight className="icon-sm-new " />
              </span>
              More About Us
            </Link> */}
          </div>
    </div>
  </div>

  <div class="pricingBox-row pricingBox-row-1">
    <div class="pricingBox-card pricingBox-professional">
       <div className=" ">
            <h2
              className="main-sub-ti text-center text-white"
              dangerouslySetInnerHTML={{ __html: serviceContent4?.title }}
            ></h2>
            <ul>
              {serviceContent4?.list?.map((li) => (
                <p className="expertise-p d-flex">
                  <span
                    className="icon-div-pri"
                    style={{ padding: "0 6px", backgroundColor: "#fff",height:"27px" }}
                  >
                    <Check
                      className="icon-sm-new "
                      style={{
                        color: "#000",
                        width: "12px",
                        height: "15px",
                        fontWeight: "700",
                      }}
                    />
                  </span>{" "}
                  <span style={{ color: "#fff", fontWeight: "400" }}>
                    {li}
                  </span>{" "}
                </p>
              ))}
            </ul>
            {/* <Link
              href={`/project-portfolio`}
              className="btn__secondary_in  text-decoration-none "
              style={{ display: "inline-block" }}
            >
              <span className="icon-div-pri">
                <ArrowRight className="icon-sm-new " />
              </span>
              More About Us
            </Link> */}
          </div>
    </div>
    <div class="pricingBox-card pricingBox-basic">
      <div className=" ">
            <h2
              className="main-sub-ti text-center"
              dangerouslySetInnerHTML={{ __html: serviceContent5?.title }}
            ></h2>
            <ul>
              {serviceContent5?.list?.map((li) => (
                <p className="expertise-p d-flex">
                  <span
                    className="icon-div-pri"
                    style={{ padding: "0 6px", backgroundColor: "#000",height:"27px" }}
                  >
                    <Check
                      className="icon-sm-new "
                      style={{
                        color: "#fff",
                        width: "12px",
                        height: "15px",
                        fontWeight: "700",
                      }}
                    />
                  </span>{" "}
                  <span style={{ color: "#000", fontWeight: "400" }}>
                    {li}
                  </span>{" "}
                </p>
              ))}
            </ul>
            {/* <Link
              href={`/project-portfolio`}
              className="btn__secondary_in  text-decoration-none "
              style={{ display: "inline-block" }}
            >
              <span className="icon-div-pri">
                <ArrowRight className="icon-sm-new " />
              </span>
              More About Us
            </Link> */}
          </div>
    </div>
  </div>

  
</div>

      );
}