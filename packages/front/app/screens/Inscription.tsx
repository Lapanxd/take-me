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

import { FigureImage } from 'react-bootstrap';
import { colors, spacing } from '../theme';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const register = require('../../assets/images/logoo.PNG');
const background = require('../../assets/images/bg.jpg');
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const Inscription = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setnom] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const [error, setError] = useState('');
  const [errorPass, setErrorPass] = useState('');

  const handleLogin = () => {
    if (prenom && nom && username && email && password && confirmpass) {
      if (confirmpass !== password) {
        setErrorPass('Le mot de passe ne correspond pas');
      } else {
        navigation.navigate('Profil', {
          prenom: prenom,
          nom: nom,
          username: username,
          email: email,
        });
      }
    } else {
      setError('Veuillez remplir tous les champs');
    }
  };

  const navigation = useNavigation() as any;

  useEffect(() => {
    // Réinitialise les champs d'entrée lors du montage du composant
    setPrenom('');
    setnom('');
    setUsername('');
    setPassword('');
    setConfirmpass('');
  }, []);

  return (
    <View style={styles.container}>
      <Image source={background} style={styles.bg} />

      <View style={styles.$form}>
        <Image style={$Register} source={register} resizeMode="contain" />
        <Text style={styles.inscriptionText}>Inscription</Text>
        <View style={styles.contain}>
          <TextInput
            style={styles.inpNom}
            placeholder="Nom"
            placeholderTextColor="rgba(128, 128, 128, .5)"
            value={nom}
            onChangeText={(text) => setnom(text)}
          />

          <TextInput
            style={styles.inpPrenom}
            placeholder="Prenom"
            placeholderTextColor="rgba(128, 128, 128, .5)"
            value={prenom}
            onChangeText={(text) => setPrenom(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Nom d utilisateur"
            placeholderTextColor="rgba(128, 128, 128, .5)"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="monmail@mail.com"
            placeholderTextColor="rgba(128, 128, 128, .5)"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            placeholderTextColor="rgba(128, 128, 128, .5)"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirmer le mot de passe"
            placeholderTextColor="rgba(128, 128, 128, .5)"
            value={confirmpass}
            onChangeText={(text) => setConfirmpass(text)}
            secureTextEntry={true}
          />
          <Text style={styles.errorText}>{error}</Text>
          <Text style={styles.errorText}>{errorPass}</Text>

          <View style={styles.btnView}>
            {/* Bouton Connecter, MDP_O, Inscription*/}
            <TouchableOpacity style={[styles.btn]} onPress={handleLogin}>
              <Text style={styles.txtBtn}>S'inscrire</Text>
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

  nav: {
    width: '100%',
    height: '10%',
    backgroundColor: 'grey',
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

  inscriptionText: {
    position: 'absolute',
    marginTop: '35%',
    marginLeft: '25%',
    fontSize: 25,
  },

  $form: {
    width: '50%',
    height: '100%',
    borderRadius: 7,
  },

  contain: {
    position: 'absolute',
    top: '45%',
    marginLeft: '25%',
  },

  label: {
    fontSize: 18,
    marginBottom: 5,
  },

  inpNom: {
    width: 130,
    height: 35,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    marginTop: 10,
  },

  inpPrenom: {
    position: 'absolute',
    width: 130,
    height: 35,
    top: 10,
    borderWidth: 1,
    borderRadius: 7,
    padding: 8,
    left: '55%',
  },

  input: {
    width: 300,
    height: 35,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    marginTop: 10,
  },

  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },

  error: {
    color: 'red',
    fontSize: 12,
  },
});

const $Register: ImageStyle = {
  position: 'absolute',
  height: '20%',
  width: '30%',
  marginTop: '15%',
  marginLeft: '25%',
};

export default Inscription;
