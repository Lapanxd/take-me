import React from "react";
import { View, ViewStyle, Text, Image, ImageStyle, TextStyle } from "react-native";
import { colors } from "../theme";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "app/navigators/MenuNavigator";
import TopBackNavigation from "app/components/TopBackNavigation";
import TopDrawerNavigation from "app/components/TopDrawerNavigation";
import { Card } from "react-bootstrap";
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
      <Card style={$card}>
        <Card.Body style={$content}>
          <View style={$textContainer}>
            <Text style={$label}>Ad Name:</Text>
            <Text style={$text}>{item.adname}</Text>

            <Text style={$label}>Description:</Text>
            <Text style={$text}>{item.description}</Text>

            <Text style={$label}>Quantity:</Text>
            <Text style={$text}>{item.quantity}</Text>

            <Text style={$label}>Latitude:</Text>
            <Text style={$text}>{item.latitude}</Text>

            <Text style={$label}>Longitude:</Text>
            <Text style={$text}>{item.longitude}</Text>
          </View>
          <View style={$imageContainer}>
            <Image source={{ uri: item.image }} style={$image} />
          </View>
        </Card.Body>
      </Card>
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

const $card: ViewStyle = {
  width: "80%",
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
  justifyContent: "center",
};

const $content: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
};

const $imageContainer: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

const $image: ImageStyle = {
  width: 400,
  height: 400,
  resizeMode: "cover",
};

const $textContainer: ViewStyle = {
  flex: 1,
  marginLeft: 16,
  alignItems: "center",
  justifyContent: "center",
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

export default AdvertDetailScreen;
