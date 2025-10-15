"use client";
import { galleryItems3 } from "@/data/gallery";

import Image from "next/image";
import React from "react";

import GallaryWrapper from "../common/GallaryWrapper";

export default function GalleryComponent() {
  return (
    <ul className="lightgallery">
      <LightGallery
        exThumbImage="data-exthumbimage"
        selector={"[data-src]"}
        speed={500}
        plugins={[lgThumbnail, lgZoom, Hash]}
      >
        {children}
      </LightGallery>
    </ul>
  );
}
