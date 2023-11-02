import React, { useState } from 'react';
import { SafeAreaView, Image, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import IconFolderOpen from '../icons/IconFolderOpen';
import IconCamera from '../icons/IconCamera';

import { useNavigation } from '@react-navigation/native';

const defaultAdvert = require('../../assets/images/default_user.png');


const AdvertFormScreen = () => {
  const [name, onChangeName] = React.useState('');
  const [description, onChangeDescription] = React.useState('');
  // const [geocode, onChangeText] = React.useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = () => {
    if (name && description) {
      navigation.navigate('<Adverts>', {
        name: name,
        description: description,

      });
    } else {
      setError('Veuillez remplir tous les champs');
    }
  };
  const navigation = useNavigation() as any;
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


  return (
    <SafeAreaView>
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

      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={geocode}
        placeholder="Localisation de l'objet"
      /> */}

      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={geocode}
        placeholder="Localisation de l'objet"
      /> */}

      {/* {image ? (
        <Image source={{ uri: image }} />
      ) : (
        <Image source={defaultAdvert} />
      )} */}
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <TouchableOpacity style={styles.imgDownload} onPress={pickImage}>
        <Text style={styles.txt_btn_img}><IconFolderOpen color='black' size={20} /> Télécharger depuis la galerie</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.imgDownload} onPress={pickImageCamera}>
        <Text style={styles.txt_btn_img}><IconCamera color='black' size={20} />Prendre une photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btn]} onPress={handleSubmit}>
        <Text style={styles.txtBtn}>Créer une annonce</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    marginTop: 10,
  },
  btn: {
    backgroundColor: 'black',
    width: '60%',
    height: 40,
    position: 'relative',
    left: '17%',
    borderRadius: 7,
  },

  txtBtn: {
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    top: '20%',
  },

  txt_btn_img: {
    fontSize: 18,
    paddingVertical: 2,
    padding: 10,
  },
  imgDownload: {
    borderColor: '#212121',
    height: 30,
    borderRadius: 5,
    width: '60%',
    margin: 10,
  },
});


export default AdvertFormScreen;