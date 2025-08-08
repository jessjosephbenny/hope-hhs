"use client";

import dynamic from "next/dynamic";

const ServiceAreaMap = dynamic(() => import("./ServiceAreaMap"), {
  ssr: false,
  loading: () => <div>Loading Map</div>,
});

export default ServiceAreaMap;
