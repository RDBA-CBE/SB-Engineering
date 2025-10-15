"use client";
import { projects } from "@/data/projects";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import GallaryWrapper from "../common/GallaryWrapper";
import { galleryItems3 } from "@/data/gallery";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { AlignCenter } from "lucide-react";
export default function ProjectsItems() {
  return (
    <div
      className="section-full content-inner-2  wow fadeInUp project-port"
      data-wow-duration="2s"
      data-wow-delay="0.4s"
    >
      <div className="container">
        <div className="text-center">
          <h4>
            We have successfully delivered projects across diverse sectors, they
            reflect our commitment to quality, efficiency and futuristic
            engineering. We take pride in our ability to bring visionary ideas
            to life, delivering value-driven solutions that exceed client
            expectations and set new benchmarks in the built environment.
          </h4>
          <br></br>
        </div>
      </div>

      <div className="container-full">
 <LightGallery
  speed={500}
  plugins={[lgThumbnail, lgZoom]}
  elementClassNames="dlab-gallery-listing row sp15 gallery"
>
  {galleryItems3.map((item, index) => (
    <a
      key={index}
      href={item.src} // lightbox image
      data-sub-html={`<h4>${item.title}</h4><p>${item.description || ''}</p>`}
      className="col-lg-4 col-md-4 col-sm-4 col-6 wow bounceInUp"
      data-wow-duration="2s"
      data-wow-delay={item.delay}
    >
      <div className="dlab-box m-b15">
        <div className="dlab-img-overlay4 dlab-img-effect zoom">
          <Image
            alt={item.title}
            src={item.src}
            width={300}
            height={269}
            className="rounded-md"
          />
          <div className="overlay-bx">
            <div className="overlay-icon">
              <i className="fas fa-search icon-bx-xs" />
            </div>
          </div>
        </div>
      </div>
       <h4 className="mt-2 center txtcenter ghtag-btm">
        {item.title}
      </h4>
    </a>
  ))}
</LightGallery>


        <div className="widget widget_gallery gallery-grid-4" style={{display:'none'}}>
          <ul className="lightgallery">
            <GallaryWrapper>
              {galleryItems3.slice(0, 100).map((item, i) => (
                <li
                  key={i}
                  data-exthumbimage={item.src}
                  data-src={item.src}
                  data-sub-html={`
              <div class="lg-caption">
                <h3 class="text-white text-lg font-semibold" style="margin-bottom:0px;">${
                  item.title
                }</h3>
                <h5 class="text-white text-sm">${item.description || ""}</h6>
              </div>
            `}
                  className="img-effect2 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 text-center"
                >
                  <span className="check-km block">
                    <Image
                      alt={item.title}
                      src={item.src}
                      width={300}
                      height={350}
                      className="object-cover rounded-md w-full h-auto"
                    />
                  </span>
                  <h5 className="mt-3 text-base font-semibold text-gray-800">
                    {item.title}
                  </h5>
                </li>
              ))}
            </GallaryWrapper>
          </ul>
        </div>
      </div>
    </div>
  );
}
