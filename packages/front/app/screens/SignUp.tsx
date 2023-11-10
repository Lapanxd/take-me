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
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 1130;
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
    console.log('here');
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

        if (user) {
          await authService.signIn({
            email: mail,
            password,
          });

          await checkAuthentication();
          navigator.navigate('adverts');
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
                    onChangeText={(text) => setNom(text)}
                />
                <Text style={styles.errorText}>{nomError}</Text>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Prénom</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Prénom"
                    placeholderTextColor="rgba(128, 128, 128, .5)"
                    onChangeText={(text) => setPrenom(text)}
                />
                <Text style={styles.errorText}>{prenomError}</Text>
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

              );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
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
  rightColumnSmall: {
    flex: 1,
    top: '50%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  rightColumnLarge: {
    flex: 1,
    marginLeft: '60%',
    top: '20%',
  },
  image: {
    width: '100%', // Ajuste la largeur à la taille de la colonne
    height: '100%', // Ajuste la hauteur à la taille de la colonne
    resizeMode: 'cover',
  },
  formContainer: {
    width: '50%', // Ajuste la largeur à la taille de la colonne
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'grey',
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
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUp;
