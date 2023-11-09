// Map.tsx
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';


import type { MapViewProps } from '.';

// Used for native ios/android
export const MapForNative: React.FC<MapViewProps> = ({ geocodes, names, region }) => {
  const [latitude, longitude] = region;

  return (
    <MapView 
      style={styles.map}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {geocodes.map(([latitude, longitude], index) => (
        <Marker
          key={index}
          coordinate={{latitude, longitude}}
          title={names[index]}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
});


export default MapForNative;

