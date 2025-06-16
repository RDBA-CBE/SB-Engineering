"use client";
import Image from "next/image";
import { clientLogos } from "@/data/clients";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProjectClients({
  parentClass = "client-logo-carousel owl-loaded owl-theme owl-carousel owl-dots-none owl-btn-center-lr owl-btn-3",
  border = false,
}) {

     const clientsLogo = [
        "/images/home/Clients/logos-01.jpg",
        "/images/home/Clients/logos-02.jpg",
        "/images/home/Clients/logos-03.jpg",
        "/images/home/Clients/logos-04.jpg",
        "/images/home/Clients/logos-05.jpg",
        "/images/home/Clients/logos-06.jpg",
        "/images/home/Clients/logos-07.jpg",
        "/images/home/Clients/logos-08.jpg",
        "/images/home/Clients/logos-09.jpg",
        "/images/home/Clients/logos-10.jpg",
        "/images/home/Clients/logos-11.jpg",
        "/images/home/Clients/logos-12.jpg",
        "/images/home/Clients/logos-13.jpg",
        "/images/home/Clients/logos-14.jpg",
        "/images/home/Clients/logos-15.jpg",
        "/images/home/Clients/logos-16.jpg",
        "/images/home/Clients/logos-17.jpg",
        "/images/home/Clients/logos-18.jpg",
        "/images/home/Clients/logos-19.jpg",
        "/images/home/Clients/logos-20.jpg",
        "/images/home/Clients/logos-21.jpg",
        "/images/home/Clients/logos-22.jpg",
        "/images/home/Clients/logos-23.jpg",
]
  return (

   
    <>
      {/* <div className="sort-title clearfix text-center m-b20">
        <h4>Our Clients</h4>
        <p style={{ marginBottom: "0px" }}>Dummy Text</p>
      </div> */}



                <div className="container mt-5">
                          <div className="text-center">
                    
                    <h2 className="main-ti"> Our Clients</h2>
                    <p>We’ve built enduring partnerships with an array of clients developers, architects,
government agencies, contractors and multinational corporations, who trust us for our
reliability, technical excellence and collaborative approach.</p>
                </div>
                    <Swiper
        // slidesPerView={5}
        // spaceBetween={10}
        slidesPerGroup={2}
        style={{ maxWidth: "100vw", overflow: "hidden", margin:"auto" }}
        loop
        autoplay={{
          delay: 100,
        }}
        speed={2500}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },

          480: {
            slidesPerView: 3,
          },

          767: {
            slidesPerView: 5,
          },
          1000: {
            slidesPerView: 6,
          },
        }}
        modules={[Autoplay]}
        className={parentClass}
        
      >
        {clientsLogo.map((logoSrc, index) => (
          <SwiperSlide className="item" key={index} style={{width:"auto"}}>
            <div className="ow-client-logo wow fadeInUp will-animate">
              <div className={`client-logo ${border ? "border" : ""}`}>
                <a href="#">
                  <Image width={80} height={200} src={logoSrc} alt="" style={{width:'150px' , height:'60px'}} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
                </div>

      
    </>
  );
}
