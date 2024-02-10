import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "/india_1182.geojson";

const markers = [
  {
    markerOffset: 1,
    name: "",
    coordinates: [82.9085352, 25.3207396],
  },
  {
    markerOffset: 1,
    name: "",
    coordinates: [75.294982, 34.0104033],
  },
  {
    markerOffset: 1,
    name: "",
    coordinates: [73.6458117, 15.3487555],
  },
  {
    markerOffset: 1,
    name: "",
    coordinates: [88.2233893, 27.0331889],
  },

  {
    markerOffset: 1,
    name: "",
    coordinates: [85.7851719, 20.4630879],
  },
  {
    markerOffset: 1,
    name: "",
    coordinates: [88.2647789, 22.5354063],
  },
];

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-80, -18, 0],
        scale: 650,
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo, key) => (
            <Geography key={key} geography={geo} fill="#EEE" stroke="#DDD" />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={3} fill="#F00" stroke="#fff" strokeWidth={1} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D", fontSize: 10 }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
