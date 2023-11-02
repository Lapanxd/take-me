import React from 'react';
import { View, ViewStyle, Text, Image, ImageStyle, TextStyle, Pressable } from 'react-native';
import Map from '../components/Map';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../theme';
import CloseBurgerIcon from '../icons/CloseBurgerIcon';

interface Props {
    name: string;
    image: string;
    description: string;
    geocode: number;
    onClose: () => void;
}
export const AdvertDetail: React.FC<Props> = ({ name, image, description, geocode, onClose }) => {
    return (
        <View style={$container}>
            <View >
                {/* Close button */}
                <Pressable onPress={onClose}>
                    <CloseBurgerIcon color={'black'} size={40} />
                </Pressable>
            </View>
            <View style={$advertcontent}>
                <View style={$advertbloc}>
                    <ScrollView>

                        <View style={$adcontent}>
                            <Text style={$title}>{name}</Text>
                            <Image source={{ uri: image }} style={$image} />
                            <Text style={$label}>Description:</Text>
                            <View style={$contentdescription}>
                                <Text style={$description}>{description}</Text>
                            </View>

                        </View>
                    </ScrollView>
                </View>
                <View style={$mapcontent}>
                    <Map geocodes={[geocode]} names={[name]} selectedGeocode={geocode} />
                </View>
            </View>

        </View>
    );
};

const $container: ViewStyle = {
    flex: 1,
    padding: 16,
    margin: 8,
};


const $adcontent: ViewStyle = {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
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
};

const $contentdescription: ViewStyle = {
    flexDirection: 'row',
};
const $description: TextStyle = {
    fontSize: 16,
    marginTop: 4,
    color: colors.text,
    backgroundColor: colors.transparent,
    flex: 1,
    flexWrap: 'wrap',
};

const $image: ImageStyle = {
    width: 300,
    height: 300,
    marginRight: 8,
    borderRadius: 8,
};

const $advertcontent: ViewStyle = {
    flexDirection: 'row',
};

const $advertbloc: ViewStyle = {
    flexDirection: 'column',
    width: 700,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
};

const $mapcontent: ViewStyle = {
    flexDirection: 'column',
    width: 500,
    height: 300,
};
export default AdvertDetail;
