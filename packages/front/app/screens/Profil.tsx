import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { Header } from '../components';
import { userService } from '../core/services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Profil = () => {
  const { width } = useWindowDimensions();

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const userId = await AsyncStorage.getItem('userId');
      const user = await userService.findOne(parseInt(userId));

      setLastname(user.lastname);
      setFirstname(user.firstname);
      setEmail(user.email);
      setCity(user.city);
    };

    fetchData();
  }, []);

  function checkData(): boolean {
    return !(!lastname || !firstname || !email || !city);
  }

  function validatePassword(): boolean {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(newPassword) && newPassword === confirmNewPassword;
  }

  async function updateUser() {
    if (!checkData()) {
      console.log('nope');
      return;
    }
    const result = await userService.updateUser({
      lastname,
      firstname,
      city,
      email,
    });

    if (result) {
    } // do something (alert or idk)
  }

  async function updatePassword() {
    if (!validatePassword()) {
      console.log('prout');
      resetPasswordForm();
      return;
    }

    const result = await userService.updatePassword(oldPassword, newPassword);

    resetPasswordForm();

    if (result) {
      console.log('okeyz');
    } // do something (alert or idk)
  }

  function resetPasswordForm() {
    setOldPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  }

  return (
    <View>
      <Header></Header>

      <View
        style={{
          flexDirection: width > 790 ? 'row' : 'column',
          gap: 50,
          margin: 'auto',
          marginTop: width > 790 ? '10%' : 20,
        }}
      >
        <View style={{ maxWidth: width > 790 ? 353 : 'auto' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 14 }}>
            Mettre à jour mes informations
          </Text>
          <View style={{ flexDirection: 'row', gap: 7 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.inputLabel}>Nom</Text>
              <TextInput
                style={styles.input}
                value={lastname}
                onChangeText={(text) => setLastname(text)}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.inputLabel}>Prénom</Text>
              <TextInput
                style={styles.input}
                value={firstname}
                onChangeText={(text) => setFirstname(text)}
              />
            </View>
          </View>

          <Text style={styles.inputLabel}>Adresse mail</Text>
          <TextInput style={styles.input} value={email} onChangeText={(text) => setEmail(text)} />

          <Text style={styles.inputLabel}>Ville</Text>
          <TextInput style={styles.input} value={city} onChangeText={(text) => setCity(text)} />

          <TouchableOpacity style={styles.button} onPress={updateUser}>
            <Text
              style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold', padding: 16 }}
            >
              Sauvegarder
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ maxWidth: width > 790 ? 353 : 'auto' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 14 }}>
            Mettre à jour mon mot de passe
          </Text>
          <Text style={styles.inputLabel}>Ancien mot de passe</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setOldPassword(text)}
            value={oldPassword}
            secureTextEntry
          />

          <Text style={styles.inputLabel}>Nouveau mot de passe</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setNewPassword(text)}
            value={newPassword}
            secureTextEntry
          />

          <Text style={styles.inputLabel}>Confirmation nouveau mot de passe</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setConfirmNewPassword(text)}
            value={confirmNewPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={updatePassword}>
            <Text
              style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold', padding: 16 }}
            >
              Sauvegarder
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#b0b0b0',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 7,
    height: 47,
    padding: 10,
  },
  inputLabel: { color: '#8a8a8a' },
  button: {
    marginTop: 12,
    backgroundColor: '#212121',
    borderRadius: 7,
  },
});

export default Profil;
