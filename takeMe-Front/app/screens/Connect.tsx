import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ImageStyle, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { FigureImage } from 'react-bootstrap';
import { colors, spacing } from "../theme"
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const userConn = require("../../assets/images/users.png")

export const Connect = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === "user" && password === "123") {
      alert('connexion réussie');
    } else {
      setError('Nom d\'utilisateur ou mot de passe incorrect');
    }
  }
  

  const navigation = useNavigation() as any;

  const handleInscription = () =>
  {
    navigation.navigate('Inscription');
  }

  useEffect(() => {
    // Réinitialise les champs d'entrée lors du montage du composant
    setUsername('');
    setPassword('');
  }, []);
 
  return (
    <View style={styles.container}>
        <View style={styles.nav}>
            <Text>sqbjkbfkqsjfb</Text>
        </View>


      <View style={styles.$form}>
        <Image style={$userConn} source={userConn} resizeMode='contain' />
        <View style={styles.contain}>
      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor='rgba(128, 128, 128, .5)'

        value={username}
        onChangeText={(text) => setUsername(text)}
        
        />
     <Text style={styles.errorText}></Text>

      <TextInput
        style={styles.input}
        placeholder='Mot de passe'
        placeholderTextColor='rgba(128, 128, 128, .5)'
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
    alignItems: 'center',
  },

  nav:
  {
    
    width: '100%',
    height: '10%',
    backgroundColor: 'grey'
  },

  btnView:
  {
    padding: 8,
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

  hoveredButton: {
    color: 'grey',
  },

  txtReg:
  {
    
  },

  $form:
  {
    backgroundColor: '#E5E5E5',
    width: '40%',
    height: '70%',
    borderRadius: 7,
    marginTop:'5%'
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
    padding: 10,
    marginTop: 10
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



export default Connect;
