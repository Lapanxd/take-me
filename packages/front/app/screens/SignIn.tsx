import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { navigate } from 'app/navigators';
import { authService } from 'app/core/services/api/auth.service';
const background = require('../../assets/images/bg.jpg');
const logo = require('../../assets/images/logooo.png');
const screenWidth = Dimensions.get('window').width;
import { useStores } from '../core/helpers/useStores';

export const SignIn = () => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 1130;

  const navigate = useNavigation() as any;

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {
    authenticationStore: { checkAuthentication },
  } = useStores();

  async function connexion() {
    await authService.signIn({
      email: mail,
      password,
    });

    await checkAuthentication();
  }

  function inscription() {
    navigate.navigate('Inscription');
  }

  return (
    <ImageBackground source={require('../../assets/images/bg.jpg')} style={styles.container}>
      <View style={isSmallScreen ? styles.columnContainerSmall : styles.columnContainerLarge}>
        {/* Colonne de gauche avec l'image */}

        {/* Colonne de droite avec le formulaire */}
        <View style={isSmallScreen ? styles.rightColumnSmall : styles.rightColumnLarge}>
          <Image source={require('../../assets/images/logooo.png')} style={styles.logo}></Image>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Inscrivez-vous</Text>

            <TextInput
              style={styles.input}
              placeholder="exemple@gmail.com"
              placeholderTextColor="#888"
            />
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              placeholderTextColor="#888"
              secureTextEntry
            />

            <TouchableOpacity style={styles.loginButton} onPress={connexion}>
              <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton} onPress={inscription}>
              <Text style={styles.buttonText}>S'inscrire</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  columnContainerSmall: {
    flex: 1,
    flexDirection: 'column',
  },
  columnContainerLarge: {
    flex: 1,
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    marginLeft: '15%',
  },

  rightColumnSmall: {
    flex: 1,
    top: '70%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  rightColumnLarge: {
    flex: 1,
    marginLeft: '55%',
    top: '30%',
    padding: 40,
  },
  image: {
    width: '100%', // Ajuste la largeur à la taille de la colonne
    height: '100%', // Ajuste la hauteur à la taille de la colonne
    resizeMode: 'cover',
  },
  formContainer: {
    width: '80%', // Ajuste la largeur à la taille de la colonne
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(190, 190, 190, .5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  loginButton: {
    backgroundColor: '#212121',
    width: '60%',
    height: 40,
    borderRadius: 5,
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
    color: '212121',
  },
  registerButton: {
    backgroundColor: 'green',
    width: '60%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default SignIn;
