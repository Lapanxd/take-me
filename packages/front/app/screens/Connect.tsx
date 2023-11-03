import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ImageStyle,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, spacing } from '../theme';
import { useNavigation } from '@react-navigation/native';
const userConn = require('../../assets/images/logoo.png');
const background = require('../../assets/images/bg.jpg');

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export const Connect = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (username === 'user' && password === '123') {
      try {
        await AsyncStorage.setItem('authToken', 'testAuthentified');
        navigation.navigate('Profil', { username: username });
      } catch (error) {
        console.error('Erreur lors de la sauvegarde du jeton !', error);
      }
    } else {
      setError("Nom d'utilisateur ou mot de passe incorrect");
    }
  };

  const navigation = useNavigation() as any;

  const handleInscription = () => {
    navigation.navigate('Inscription');
  };

  useEffect(() => {
    setUsername('');
    setPassword('');
  }, []);

  return (
    <View style={styles.container}>
      <Image source={background} style={styles.bg} />

      <View style={styles.$form}>
        <Image style={$userConn} source={userConn} resizeMode="contain" />
        <Text style={styles.titre}>Connexion</Text>
        <View style={styles.contain}>
          <Text style={styles.label}>Adresse e-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="rgba(128, 128, 128, .5)"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Text style={styles.errorText}></Text>

          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            placeholderTextColor="rgba(128, 128, 128, .5)"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <Text style={styles.error}>{error}</Text>

          <View style={styles.btnView}>
            {/* Bouton Connecter, MDP_O, Inscription*/}
            <TouchableOpacity style={[styles.btn]} onPress={handleLogin}>
              <Text style={styles.txtBtn}>Se connecter</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnPass}>
              <Text style={styles.txtPass}> Mot de passe oublié ?</Text>
            </TouchableOpacity>

            {/* */}
            <TouchableOpacity style={styles.btnReg} onPress={handleInscription}>
              <Text style={styles.txtReg}> S'inscrire</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  bg: {
    position: 'absolute',
    width: screenWidth / 2,
    height: screenHeight,
    marginLeft: '50%',
  },

  $form: {
    width: '50%',
    height: '100%',
  },

  contain: {
    position: 'absolute',
    top: '45%',
    marginLeft: '25%',
  },

  label: {
    color: 'rgba(128, 128, 128, .5)',
  },
  input: {
    width: 300,
    height: 35,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    marginTop: 10,
  },
  titre: {
    position: 'absolute',
    marginLeft: '25%',
    marginTop: '37%',
    fontSize: 24,
  },
  btnView: {
    padding: 8,
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

  btnPass: {
    textAlign: 'center',
    position: 'relative',
    top: 10,
  },

  txtPass: {},

  btnReg: {
    textAlign: 'center',
    position: 'relative',
    top: 20,
  },

  hoveredButton: {
    color: 'grey',
  },

  txtReg: {},

  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },

  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

const $userConn: ImageStyle = {
  position: 'absolute',
  height: '20%',
  width: '30%',
  marginTop: '20%',
  marginLeft: '25%',
};

export default Connect;
