import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AdvertCard from "app/components/AdvertCard";
import React, { useState } from "react";
import { TextStyle, View, ViewStyle, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../theme";
import { RootStackParams } from "app/navigators/MenuNavigator";
import TopDrawerNavigation from "app/components/TopDrawerNavigation";

type Props = NativeStackScreenProps<RootStackParams, "AdvertsStack">;

export const Adverts = ({ navigation }: Props) => {
  const [annonces, setAnnonces] = useState([
    {
      adname: "Chaise en bois",
      description: "Chaise en bon état, couleur marron",
      quantity: "1",
      latitude: "6777.9009",
      longitude: "79798.90909",
      image: 'https://images.unsplash.com/photo-1695849118500-c8034bc651b6?auto=format&fit=crop&q=80&w=400&h=300',
    },
    {
      adname: "Étagère blanche",
      description: "Étagère blanche, 1m50, bon état, 3 étages",
      quantity: "1",
      latitude: "6877.9339",
      longitude: "99798.90509",
      image: 'https://images.unsplash.com/photo-1695669882447-1de80022ff21?auto=format&fit=crop&q=80&w=400&h=300',
    }
  ]);

  return (
    <View style={$container}>
      <TopDrawerNavigation />
      <ScrollView>
        <FlatList
          data={annonces}
          renderItem={({ item }) => (
            <AdvertCard
              name={item.adname}
              image={item.image}
              onPress={() => {
                navigation.navigate('Advert', { item: item });
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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

export default Adverts;
