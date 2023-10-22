import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ImageStyle, StyleSheet, Image, TouchableOpacity, } from 'react-native';

import { FigureImage } from 'react-bootstrap';
import { colors, spacing } from "../theme"
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const register = require("../../assets/images/register.png")

export const Inscription = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setnom] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const [error, setError] = useState('');


  

  const handleLogin = () => {
    if (prenom  && nom  && pseudo && username && password && confirmpass === password) {
      alert('inscription réussie');
    } else {
      setError('Veuillez remplir tous les champs');
      if (!prenom) {
        setError('Veuillez remplir tous les champs');
      }
    }
  }
  

  const navigation = useNavigation() as any;

  const handleInscription = () =>
  {
    navigation.navigate('Inscription');
  }

  useEffect(() => {
    // Réinitialise les champs d'entrée lors du montage du composant
    setPrenom('');
    setnom('');
    setPseudo('');
    setUsername('');
    setPassword('');
    setConfirmpass('');

  }, []);
 Text
  return (
    <View style={styles.container}>

     
      <View style={styles.$form}>
        <Image style={$Register} source={register} resizeMode='contain' />
        <Text style={styles.inscriptionText}>Inscrivez-vous</Text>
        <View style={styles.contain}>
        <TextInput
        style={styles.inpNom}
        placeholder='Nom'
        placeholderTextColor='rgba(128, 128, 128, .5)'

        value={nom}
        onChangeText={(text) => setnom(text)}
        
        />
    <Text style={styles.error}>{error}</Text>

     <TextInput
        style={styles.inpPrenom}
        placeholder='Prenom'
        placeholderTextColor='rgba(128, 128, 128, .5)'

        value={prenom}
        onChangeText={(text) => setPrenom(text)}
        
        />
     <Text style={styles.errorText}>{error}</Text>


        <TextInput
        style={styles.input}
        placeholder='Speudo'
        placeholderTextColor='rgba(128, 128, 128, .5)'

        value={pseudo}
        onChangeText={(text) => setPseudo(text)}
        
        />
     <Text style={styles.errorText}>{error}</Text>

      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor='rgba(128, 128, 128, .5)'

        value={username}
        onChangeText={(text) => setUsername(text)}
        
        />
     <Text style={styles.errorText}>{error}</Text>

      <TextInput
        style={styles.input}
        placeholder='Mot de passe'
        placeholderTextColor='rgba(128, 128, 128, .5)'
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        
      />
     <Text style={styles.error}>{error}</Text>

     <TextInput
        style={styles.input}
        placeholder='Confirmer le mot de passe'
        placeholderTextColor='rgba(128, 128, 128, .5)'

        value={confirmpass}
        onChangeText={(text) => setConfirmpass(text)}
        secureTextEntry={true}
        />
     <Text style={styles.errorText}>{error}</Text>

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

  inscriptionText:
  {
    position: 'relative',
    textAlign:'center',
    top: '30%',
    fontSize: 30,
  },


  $form:
  {
    backgroundColor: '#E5E5E5',
    width: '40%',
    height: '95%',
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

  inpNom:{ 
    width: 150,
    height: 35,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginTop: 10
  },

  inpPrenom: { 

    position:'absolute',
      width: 133,
      top: '2.7%',
      borderWidth: 1,
      borderRadius: 15,
      padding:8,
      left: '55%'
      
 },
  


  input: {
    width: 300,
    height: 35,
    borderWidth: 1,
    borderRadius: 15,
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
    marginBottom: 5,
  }

  
});

const $Register: ImageStyle =
  {
  position: 'absolute',
  height: 100,
  width: "100%",
  top: '10%',
  right: 10,

  
  }


export default Inscription;


