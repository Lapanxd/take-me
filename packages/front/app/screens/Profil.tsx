import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const logo = require('../../assets/images/logooo.png');
const screenWidth = Dimensions.get('window').width;

export const Profil = () => {
  const isMobile = screenWidth <= 768;
  const logoWidth = isMobile ? screenWidth * 0.2 : screenWidth * 0.1; // 20% pour les mobiles, 10% pour les tablettes (ajustez selon vos besoins)
  const route = useRoute();
  // const userMail = route.params.mail; // Récupérez le mail depuis les paramètres de la route

  const navigate = useNavigation() as any;

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  // const [email, setEmail] = useState(userMail);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [ville, setVille] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image source={logo} style={styles.logo} />

        <TextInput
          style={styles.inputBar}
          placeholder="Recherchez un objet"
          placeholderTextColor="rgba(128, 128, 128, .5)"
        />
      </View>
      <View
        style={[
          styles.form,
          isMobile && styles.centerForm,
          isMobile ? styles.centerForm : styles.rightForm,
        ]}
      >
        <Text style={styles.title}>Vos informations</Text>

        <View style={styles.inlineInput}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nom</Text>
            <TextInput
              style={styles.input}
              placeholder="Nom "
              placeholderTextColor="rgba(128, 128, 128, .5)"
              onChangeText={(text) => setNom(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Prénom</Text>
            <TextInput
              style={styles.input}
              placeholder="Prénom"
              placeholderTextColor="rgba(128, 128, 128, .5)"
              onChangeText={(text) => setPrenom(text)}
            />
          </View>
        </View>
        <Text style={styles.label}>Adresse e-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="user@gmail.com"
          placeholderTextColor="rgba(128, 128, 128, .5)"
          // onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.label}>Ville</Text>
        <TextInput
          style={styles.input}
          placeholder="Bordeaux"
          placeholderTextColor="rgba(128, 128, 128, .5)"
          onChangeText={(text) => setVille(text)}
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Sauvegarder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  nav: {
    position: 'absolute',
    backgroundColor: 'grey',
    width: '100%',
    height: '10%',
  },

  inputBar: {
    position: 'absolute',
    top: '30%',
    left: '20%',
    width: '60%',
    height: '40%',
    borderRadius: 7,
    backgroundColor: 'white',
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
    position: 'absolute',
    top: '40%',
    width: 80,
    height: 20,
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
});

export default Profil;
