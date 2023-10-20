import React, { useState } from 'react';
import { View, Text, TextInput, ImageStyle, StyleSheet, Image, TouchableOpacity } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FigureImage } from 'react-bootstrap';
import { colors, spacing } from "../theme"
const userConn = require("../../assets/images/users.png")

export const connexion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ici, vous pouvez ajouter la logique de vérification des informations de connexion
    if (username === 'votre_utilisateur' && password === 'votre_mot_de_passe') {
      // Connectez l'utilisateur avec succès
      alert('Connexion réussie');
    } else {
      // Affichez un message d'erreur
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.$form}>
        <Image style={$userConn} source={userConn} resizeMode='contain' />
        <View style={styles.contain}>
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={text => setUsername(text)}
        value={username}
      />

      <TextInput
        style={styles.input}
        placeholder='Mot de passe'
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity style={[styles.btn]}>
        <Text style={styles.txtBtn}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnLog}>
        <Text style={styles.txtLog}> Mot de passe oublié ?</Text>
      </TouchableOpacity>
      </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

 
  btn:
  {
    backgroundColor: 'black',
    width: '60%',
    height: 40,
    position:'relative',
    left:'17%',
    borderRadius: 7
  },
  txtBtn:
  {
    color:'white',
    textAlign:'center',
    position: 'relative',
    top: '20%',
  },

  log

  $form:
  {
    backgroundColor: '#E5E5E5',
    width: '40%',
    height: '60%',
    borderRadius: 7
  },

  contain:
  {
    position: 'absolute',
    top: '45%',
    float: 'left',
    left: '25%',
  },
  
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 8,
  },
});

const $userConn: ImageStyle =
  {
    position: 'absolute',
  height: 100,
  width: "100%",
  top: '10%',
  right: 10,

  
  }

export default connexion;
