import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const defaultUser = require('../../assets/images/default_user.png');
const logoo = require('../../assets/images/logoo.PNG');

export const Profil = ({ route }) => {
  const { nom, prenom, username, email, phone } = route.params;

  const [nomProfil, setnom] = useState(nom);
  const [prenomProfil, setPrenom] = useState(prenom);
  const [usernameProfil, setUsername] = useState(username);
  const [emailCompte, setEmail] = useState(email);
  const [phoneCompte, setPhone] = useState(phone);

  const navigation = useNavigation() as any;

  function Return() {
    navigation.navigate('Connect');
  }

  function handleProfil() {
    navigation.navigate('Profil', { nom: nom, prenom: prenom, username: username, email: email });
  }

  const [image, setImage] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickImageCamera = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    if (cameraPermission.status === 'granted') {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
      navigation.navigate('Connect');
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
    }
  };

  /*const actions = ['Prendre une nouvelle photo', 'Sélectionner une photo', 'Supprimer la photo', 'Annuler'];

  const showActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: actions,
        cancelButtonIndex: actions.length - 1,
        
        title: 'Modifier l\'image de profile',
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          pickImageCamera();
          
        } else if (buttonIndex === 1) {
          
          pickImage();
          
        } else if (buttonIndex === 2) {
          
          setImage('');
        }

      }
    );
  };
  */

  const [selectedOption, setSelectedOption] = useState<'Profil' | 'Securite'>('Profil');
  const [showOptions, setShowOptions] = useState(false);

  return (
    <View style={styles.container}>
      {/* Barre de navigation */}
      <View style={styles.nav}>
        <TouchableOpacity style={styles.btnLogo} onPress={Return}>
          <Image source={logoo} style={styles.logo} resizeMode="contain" />
        </TouchableOpacity>

        <TextInput
          style={styles.searchBar}
          placeholder="Rechercher un objet"
          placeholderTextColor={'rgba(128, 128, 128, .5)'}
        ></TextInput>

        <TouchableOpacity style={styles.btnAjout}>
          <Text style={styles.txt_ajt_nav}>Ajouter un objet</Text>
        </TouchableOpacity>

        {image ? (
          <Image source={{ uri: image }} style={styles.profileImage_nav} />
        ) : (
          <Image source={defaultUser} style={styles.profileImage_nav} />
        )}
        <TouchableOpacity style={styles.btnMenu} onPress={() => setShowOptions(!showOptions)}>
          <Icon name="caret-down" size={25} color="black"></Icon>
        </TouchableOpacity>

        {showOptions && (
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.option}>
              <Text>Gérer mes annonces</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionF}>
              <Text>Mes favoris</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionC} onPress={handleProfil}>
              <Text>Compte</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
              <Text>Centre d'aide</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={handleLogout}>
              <Text>Déconnexion</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Barre du formulaire*/}
      <View style={styles.navForm}>
        <Text style={styles.titreNav1}> Tableau de bord</Text>
        <Text style={styles.titreNav2}> Compte & sécurité</Text>
      </View>

      {/* formulaire tableau de bord */}
      <View style={styles.form_tbl_bord}>
        <View style={styles.section1_tbl_bord}>
          <Text style={styles.titre_tle_bord}>Compte & Sécurité</Text>

          {image ? (
            <Image source={{ uri: image }} style={styles.profileImage_Bord} />
          ) : (
            <Image source={defaultUser} style={styles.profileImage_Bord} />
          )}
          <Text style={styles.titre}>{username} </Text>
          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Icon name="sign-out" size={20} color="#212121" style={styles.logoutIcon}></Icon>

            <Text style={styles.txtLogout}>Déconnexion</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section2_tbl_bord}>
          <TouchableOpacity style={styles.accueilBtn}>
            <Text style={styles.txt_section2}>Accueil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.annonceBtn}>
            <Text style={styles.txt_section2}>Gérer mes annonces</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ajoutBtn}>
            <Text style={styles.txt_section2}>Ajouter un objet</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnFavori}>
            <Text style={styles.txt_section2}>Mes favoris</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnAide}>
            <Text style={styles.txt_section2}>Centre d'aide</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* formulaire Compte & Profil */}
      <View style={styles.formProfil}>
        <TouchableOpacity style={styles.profilBtn} onPress={() => setSelectedOption('Profil')}>
          <Text style={styles.btn_pTxt}>Compte</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.compteBtn} onPress={() => setSelectedOption('Securite')}>
          <Text style={styles.btn_cTxt}>Sécurité</Text>
        </TouchableOpacity>

        {/* formulaire Profil */}
        {selectedOption === 'Profil' && (
          <View style={styles.profilView}>
            <View style={styles.imgView}>
              {image ? (
                <Image source={{ uri: image }} style={styles.profileImage} />
              ) : (
                <Image source={defaultUser} style={styles.profileImage} />
              )}

              <TouchableOpacity style={styles.imgDownload} onPress={pickImage}>
                <Text style={styles.txt_btn_img}>Télécharger</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.field}>
              <Text>Nom</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setnom(text)}
                value={nomProfil}
              />

              <Text>Prénom</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setPrenom(text)}
                value={prenomProfil}
              />

              <Text>Nom d'utilisateur</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setUsername(text)}
                value={usernameProfil}
              />

              <Text>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="rgba(128, 128, 128, .5)"
                onChangeText={(text) => setEmail(text)}
                value={emailCompte}
              />
            </View>
          </View>
        )}

        {/* formulaire Compte */}
        {selectedOption === 'Securite' && (
          <View style={styles.compteView}>
            <Text style={styles.txtPass}>Mettre à jours mon mot de passe</Text>

            <View style={styles.field}>
              <Text>Mot de passe</Text>
              <TextInput
                style={styles.input}
                placeholder="********"
                placeholderTextColor="rgba(128, 128, 128, .5)"
                onChangeText={(text) => setPhone(text)}
                value={phoneCompte}
              />

              <Text>Confirmer le mot de passe</Text>
              <TextInput
                style={styles.input}
                placeholder="********"
                placeholderTextColor="rgba(128, 128, 128, .5)"
                onChangeText={(text) => setPhone(text)}
                value={phoneCompte}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  /* Conteneur Principal*/
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  /* Barres de navigation*/
  nav: {
    position: 'relative',
    width: '100%',
    height: '10%',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 2,
  },

  navForm: {
    position: 'relative',
    width: '100%',
    height: '8%',
    backgroundColor: '#212121',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1,
  },

  titreNav1: {
    position: 'absolute',
    marginLeft: '10%',
    color: 'white',
    paddingTop: 15,
    fontSize: 18,
  },

  titreNav2: {
    position: 'absolute',
    marginLeft: '60%',
    color: 'white',
    paddingTop: 15,
    fontSize: 18,
  },

  logo: {
    position: 'absolute',
    width: 220,
    height: 50,
  },

  /* Formulaires*/
  formProfil: {
    position: 'absolute',
    marginLeft: '30%',
    marginTop: '9%',
    backgroundColor: 'white',
    width: '70%',
    height: '100%',
    padding: 20,
    borderLeftWidth: 1,
    borderColor: '#FF9900',
  },

  form_tbl_bord: {
    position: 'absolute',
    width: '30%',
    height: '100%',
    marginTop: '9%',
  },

  field: {
    position: 'absolute',
    marginTop: '20%',
    marginLeft: '35%',
    padding: 10,
  },

  section1_tbl_bord: {
    width: '100%',
    height: '30%',
    borderBottomWidth: 1,
    borderBottomColor: '#FF9900',
  },

  section2_tbl_bord: {
    width: '100%',
    height: '70%',
    borderBottomWidth: 1,
  },

  optionsContainer: {
    position: 'absolute',
    top: '100%', // Ajustez la position verticale pour aligner les options sous l'icône
    marginLeft: '87%', // Alignez les options à droite
    width: '10%',
    backgroundColor: '#EAEAEA',
    borderRadius: 7,
    shadowRadius: 2,
    zIndex: 4,
  },

  option: {
    padding: 5, // Ajustez la marge interne pour l'apparence de chaque option
  },

  optionF: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(128, 128, 128, .5)',
  },

  optionC: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(128, 128, 128, .5)',
  },

  /* Textes*/
  titre_tle_bord: {
    position: 'absolute',
    marginTop: '22%',
    marginLeft: '10%',
    fontFamily: 'Calibri',
    fontWeight: 'bold',
    fontSize: 16,
  },

  btn_pTxt: {
    fontSize: 20,
    paddingVertical: 4,
    color: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  btn_cTxt: {
    fontSize: 20,
    paddingVertical: 5,
    color: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  txt_btn_img: {
    fontSize: 18,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    color: '#FFFFFF',
  },

  titre: {
    position: 'absolute',
    marginTop: '30%',
    marginLeft: '10%',
    marginBottom: '5%',
    fontSize: 16,
  },

  label: {
    position: 'absolute',
    width: 200,
    fontSize: 16,
    fontWeight: 'bold',
  },

  txtBtn: {
    color: 'white',
    textAlign: 'center',
  },

  info: {
    position: 'relative',
    marginLeft: '80%',
    fontSize: 16,
    width: 50,
  },

  txtLogout: {
    position: 'relative',
    marginLeft: '25%',
  },

  txt_section2: {
    fontSize: 16,
  },

  txt_ajt_nav: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
  },

  txtPass: {
    position: 'absolute',
    marginTop: '10%',
    marginLeft: '35%',
    fontSize: 18,
  },

  /* Champs de texte*/
  searchBar: {
    position: 'relative',
    width: '40%',
    height: '50%',
    marginTop: 0,
    marginLeft: '30%',
    borderRadius: 7,
    padding: 8,
    backgroundColor: '#D2D2D2',
  },

  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'rgba(128, 128, 128, .5)',
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },

  /* Boutons*/
  profilBtn: {
    position: 'relative',
    marginLeft: '30%',
    marginTop: '2%',
    backgroundColor: '#212121',
    borderRadius: 7,
    width: '12%',
    height: '5%',
  },

  btnLogo: {
    position: 'relative',
    width: 5,
    height: 5,
    marginLeft: 50,
    marginTop: 15,
  },

  compteBtn: {
    position: 'absolute',
    marginLeft: '60%',
    marginTop: '2%',
    backgroundColor: '#212121',
    borderRadius: 7,
    width: '12%',
    height: '5%',
  },

  logoutBtn: {
    width: '25%',
    marginTop: '38%',
    marginLeft: '10%',
  },

  logoutIcon: {
    position: 'absolute',
  },

  btnMenu: {
    position: 'absolute',
    marginLeft: '94%',
    marginTop: '3%',
  },

  accueilBtn: {
    position: 'relative',
    width: '12%',
    marginTop: '7%',
    marginLeft: '10%',
  },

  annonceBtn: {
    position: 'relative',
    width: '32%',
    marginTop: '7%',
    marginLeft: '10%',
  },

  ajoutBtn: {
    position: 'relative',
    width: '26%',
    marginTop: '7%',
    marginLeft: '10%',
  },

  btnFavori: {
    position: 'relative',
    width: '18%',
    marginTop: '7%',
    marginLeft: '10%',
  },

  btnAide: {
    position: 'relative',
    width: '21%',
    marginTop: '7%',
    marginLeft: '10%',
  },

  btnAjout: {
    position: 'absolute',
    width: '10%',
    height: '50%',
    paddingVertical: 9,
    marginLeft: '72%',
    marginTop: '1.4%',
    backgroundColor: '#212121',
    borderRadius: 7,
  },

  /* Images & logo*/
  imgDownload: {
    backgroundColor: '#212121',
    width: '15%',
    height: 30,
    position: 'absolute',
    marginLeft: '45%',
    marginTop: '10%',
    borderRadius: 5,
  },

  profileImage_Bord: {
    position: 'absolute',
    width: 70,
    height: 70,
    marginTop: '5%',
    marginLeft: '10%',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#FF9900',
  },

  profilView: {},

  compteView: {},

  imgView: {
    backgroundColor: 'grey',
  },

  profileImage: {
    position: 'absolute',
    width: 100,
    height: 100,
    marginTop: '5%',
    marginLeft: '33%',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#FF9900',
  },

  profileImage_nav: {
    position: 'absolute',
    width: 50,
    height: 50,
    marginTop: '1%',
    marginLeft: '90%',
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#FF9900',
  },
});

export default Profil;
