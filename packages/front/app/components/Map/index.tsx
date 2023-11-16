import React from 'react';
import { View, ViewStyle } from 'react-native';

import { colors } from 'app/theme/colors';
import MapView from './MapView';

export interface MapProps {
  geocodes: [number, number][];
  names: string[];
}

export type MapViewProps = MapProps & {
  region: [number, number];
};

export const Map: React.FC<MapProps> = (props) => {
  return (
    <View style={$mapcontent}>
      <MapView region={[44.8378, -0.5667]} {...props} />
    </View>
  );
};

const $mapcontent: ViewStyle = {
  flexDirection: 'column',
  backgroundColor: 'red',
};

export default Map;
