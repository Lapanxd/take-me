import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';

export const SignUp = () => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 1130;

  return (
    <ImageBackground source={require('../../assets/images/bg.jpg')} style={styles.container}>
      <View style={isSmallScreen ? styles.columnContainerSmall : styles.columnContainerLarge}>
        {/* Colonne de gauche avec l'image */}

        {/* Colonne de droite avec le formulaire */}
        <View style={isSmallScreen ? styles.rightColumnSmall : styles.rightColumnLarge}>
          <View style={styles.formContainer}>
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
            <TouchableOpacity style={styles.button}>
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
