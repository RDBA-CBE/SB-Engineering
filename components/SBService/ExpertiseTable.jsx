import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
export default function ExpertiseTable({serviceContent, BIMCapabilities,Inputs,content }) {
  return (

   <div class="pricingBox-container">
  <div class="pricingBox-row pricingBox-row-1">
    <div class="pricingBox-card pricingBox-basic">
      <div className=" ">
            <h2
              className="main-sub-ti text-center"
              dangerouslySetInnerHTML={{ __html: serviceContent?.title }}
            ></h2>
            <ul>
              {serviceContent?.list?.map((li) => (
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
              dangerouslySetInnerHTML={{ __html: serviceContent?.title }}
            ></h2>
            <ul>
              {BIMCapabilities?.list?.map((li) => (
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
    <div class="pricingBox-card pricingBox-extended">
        <div className=" ">
            <h2
              className="main-sub-ti text-center"
              dangerouslySetInnerHTML={{ __html: serviceContent?.title }}
            ></h2>
            <ul>
              {Inputs?.list?.map((li) => (
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

  {/* <div class="pricingBox-row pricingBox-row-2">
    <div class="pricingBox-card pricingBox-business">
      <h3>Business</h3>
      <p class="pricingBox-price">$49 / Per Installation</p>
      <p class="pricingBox-desc">Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
      <button class="pricingBox-btn">Sign Up</button>
    </div>
    <div class="pricingBox-card pricingBox-enterprise">
      <h3>Enterprise</h3>
      <p class="pricingBox-price">$99 / Per Installation</p>
      <p class="pricingBox-desc">Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
      <button class="pricingBox-btn">Sign Up</button>
    </div>
  </div> */}

  <div className="row">
    <p>
      {content}
    </p>
  </div>
</div>

      );
}