import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Button,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import IconFolderOpen from '../icons/IconFolderOpen';
import IconCamera from '../icons/IconCamera';
import { useNavigation } from '@react-navigation/native';
import GeocodeEarthAutocomplete from 'react-geocode-earth-autocomplete';
import * as Location from 'expo-location';
import IconLocation from 'app/icons/IconLocation';
import { IAdvert } from '../core/models/Advert';
import { advertService } from '../core/services/api';
import { AdvertDto } from '../core/advert.dto';

const { width, height } = Dimensions.get('window');

const AdvertFormScreen = () => {
  const [name, onChangeName] = React.useState('');
  const [description, onChangeDescription] = React.useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const [address, setAddress] = useState('');
  const [selectedAddress, setSelectedAddress] = useState({
    description: '',
    latitude: null,
    longitude: null,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState();

  const navigation = useNavigation() as any;
  const [manualAddressEntry, setManualAddressEntry] = useState(false);

  function separateImage(image: string) {
    let parts = image.split(',');
    let mime = parts[0].split(':')[1].split(';')[0];
    let base64 = parts[1];

    return {
      mime,
      base64,
    };
  }

  function isValidAdress() {
    return selectedAddress.description && selectedAddress.latitude && selectedAddress.longitude;
  }

  const handleSubmit = async () => {
    if (name && description) {
      let geocode;

      if (isValidAdress()) {
        geocode = [selectedAddress.latitude, selectedAddress.longitude];
      } else {
        geocode = [location.coords.latitude, location.coords.longitude];
      }

      const newAdvert: AdvertDto = {
        name,
        description,
        images: separateImage(image),
        geocode,
      };

      await advertService.create(newAdvert);

      navigation.navigate('Adverts');
    } else {
      setError('Veuillez remplir tous les champs');
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickImageCamera = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.status === 'granted') {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log('location', location.coords.latitude);
    })();
  }, []);

  let text = 'Récupérer ma localisation';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Nom de l'annonce"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeDescription}
        value={description}
        placeholder="Description"
      />

      <GeocodeEarthAutocomplete
        searchOptions={{
          api_key: 'ge-13910afc8a883b7a',
        }}
        value={address}
        onChange={(newAddress) => {
          setAddress(newAddress);
          setManualAddressEntry(false);
        }}
        onSelect={(newAddress) => {
          setSelectedAddress({
            description: newAddress.description,
            latitude: newAddress.geometry?.location.lat,
            longitude: newAddress.geometry?.location.lng,
          });
          setManualAddressEntry(false);
        }}
      >
        {(props) => (
          <div>
            <input
              {...props.getInputProps({
                placeholder: 'Entrez adresse',
                style: {
                  ...props.style,
                  height: 20,
                  margin: 12,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 7,
                  marginTop: 10,
                  width: '80%',
                },
              })}
            />
            <div>
              {props.loading && <div>Loading...</div>}
              {props.suggestions.map((suggestion) => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...props.getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </GeocodeEarthAutocomplete>

      <TouchableOpacity style={styles.input} onPress={() => setManualAddressEntry(true)}>
        <Text style={styles.txt_btn_img}>
          {' '}
          <IconLocation color="black" size={20} />
        </Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TouchableOpacity style={styles.imgDownload} onPress={pickImage}>
        <Text style={styles.txt_btn_img}>
          <IconFolderOpen color="black" size={20} /> Télécharger depuis la galerie
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.imgDownload} onPress={pickImageCamera}>
        <Text style={styles.txt_btn_img}>
          <IconCamera color="black" size={20} />
          Prendre une photo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn]} onPress={handleSubmit}>
        <Text style={styles.txtBtn}>Créer une annonce</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    marginTop: 10,
    width: '80%',
  },
  btn: {
    backgroundColor: 'black',
    width: '60%',
    height: 40,
    borderRadius: 7,
    marginTop: 10,
  },
  image: {
    width: '80%',
    height: width * 0.6,
    marginTop: 10,
  },
  txtBtn: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 40,
  },

  txt_btn_img: {
    fontSize: 18,
    paddingVertical: 2,
    padding: 10,
    flexDirection: 'row',
  },

  imgDownload: {
    borderColor: '#212121',
    height: 30,
    borderRadius: 5,
    width: '80%',
    margin: 10,
  },
});

export default AdvertFormScreen;
