import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export default function ExpertiseTableThree({
  serviceContent1,
  serviceContent2,
  serviceContent3,
  serviceContent4,
}) {
  return (
    <div className="pricingBox-container">
      <div
        className="pricingBox-row pricingBox-row-1"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        {[serviceContent1, serviceContent2, serviceContent3, serviceContent4]
          .filter(Boolean)
          .map((service, index) => (
            <div
              key={index}
              className={`pricingBox-card ${
                index % 2 === 1 ? "pricingBox-professional" : "pricingBox-basic"
              }`}
              style={{
                flex: "1 1 calc(25% - 20px)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <h2
                  className={`main-sub-ti text-center ${
                    index % 2 === 1 ? "text-white" : ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: service?.title }}
                ></h2>
                <ul>
                  {service?.list?.map((li, i) => (
                    <p className="expertise-p d-flex" key={i}>
                      <span
                        className="icon-div-pri"
                        style={{
                          padding: "0 6px",
                          backgroundColor: index % 2 === 1 ? "#fff" : "#000",
                          height: "27px",
                        }}
                      >
                        <Check
                          className="icon-sm-new"
                          style={{
                            color: index % 2 === 1 ? "#000" : "#fff",
                            width: "12px",
                            height: "15px",
                            fontWeight: "700",
                          }}
                        />
                      </span>{" "}
                      <span
                        style={{
                          color: index % 2 === 1 ? "#fff" : "#000",
                          fontWeight: "400",
                        }}
                      >
                        {li}
                      </span>{" "}
                    </p>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
