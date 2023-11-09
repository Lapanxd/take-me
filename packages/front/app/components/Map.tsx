// Map.tsx
import React from 'react';
import { View, ViewStyle, TouchableOpacity } from 'react-native';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
// import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
// import { WebView } from 'react-native-webview';

import { colors } from '../theme';

interface Props {
  geocodes: number[];
  names: string[];
}
const customIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
  iconSize: [38, 38],
});
export const Map: React.FC<Props> = ({ geocodes, names }) => {
  return (
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={$mapcontent}>
        <MapContainer
          center={[44.8378, -0.5667]}
          zoom={13}
          style={{ width: '100%', height: '80vh' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <MarkerClusterGroup chunkedLoading>
            {geocodes.map((geocode, index) => (
              <Marker key={index} position={geocode} icon={customIcon}>
                <Popup>{names[index]}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup> */}
        </MapContainer>
      </View>
    </TouchableOpacity>
  );
};

const $mapcontent: ViewStyle = {
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  backgroundColor: colors.transparent,
};

export default Map;
