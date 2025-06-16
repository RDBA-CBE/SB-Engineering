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
      </div>
    </div>
  );
}
