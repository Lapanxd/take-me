import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { ISignUpUser } from '../core/models/SignUpUser';
import { authService } from '../core/services/api/auth.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useStores } from '../core';

export const SignUp = () => {
  const { width, height } = useWindowDimensions();
  const isSmallScreen = width < 855;
  const navigator = useNavigation() as any;

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lastnameError, setLastnameError] = useState('');
  const [firstnameError, setFirstnameError] = useState('');
  const [mailError, setMailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isPasswordsMatching = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };

  const {
    authenticationStore: { checkAuthentication },
  } = useStores();

  function checkForm(formData: ISignUpUser) {
    setLastnameError('');
    setFirstnameError('');
    setMailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!firstname) {
      setFirstnameError('Prénom requis');
      console.log('prénom');
      return;
    }

    if (!formData.lastname) {
      setLastnameError('Nom requis');
      console.log('nom');
      return;
    }

    if (!mail) {
      setMailError('Adresse mail requis');
      console.log('mail');
    } else if (!isEmailValid(mail)) {
      setMailError('Adresse mail non valide');
      return;
    }

    if (!password && !confirmPassword) {
      setPasswordError('Mot de passe requis');
      console.log('pwd');
      return;
    } else if (password && confirmPassword && !isPasswordsMatching(password, confirmPassword)) {
      setConfirmPasswordError('Confirmation de mot de passe requis');
      console.log('pwd');
      return;
    }

    console.log('c bon');

    return true;
  }

  async function inscription() {
    let isFormValid = checkForm({
      firstname,
      lastname,
      email: mail,
      password,
      confirmPassword,
    });

    if (isFormValid) {
      try {
        const user = await authService.signUp({
          firstname: firstname,
          lastname: lastname,
          email: mail,
          password: password,
          city: 'Bordeaux',
        });

        if (user) {
          await authService.signIn({
            email: mail,
            password,
          });

          await checkAuthentication();
        }
      } catch (err) {
        console.log(err);
      }
    }
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
          <View style={[styles.formContainer, { width: isSmallScreen ? '80%' : '100%' }]}>
            <Text style={styles.title}>Inscrivez-vous</Text>
            <View style={styles.inlineInput}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Nom "
                  placeholderTextColor="rgba(128, 128, 128, .5)"
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Prénom"
                  placeholderTextColor="rgba(128, 128, 128, .5)"
                />
              </View>
            </View>

            <TextInput
              style={styles.input}
              placeholder="exemple@gmail.com"
              placeholderTextColor="#888"
            />

            <TextInput style={styles.input} placeholder="Ville" placeholderTextColor="#888" />

            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              placeholderTextColor="#888"
              secureTextEntry
            />

            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              placeholderTextColor="#888"
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={inscription}>
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
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },

  inlineInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
    marginRight: 20,
  },
  button: {
    backgroundColor: '#212121',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SignUp;
