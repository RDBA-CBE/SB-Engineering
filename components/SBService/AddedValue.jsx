// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// export default function AddedValue({addedValue}) {
//   return (
//     <div className="section-full content-inner bg-white">
//       <div className="container">
//         <div className="row align-items-center">
//           <div
//             className="col-lg-6 col-md-12 m-b30 wow fadeInLeft"
//             data-wow-duration="2s"
//             data-wow-delay="0.3s"
//           >
//             <div className="our-story">
//               <h2 className="main-ti" dangerouslySetInnerHTML={{__html:addedValue?.title}}>
               
//               </h2>

//               <p dangerouslySetInnerHTML={{__html:addedValue?.content1}}></p>

//              {addedValue?.content2 && <p dangerouslySetInnerHTML={{__html:addedValue?.content2}}></p>}

//               {/* <Link
//                 href={`/portfolio-grid-2`}
//                 className="btn__secondary_in  text-decoration-none "
//                 // style={{zIndex:"1000"}}
//               >
//                 <span className="icon-div-pri">
//                   <ArrowRight className="icon-sm-new " />
//                 </span>
//                 More About Us
//               </Link> */}
//             </div>
//           </div>
//           <div
//             className="col-lg-6 col-md-12 m-b30 our-story-thum wow fadeInRight"
//             data-wow-duration="2s"
//             data-wow-delay="0.3s"
//           >
//             <Image
//               className="radius-sm"
//               alt=""
//               src={addedValue?.img}
//               width="600"
//               height="722"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AddedValue({ addedValue }) {
  return (
    <div className="section-full content-inner bg-white py-5">
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Image: Order 1 on mobile, Order 2 on desktop */}
          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <div className="w-100">
              <Image
                className="img-fluid rounded"
                alt="Added Value"
                src={addedValue?.img}
                width={600}
                height={722}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* Text: Order 2 on mobile, Order 1 on desktop */}
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div className="our-story">
              <h2
                className="main-ti mb-3"
                dangerouslySetInnerHTML={{ __html: addedValue?.title }}
              />
              <p dangerouslySetInnerHTML={{ __html: addedValue?.content1 }} />
              {addedValue?.content2 && (
                <p dangerouslySetInnerHTML={{ __html: addedValue?.content2 }} />
              )}

              {/* Optional Button */}
              {/* 
              <Link
                href="/portfolio-grid-2"
                className="btn btn-primary d-inline-flex align-items-center gap-2 mt-3"
              >
                <ArrowRight size={18} />
                More About Us
              </Link>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
