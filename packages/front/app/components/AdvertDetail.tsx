import React from 'react';
import { View, ViewStyle, Text, Image, ImageStyle, TextStyle, Pressable, useWindowDimensions } from 'react-native';
import Map from '../components/Map';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../theme';
import CloseBurgerIcon from '../icons/CloseBurgerIcon';
import { IObjectType } from '../core/models/ObjectType';

interface Props {
    name: string;
    image: string;
    description: string;
    geocode: number;
    objectType: string;
    onClose: () => void;
}

export const AdvertDetail: React.FC<Props> = ({ name, image, description, geocode, objectType, onClose }) => {
    const { width } = useWindowDimensions();
    const isSmallScreen = width < 800;
    return (
        <View>
        <View style={$closeButton}>
            <Pressable onPress={onClose}>
                <CloseBurgerIcon color={'black'} size={40} />
            </Pressable>
        </View>
        <View style={isSmallScreen ? $advertContentSmall : $advertContentLarge}>
            <View style={isSmallScreen ? $adContentSmall : $adContentLarge}>
                <ScrollView>
                    <Text style={$title}>{name}</Text>
                    <Image source={{ uri: image }} style={isSmallScreen ? $imageSmall : $imageLarge} />
                    <Text style={$label}>Description:</Text>
                    <View style={$contentDescription}>
                        <Text style={$description}>{description}</Text>
                    </View>
                    <Text style={$label}>Type:</Text>
                    <Text style={$description}>
                        {objectType}
                    </Text>
                    </ScrollView>
            </View>
            {isSmallScreen && (
                <View style={$mapContentSmall}>
                    <Map geocodes={[geocode]} names={[name]} selectedGeocode={geocode} />
                </View>
            )}
     
        {!isSmallScreen && (
            <View style={$mapContentLarge}>
                <Map geocodes={[geocode]} names={[name]} selectedGeocode={geocode} />
            </View>
        )}
           </View>
    </View>
    );
};



const $closeButton: ViewStyle = {
    flex: 1,
    padding: 30,
};

const $advertContentSmall: ViewStyle = {
    flexDirection: 'column',
};

const $advertContentLarge: ViewStyle = {
    flexDirection: 'row',
    margin: 50
};

const $adContentLarge: ViewStyle = {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%'

};

const $adContentSmall: ViewStyle = {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%'

};

const $title: TextStyle = {
    fontSize: 34,
    marginBottom: 8,
    color: 'orange',
    fontWeight: 'bold',
    backgroundColor: colors.transparent,
};

const $label: TextStyle = {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 8
};

const $contentDescription: ViewStyle = {
    flexDirection: 'row',
    margin: 10
};

const $description: TextStyle = {
    fontSize: 16,
    marginTop: 4,
    color: colors.text,
    backgroundColor: colors.transparent,
    flex: 1,
    flexWrap: 'wrap',
};

const $imageSmall: ImageStyle = {
    width: '100%',
    height: 300,
    borderRadius: 8,
};

const $imageLarge: ImageStyle = {
    width: '50%',
    height: 300,
    marginRight: 8,
    borderRadius: 8,
};

const $mapContentSmall: ViewStyle = {
    flex: 1,
    width: '100%',
    height: 300,
};

const $mapContentLarge: ViewStyle = {
    width: '70%',
    height: 300,
};
export default AdvertDetail;
