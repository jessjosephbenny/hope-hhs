"use client";
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ServiceAreaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  // County coordinates for the Chicago area
  const counties = [
    { name: "COOK", coords: [41.8781, -87.6298] as [number, number] },
    { name: "DUPAGE", coords: [41.8369, -88.0901] as [number, number] },
    { name: "KANE", coords: [41.7606, -88.32] as [number, number] },
    { name: "WILL", coords: [41.5067, -87.865] as [number, number] },
    { name: "LAKE", coords: [42.2711, -87.8406] as [number, number] },
    { name: "KENDALL", coords: [41.542, -88.4326] as [number, number] },
    { name: "McHENRY", coords: [42.3331, -88.4265] as [number, number] },
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    map.current = L.map(mapContainer.current).setView([41.8369, -88.0901], 9);

    // Add OpenStreetMap tiles (completely free)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map.current);

    // Custom icon
    const customIcon = L.divIcon({
      html: `
        <div style="
          width: 32px; 
          height: 32px; 
          background: linear-gradient(135deg, #16a34a, #4f46e5);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        ">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
      `,
      className: "",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    // Add markers for each county
    counties.forEach((county) => {
      L.marker(county.coords, { icon: customIcon })
        .addTo(map.current!)
        .bindPopup(
          `
          <div style="text-align: center; padding: 8px;">
            <h3 style="margin: 0 0 4px 0; font-weight: 600; color: #111827;">${county.name} County</h3>
            <p style="margin: 0; font-size: 14px; color: #6b7280;">We serve this area</p>
          </div>
        `
        )
        .on("mouseover", function (e) {
          this.openPopup();
        });
    });

    // Cleanup function
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md z-[1000]">
        <h3 className="font-semibold text-gray-900 mb-1">Service Areas</h3>
        <p className="text-sm text-gray-600">Hover over markers for details</p>
      </div>
    </div>
  );
};

export default ServiceAreaMap;
