import React, { useState } from 'react';
import { View, Text, TextInput, ImageStyle, StyleSheet, Image, TouchableOpacity } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FigureImage } from 'react-bootstrap';
import { colors, spacing } from "../theme"
import { useNavigation } from '@react-navigation/native';
const userConn = require("../../assets/images/users.png")

export const connexion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'mehdi' && password === '123') {
      alert('Connexion réussie');
    } 
  };

  const navigation = useNavigation() as any;

  const handleInscription = () =>
  {
    navigation.navigate('Inscription');
  }

  return (
    <View style={styles.container}>
      <View style={styles.$form}>
        <Image style={$userConn} source={userConn} resizeMode='contain' />
        <View style={styles.contain}>
      <TextInput
        style={styles.input}
        placeholder='Email'
        
      />
     <Text style={styles.errorText}>{username}</Text>

      <TextInput
        style={styles.input}
        placeholder='Mot de passe'
        
        secureTextEntry
      />
     <Text style={styles.error}>{error}</Text>

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

  btnPass:
  {
    textAlign: 'center',
    position: 'relative',
    top: 10,
    
  },

  txtPass:
  {
  },

  btnReg:
  {
    textAlign: 'center',
    position: 'relative',
    top: 20,
  },

  txtReg:
  {
    
  },

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
    height: 35,
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 10,
    backgroundColor: 'white',
    color:'rgba(128, 128, 128, 0.4)',
    padding: 8,
    marginTop: 15
  },

  errorText:
  {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },

  error:
  {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  }

  
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
