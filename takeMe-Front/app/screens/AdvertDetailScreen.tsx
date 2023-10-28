import React from "react";
import { View, ViewStyle, Text, Image, ImageStyle, TextStyle } from "react-native";
import { colors } from "../theme";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "app/navigators/MenuNavigator";
import TopBackNavigation from "app/components/TopBackNavigation";
import TopDrawerNavigation from "app/components/TopDrawerNavigation";
import { ScrollView } from "react-native-gesture-handler";

type Props = NativeStackScreenProps<RootStackParams, "AdvertDetailScreen">;

export const AdvertDetailScreen = ({ route }: Props) => {
  const { item } = route.params;

  return (
    <View style={$container}>
      <View style={$header}>
        <TopBackNavigation />
        <TopDrawerNavigation />
      </View>
      <ScrollView>
        <View style={$adcard}>
          <Image source={{ uri: item.image }} style={$image} />
          <View style={$adcontent}>
            <Text style={$title}>{item.adname}</Text>

            <Text style={$label}>Description:</Text>
            <View style={$contentdescription}>
              <Text style={$description}>{item.description}</Text>
            </View>
            <Text style={$label}>Quantity:</Text>
            <Text style={$text}>{item.quantity}</Text>

            <Text style={$label}>Latitude:</Text>
            <Text style={$text}>{item.latitude}</Text>

            <Text style={$label}>Longitude:</Text>
            <Text style={$text}>{item.longitude}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  padding: 16,
  marginTop: 8,
};

const $header: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
};

const $label: TextStyle = {
  fontSize: 16,
  fontWeight: "bold",
  marginBottom: 4,
};

const $text: TextStyle = {
  fontSize: 16,
  marginBottom: 8,
};
const $adcard: ViewStyle = {
  width: "50%",
  backgroundColor: "white",
  borderRadius: 8,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
  marginLeft: 50,
  padding: '16px',
  flexDirection: 'row',
};

const $adcontent: ViewStyle = {
  padding: 16,
};

const $title: TextStyle = {
  fontSize: 34,
  marginBottom: 8,
  color: 'orange',
  fontWeight: "bold",
  backgroundColor: colors.transparent,
};

const $contentdescription: ViewStyle = {
flexDirection:"row",
};
const $description: TextStyle = {
  fontSize: 16,
  marginTop: 4,
  color: colors.text,
  backgroundColor: colors.transparent,
  flex:1, 
  flexWrap: 'wrap',
};

const $image: ImageStyle = {
  width: 300,
  height: 300,
  marginRight: 8,
  borderRadius: 8,
};

export default AdvertDetailScreen;
