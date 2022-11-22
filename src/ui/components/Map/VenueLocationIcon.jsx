import L from "leaflet";

import IconSvg from "../../../assets/venue_location_icon.svg";



export const VenueLocationIcon = L.icon({

    iconUrl: IconSvg,
    inconRetinaUrl: IconSvg,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: (35, 35),
    className: "leaflet-venue-icon"
});
