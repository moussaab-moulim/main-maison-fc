import React from 'react';

import styled from 'styled-components';

const MapContainer = styled.div`
  margin-top: 80px;
  height: 450px;
  width: 100%;
  position: relative;
  overflow: hidden;
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -54px;
  }
`;

interface MapProps {
  mapEmbedLink: string;
}

const Map = ({ mapEmbedLink }: MapProps) => {
  return (
    <MapContainer>
      <iframe src={mapEmbedLink} loading="lazy"></iframe>
    </MapContainer>
  );
};

/* withScriptjs(
  withGoogleMap(({ lng, lat }: MapProps) => {
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{
          lat,
          lng,
        }}
      >
        <Marker
          position={{
            lat,
            lng,
          }}
        />
      </GoogleMap>
    );
  })
); */
export default Map;
