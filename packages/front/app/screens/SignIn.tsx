import React, { useState } from 'react';
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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { navigate } from 'app/navigators';
const background = require('../../assets/images/bg.jpg');
const logo = require('../../assets/images/logooo.png');
const screenWidth = Dimensions.get('window').width;

export const SignIn = () => {
  const { width } = useWindowDimensions();
  const isMobile = width <= 1300;
  const navigate = useNavigation() as any;

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function connexion() {
    if (mail === 'user' && password === '123') {
      navigate.navigate('Profil');
    } else {
      setError('Adresse mail ou mot de passe incorrect');
    }
  }

  function inscription() {
    navigate.navigate('Inscription');
  }

  return (
    <ImageBackground source={background} style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Image source={logo} style={styles.logo} />
        <View
          style={[
            styles.form,
            isMobile && styles.centerForm,
            isMobile ? styles.centerForm : styles.rightForm,
          ]}
        >
          <Text style={styles.title}>Connexion</Text>
          <Text style={styles.label}>Adresse e-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="exemple@gmail.com"
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
      </KeyboardAvoidingView>
    </ImageBackground>
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

  logo: {
    marginLeft: 'auto',
    marginRight: '20%',
    top: '10%',
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
    marginLeft: '6%',
  },

  input: {
    width: '90%',
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
