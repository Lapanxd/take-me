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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { authService } from 'app/core/services/api/auth.service';
import { navigate } from 'app/navigators';
const background = require('../../assets/images/bg.jpg');
const logo = require('../../assets/images/logooo.png');
const screenWidth = Dimensions.get('window').width;

export const Inscription = () => {
  const isMobile = screenWidth <= 768;
  const navigate = useNavigation() as any;

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nomError, setNomError] = useState('');
  const [prenomError, setPrenomError] = useState('');
  const [mailError, setMailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  async function inscription() {
    setNomError('');
    setPrenomError('');
    setMailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    if (!nom) {
      setNomError('Nom requis');

      return;
    }

    if (!prenom) {
      setPrenomError('Prénom requis');

      return;
    }

    if (!mail) {
      setMailError('Adresse mail requis');
    } else if (!isEmailValid(mail)) {
      setMailError('Adresse mail non valide');

      return;
    }

    if (!password) {
      setPasswordError('Mot de passe requis');

      return;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Confirmation de mot de passe requis');

      return;
    }

    if (nom && prenom && mail) {
      if (password && password === confirmPassword) {
        // Inscription réussie
        //navigate.navigate('Connect');
        console.log(nom, prenom, mail, password);

        const user = await authService.signUp({
          firstname: prenom,
          lastname: nom,
          email: mail,
          password: password,
          city: 'Bordeaux',
        });

        console.log(user);
        //alert('Inscription réussie');
      } else {
        setPasswordError('Les mots de passe ne correspondent pas');
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

export default Inscription;
