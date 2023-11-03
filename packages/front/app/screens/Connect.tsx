import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

const background = require('../../assets/images/bg.jpg');
const screenWidth = Dimensions.get('window').width;

export const Connect = () => {
  const isMobile = screenWidth <= 768; // Vous pouvez ajuster la largeur limite selon vos besoins
  const imageWidth = isMobile ? '100%' : screenWidth / 2; // Largeur de l'image

  return (
    <ImageBackground source={background} style={[styles.container, { width: imageWidth }]}>
      <View style={[styles.form, isMobile && styles.centerForm]}>
        <Text style={styles.title}>Connexion</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          placeholderTextColor="rgba(128, 128, 128, .5)"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="rgba(128, 128, 128, .5)"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  form: {
    width: '100%', // Par défaut, prend tout l'écran
    maxWidth: 400, // Limite la largeur sur les écrans larges (PC)
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'grey',
  },
  centerForm: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    width: '50%',
    height: 40,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
  },
  forgotPassword: {
    marginTop: 10,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: 'blue',
  },
  registerButton: {
    backgroundColor: 'green',
    width: '50%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default Connect;
