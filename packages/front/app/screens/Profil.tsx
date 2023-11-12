import React, { useState } from 'react';
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Header } from '../components';
import { userService } from '../core/services/api';

export const Profil = () => {
  const { width } = useWindowDimensions();

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function updateUser() {
    await userService.update();
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
                onChangeText={(text) => setLastname(text)}
                value={lastname}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.inputLabel}>Prénom</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setFirstname(text)}
                value={firstname}
              />
            </View>
          </View>

          <Text style={styles.inputLabel}>Adresse mail</Text>
          <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} value={email} />

          <Text style={styles.inputLabel}>Ville</Text>
          <TextInput style={styles.input} onChangeText={(text) => setCity(text)} value={city} />

          <TouchableOpacity style={styles.button}>
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
            onChangeText={(text) => setFirstname(text)}
            value={firstname}
          />

          <Text style={styles.inputLabel}>Nouveau mot de passe</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFirstname(text)}
            value={firstname}
          />

          <Text style={styles.inputLabel}>Confirmation nouveau mot de passe</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFirstname(text)}
            value={firstname}
          />

          <TouchableOpacity style={styles.button}>
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
