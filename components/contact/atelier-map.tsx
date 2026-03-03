"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const ATELIER_COORDS: [number, number] = [14.7645, -17.3937]

export function AtelierMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return

    const map = L.map(mapRef.current, {
      center: ATELIER_COORDS,
      zoom: 15,
      scrollWheelZoom: false,
      attributionControl: false,
    })

    // Dark-themed tile layer
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 19,
        subdomains: "abcd",
      }
    ).addTo(map)

    // Custom gold marker
    const goldIcon = L.divIcon({
      className: "",
      html: `
        <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #D4AF37;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 4px 20px rgba(212,175,55,0.4);
        ">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transform: rotate(45deg);">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -42],
    })

    const marker = L.marker(ATELIER_COORDS, { icon: goldIcon }).addTo(map)
    marker.bindPopup(
      `<div style="font-family: sans-serif; text-align: center; padding: 4px 0;">
        <strong style="font-size: 14px; color: #1C1917;">Golden Pousso</strong><br/>
        <span style="font-size: 12px; color: #78716C;">Pikine Tally Boumack, Dakar</span>
      </div>`,
      { className: "golden-popup" }
    ).openPopup()

    mapInstance.current = map

    return () => {
      map.remove()
      mapInstance.current = null
    }
  }, [])

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-sm overflow-hidden border border-[#2A2A2A]">
      <div ref={mapRef} className="absolute inset-0 z-0" />
      {/* Gold border overlay on top of the map */}
      <div className="absolute inset-0 z-10 pointer-events-none rounded-sm ring-1 ring-inset ring-[#D4AF37]/20" />
    </div>
  )
}
