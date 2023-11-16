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
import { useStores } from '../core/helpers/useStores';

export const SignIn = () => {
  const { width, height } = useWindowDimensions();
  const isSmallScreen = width < 855;

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
    <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      style={[styles.container, { height, width: isSmallScreen ? '100%' : '70%' }]}
    >
      <View style={isSmallScreen ? styles.columnContainerSmall : styles.columnContainerLarge}>
        {/* Colonne de gauche avec l'image */}

        {/* Colonne de droite avec le formulaire */}
        <View style={isSmallScreen ? styles.rightColumnSmall : styles.rightColumnLarge}>
          <Image source={require('../../assets/images/logooo.png')} style={styles.logo}></Image>
          <View style={[styles.formContainer, { width: isSmallScreen ? '100%' : '100%' }]}>
            <Text style={styles.title}>Connectez-vous</Text>

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
            <Text style={styles.eror}> {error} </Text>

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
    flexDirection: 'column',
  },
  columnContainerSmall: {
    flexDirection: 'column',
  },
  columnContainerLarge: {
    flex: 1,
    flexDirection: 'column',
  },

  logo: {
    flex: 1,
    marginBottom: 50,
    alignSelf: 'center',
  },

  rightColumnSmall: {
    top: '30%',
    alignSelf: 'center',
  },
  rightColumnLarge: {
    flex: 1,
    width: '50%',
    left: '80%',
    top: '20%',
    padding: 40,
  },

  formContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(190, 190, 190, .5)',
    alignSelf: 'center',
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

  eror: {
    color: 'red',
    fontSize: 14,
  },
});

export default SignIn;
