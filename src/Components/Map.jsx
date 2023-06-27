import React from "react";
import {
  MapContainer,
  TileLayer,
  WMSTileLayer,
  LayersControl,
  Marker, Popup, Tooltip, useMap,
} from 'react-leaflet';
import './Map.css';

import { nrm_data } from "../data/nrm_point_data";
// import markerIcon from "../icons/defaultIcon"

import iconColor from "../assets/location.png"
// import iconBW from "../assets/place-marker.png"
import L from "leaflet";

// import MarkerLayer from "./Marker";
import ApiFetch from "./api"



function Map() {

  const position = [19.50, 75.90];
  // const crs = "EPSG4326"
  const zoom = 7.5;
  const scrollWheelZoom = true

  // Base Map Options
  const BASEMAP_URL = {
    OPENSTREETMAP: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    ESRI_DARK: `https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}`,
    ESRI_LIGHT: `https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}`,
    ESRI_TERRAIN: `https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`,
    ESRI_SATELLITE: `https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`,
    // GOOGLE_SATELLITE: 'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
  }

  const MarkerLayer = ({ data }) => {
    const leafletMap = useMap();

    return data.features.map(feature => {
      const { coordinates } = feature.geometry;

      const { district, id, name, ph_i,
        structure_type, taluka, vil_name, vincode } = feature.properties

      var markerIcon = L.icon({
        iconUrl: iconColor,
      });

      // console.log(district);

      return (
        <Marker key={id} position={[coordinates[1], coordinates[0]]}
          icon={markerIcon}
          eventHandlers={{
            click: (e) =>
              leafletMap.panTo(e.latlng)
          }}
        >
          <Popup>
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-sm">
                <thead className="bg-success text-white ">
                  <tr>
                    <th colSpan="2" className="text-align-center">NRM Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>{id}</td>
                  </tr>
                  <tr>
                    <th>District</th>
                    <td>{district}</td>
                  </tr>
                  <tr>
                    <th>Taluka</th>
                    <td>{taluka}</td>
                  </tr>
                  <tr>
                    <th>Village</th>
                    <td>{vil_name}</td>
                  </tr>
                  <tr>
                    <th>Village Code</th>
                    <td>{vincode}</td>
                  </tr>
                  <tr>
                    <th>Activity Name</th>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <th>Phase</th>
                    <td>{ph_i}</td>
                  </tr>
                  <tr>
                    <th>Structure Type</th>
                    <td>{structure_type}</td>
                  </tr>
                  {/* <tr colSpan="2">
                          <th>Activity Image</th>
                        </tr>
                        <tr colSpan="2"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4BxqXGmHk1fNrzsqDFduBXdl7SiHRniPKjeBsImeksXxSanwuj7JmW4gz3H1F2FsWmM&usqp=CAU"} alt={"img"} border={3} height={100} width={100} /></tr> */}
                </tbody>
              </table>
            </div>
          </Popup>
          <Tooltip>
            {name}
          </Tooltip>
        </Marker >
      );
    });
  }

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">नानाजी देशमुख कृषी संजीवनी प्रकल्प</h1>
      </div>
      <div className="map-container">
        <div className="map-frame">
          <div id="map-id">
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={scrollWheelZoom} >
              <LayersControl position="topright">
                <LayersControl.Overlay name="Open Street Map">
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={BASEMAP_URL.OPENSTREETMAP}
                  />
                </LayersControl.Overlay>
                <LayersControl.Overlay name="Esri Terrain">
                  <TileLayer

                    url={BASEMAP_URL.ESRI_TERRAIN}
                  />
                </LayersControl.Overlay>

                <LayersControl.Overlay name="Satellite">
                  <TileLayer
                    url={BASEMAP_URL.ESRI_SATELLITE}
                  />
                </LayersControl.Overlay>
                <LayersControl.Overlay checked name="Admin Layers">
                  <WMSTileLayer
                    url='https://test-gis.mahapocra.gov.in/geoserver/PoCRA_Spatial_WSp/wms?'
                    layers="PoCRA_Spatial_WSp:District"
                    transparent={true}
                  />
                </LayersControl.Overlay>
                <LayersControl.Overlay name="NRM Existing Structurs">
                  <WMSTileLayer
                    url='https://test-gis.mahapocra.gov.in/geoserver/PoCRA_Spatial_WSp/wms?'
                    layers="PoCRA_Spatial_WSp:nrm_exiting_point_data"
                    viewparams={{ taluka: 'Motala' }}
                    transparent={true}
                  />
                </LayersControl.Overlay>
                {/* GeoJSON Layer */}
                <LayersControl.Overlay name="NRM Structurs">
                  {/* <MarkerLayer data={nrm_data} /> */}
                </LayersControl.Overlay>
                <MarkerLayer data={nrm_data} />
              </LayersControl>
            </MapContainer>

          </div>
        </div>
      </div>
    </div>
  )


}

export default Map;