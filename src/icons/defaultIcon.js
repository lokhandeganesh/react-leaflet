import L from "leaflet";
import iconColor from "../assets/location.png"
// import iconBW from "../assets/place-marker.png"


function markerIcon2() {
  const leafIcon = L.Icon.extend({
    options: {
      iconSize: [25, 25],
      iconUrl: iconColor
    }
  }
  )
  return (
    L.marker({ icon: leafIcon.iconUrl })
  )
}

export default markerIcon2;



