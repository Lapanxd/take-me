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
  const isScreenSmall = width < 1090;

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
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={isScreenSmall ? styles.columnContainerSmall : styles.columnContainerLarge}>
          <ImageBackground source={background} style={styles.leftColumn}></ImageBackground>

          <View style={styles.rightColumn}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.formLeft}>
              <View style={styles.formContainer}>
                <Text style={styles.title}>Connexion</Text>
                <Text style={styles.label}>Adresse e-mail</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Nom d'utilisateur"
                  placeholderTextColor="rgba(128, 128, 128, .5)"
                  onChangeText={(text) => setMail(text)}
                />
                <Text style={styles.label}>Mot de passe</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Mot de passe"
                  placeholderTextColor="rgba(128, 128, 128, .5)"
                  secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)}
                />

                <Text style={styles.error}>{error}</Text>
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
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  form: {
    width: '100%',
    maxWidth: 414,
    height: '100%',
    maxHeight: 414,
    top: '20%',
    backgroundColor: 'rgba(190, 190, 190, .6)',
    borderRadius: 10,
    alignItems: 'center',
  },
  centerForm: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightForm: {
    marginLeft: 'auto',
    marginRight: '15%',
    top: '20%',
  },
  columnContainerSmall: {
    flex: 1,
    position: 'absolute',
    width: '100%',
  },
  columnContainerLarge: {
    flex: 1,
    flexDirection: 'row', // Deux colonnes pour les grands écrans
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightColumn: {
    flex: 1,
    top: '10%',
  },
  formContainer: {
    flex: 1,
    width: '50%',
    height: '100%',
    left: '25%',
    top: '10%',
    backgroundColor: 'rgba(190, 190, 190, .6)',
    borderRadius: 10,
  },

  formLeft: {
    flex: 1,
    marginTop: '30%',
    maxHeight: '100%',
  },

  logo: {
    marginLeft: '30%',
    width: 270,
    height: 80,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'center',
    paddingBottom: 30,
    paddingTop: 30,
  },

  label: {
    position: 'relative',
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
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
    color: 'blue',
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

  error: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: '6%',

    marginBottom: 5,
  },
});

export default SignIn;
