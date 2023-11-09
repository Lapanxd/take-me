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
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authService } from 'app/core/services/api/auth.service';
import { ISignUpUser } from '../core/models/SignUpUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
const background = require('../../assets/images/bg.jpg');
const logo = require('../../assets/images/logooo.png');
const screenWidth = Dimensions.get('window').width;

export const SignUp = () => {
  const isMobile = screenWidth <= 768;
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

  function checkForm(formData: ISignUpUser) {
    setLastnameError('');
    setFirstnameError('');
    setMailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!firstname) {
      setFirstnameError('Prénom requis');
      return;
    }

    if (!formData.lastname) {
      setLastnameError('Nom requis');
      return;
    }

    if (!mail) {
      setMailError('Adresse mail requis');
    } else if (!isEmailValid(mail)) {
      setMailError('Adresse mail non valide');
      return;
    }

    if (!password && !confirmPassword) {
      setPasswordError('Mot de passe requis');
      return;
    } else if (password && confirmPassword && !isPasswordsMatching(password, confirmPassword)) {
      setConfirmPasswordError('Confirmation de mot de passe requis');
      return;
    }

    return true;
  }

  async function inscription() {
    const isFormValid = checkForm({
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

        await authService.signIn({
          email: mail,
          password,
        });

        if (await AsyncStorage.getItem('accessToken')) {
          navigator.navigate('Profil');
        }
      } catch (err) {
        console.log(err);
      }
    }
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
          <Text style={styles.title}>Inscrivez-vous</Text>
          <View style={styles.inlineInput}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nom</Text>
              <TextInput
                style={styles.input}
                placeholder="Nom "
                placeholderTextColor="rgba(128, 128, 128, .5)"
                onChangeText={(text) => setLastname(text)}
              />
              <Text style={styles.errorText}>{lastnameError}</Text>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Prénom</Text>
              <TextInput
                style={styles.input}
                placeholder="Prénom"
                placeholderTextColor="rgba(128, 128, 128, .5)"
                onChangeText={(text) => setFirstname(text)}
              />
              <Text style={styles.errorText}>{firstnameError}</Text>
            </View>
          </View>
          <Text style={styles.label}>Adresse e-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="user@gmail.com"
            placeholderTextColor="rgba(128, 128, 128, .5)"
            onChangeText={(text) => setMail(text)}
          />
          <Text style={styles.errorText}>{mailError}</Text>

          <Text style={styles.label}>Mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            placeholderTextColor="rgba(128, 128, 128, .5)"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={styles.errorText}>{passwordError}</Text>

          <Text style={styles.label}>Confirmer le mot de passe</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            placeholderTextColor="rgba(128, 128, 128, .5)"
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <Text style={styles.errorText}>{confirmPasswordError}</Text>

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
    maxHeight: 450,
    top: '15%',
    backgroundColor: 'rgba(234, 234, 234, .6)',
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
    backgroundColor: 'rgba(190, 190, 190, .6)',
  },

  logo: {
    marginLeft: 'auto',
    marginRight: '20%',
    top: '10%',
  },

  title: {
    fontSize: 28,
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
    borderRadius: 7,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },

  inlineInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: '5%',
  },
  inputContainer: {
    flex: 1,
    marginRight: 20,
    right: '1%',
  },

  buttonText: {
    color: 'white',
  },

  registerButton: {
    backgroundColor: 'green',
    width: '60%',
    height: 40,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: '10%',
  },

  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: '6%',
    position: 'relative',
    alignSelf: 'flex-start',
  },
});

export default SignUp;
