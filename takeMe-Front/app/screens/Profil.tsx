import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { ActionSheetIOS } from 'react-native';
const defaultUser = require("../../assets/images/default_user.png")
const logoo = require("../../assets/images/logoo.PNG")

export const Profil = ({ route }) => {
  const { nom, prenom, username, email, phone } = route.params;
  
  const [nomProfil, setnom] = useState(nom);
  const [prenomProfil, setPrenom] = useState(prenom);
  const [usernameProfil, setUsername] = useState(username);
  const [emailCompte, setEmail] = useState(email);
  const [phoneCompte, setPhone] = useState(phone);
  
  
  const navigation = useNavigation() as any;
  
  function Return() {
    navigation.navigate("Connect")
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
  
  const [selectedOption, setSelectedOption] = useState<'Profil' | 'Compte'>('Profil');

  
  return (
    <View style={styles.container}>

      {/* Barre de navigation */}
      <View style={styles.nav}>
          <TouchableOpacity style={styles.btnLogo} onPress={Return}>
        <Image source={logoo} style={styles.logo} resizeMode='contain'/>
      </TouchableOpacity>

      <TextInput style={styles.searchBar}
      placeholder='Rechercher un objet'
      placeholderTextColor={'rgba(128, 128, 128, .5)'}></TextInput>

        <TouchableOpacity style={styles.btnAjout}>
          <Text style={styles.txt_ajt_nav}>Ajouter un objet</Text>
        </TouchableOpacity>

      </View>

        
        {/* Barre du formulaire*/}
      <View style={styles.navForm}>
        <Text style={styles.titreNav1}> Tableau de bord</Text>
        <Text style={styles.titreNav2}> Compte & profil</Text>
      </View>

      {/* formulaire tableau de bord */}
    <View style={styles.form_tbl_bord}>

    <View style={styles.section1_tbl_bord}>
      <Text style={styles.titre_tle_bord}>Compte & Profil</Text>
        
        {image ? (
          <Image source={{ uri: image }} style={styles.profileImage_Bord} />
        ) : (
          <Image source={defaultUser} style={styles.profileImage_Bord} />
      )}
        <Text style={styles.titre}>{username} </Text>
        <TouchableOpacity style={styles.logoutBtn}>
            <Icon name="sign-out" size={20} color='#212121' style={styles.logoutIcon}></Icon>
            
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
          <Text style={styles.btn_pTxt}>Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.compteBtn} onPress={() => setSelectedOption('Compte')}>
          <Text style={styles.btn_cTxt}>Compte</Text>
        </TouchableOpacity>
      

        {/* formulaire Compte & Profil */}
      {selectedOption === 'Profil' && (
      <View style={styles.profilView}>

      <View style={styles.imgView}>
        {image ? 
        (
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
        </View>

       
        </View>
      )}

        {/* formulaire Compte */}
  {selectedOption === 'Compte' && (
    <View style={styles.compteView}>
      
      <View style={styles.field}>
          <Text>Email</Text>
        <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor='rgba(128, 128, 128, .5)'
        onChangeText={(text) => setEmail(text)}
        value={emailCompte}
        />
        
          <Text>Numéto de téléphone</Text>
        <TextInput
        style={styles.input}
        placeholder='06 ** ** ** **'
        placeholderTextColor='rgba(128, 128, 128, .5)'
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
    position:'relative',
    width: '100%',
    height: '10%',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.2)',
  },

  navForm:
  {
      position:'relative',
      width: '100%',
      height: '8%',
      backgroundColor: '#212121',
      boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.2)',
  },

  titreNav1:
  {
    position:'absolute',
    marginLeft:'10%',
    color:'white',
    paddingTop:15,
    fontSize:18
  },

  titreNav2:
  {
    position:'absolute',
    marginLeft:'60%',
    color:'white',
    paddingTop:15,
    fontSize:18


  },

  
  logo:
  {
    position: 'absolute',
    width:220,
    height: 50,
  },

  
  
  /* Formulaires*/
  formProfil: {
    position:'absolute',
    marginLeft: '30%',
    marginTop:'9%',
    backgroundColor: 'white',
    width: '70%',
    height: '100%',
    padding: 20,
    borderLeftWidth: 1,
    borderColor:'#FF9900'
  },
  
  form_tbl_bord:
  {
    position:'absolute',
    width:'30%',
    height:'100%',
    marginTop:'9%'
    
  },
  
  field: {
    
    position: 'absolute',
    marginTop:'20%',
    marginLeft:'35%',
    padding: 10,
  },

  section1_tbl_bord:
  {
    width:'100%',
    height:'30%',
    borderBottomWidth:1,
    borderBottomColor:'#FF9900'
  },

  section2_tbl_bord:
  {
    width:'100%',
    height:'70%',
    borderBottomWidth:1,
  },
  
  /* Textes*/
  titre_tle_bord:
  {
    position:'absolute',
    marginTop:'22%',
    marginLeft:'10%',
    fontFamily:'Calibri',
    fontWeight:'bold',
    fontSize:16,
  },
  
  btn_pTxt:
  {
    fontSize:20,
    paddingVertical:5,
    color:'#FFFFFF',
    alignSelf:'center',
    justifyContent:'center',
  },

  btn_cTxt:
  {
    fontSize:20,
    paddingVertical:5,
    color:'#FFFFFF',
    alignSelf:'center',
    justifyContent:'center',
  },
  
  txt_btn_img:
  {
    fontSize:18,
    alignSelf:'center',
    justifyContent:'center',
    paddingVertical:2,
    color:'#FFFFFF'
  },
  
  titre: {
    position:'absolute',
    marginTop: '30%',
    marginLeft: '10%',
    marginBottom: '5%',
    fontSize: 16,
    
  },
  
  label: {
    position: 'absolute',
    width:200,
    fontSize: 16,
    fontWeight: 'bold',
    
    
  },
  
  txtBtn: {
    color: 'white',
    textAlign: 'center',
  },
  
  info: {
    position:'relative',
    marginLeft:'80%',
    fontSize: 16,
    width:50,
  },

  txtLogout:
  {
    position:'relative',
    marginLeft:'25%'
  },
  
  txt_section2:
  {
    fontSize:16,
  },

  txt_ajt_nav:
  {
    alignSelf:'center',
    justifyContent:'center',
    color:'#FFFFFF'
  },
  
  /* Champs de texte*/
  searchBar:
  {
    position:'relative',
    width:'40%',
    height:'50%',
    marginTop:0,
    marginLeft: '30%',
    borderRadius: 7,
    padding:8,
    backgroundColor:'#D2D2D2'


  },

  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 7,
    borderColor:'rgba(128, 128, 128, .5)',
    padding: 10,
    marginBottom:10,
    marginTop: 10,
  },
  
  /* Boutons*/
  profilBtn:
  {
    position: 'relative',
    marginLeft: '30%',
    marginTop:'2%',
    backgroundColor:'#212121',
    borderRadius:7,
    width:'12%',
    height:'5%',
  },

  btnLogo:{
    
    position: 'relative',
    width: 5,
    height: 5,
    marginLeft:50,
    marginTop:15
    
  },
  
  compteBtn:
  {
    position: 'absolute',
    marginLeft: '60%',
    marginTop:'2%',
    backgroundColor:'#212121',
    borderRadius:7,
    width:'12%',
    height:'5%',
  },
  
  logoutBtn:
  {
    width:'25%',
    marginTop:'38%',
    marginLeft:'10%',
  },
  
  logoutIcon:
  {
    position:'absolute'
  },

  accueilBtn:
  {
    position:'relative',
    width:'12%',
    marginTop:'7%',
    marginLeft:'10%',

  },

  annonceBtn:
  {
    position:'relative',
    width:'32%',
    marginTop:'7%',
    marginLeft:'10%',
  },

  ajoutBtn:
  {
    position:'relative',
    width:'26%',
    marginTop:'7%',
    marginLeft:'10%',
  },

  btnFavori:
  {
    position:'relative',
    width:'18%',
    marginTop:'7%',
    marginLeft:'10%',
  },

  btnAide:
  {
    position:'relative',
    width:'21%',
    marginTop:'7%',
    marginLeft:'10%',
  },

  btnAjout:
  {
    position:'absolute',
    width:'10%',
    height:'50%',
    paddingVertical:9,
    marginLeft:'72%',
    marginTop:'1.4%',
    backgroundColor:'#212121',
    borderRadius: 7,
  },

  /* Images & logo*/
  imgDownload:
  {
     backgroundColor: '#212121',
    width: '15%',
    height: 30,
    position:'absolute',
    marginLeft:'45%',
    marginTop:'10%',
    borderRadius: 5
  },


  profileImage_Bord:
  {
    position:'absolute',
    width: 70,
    height: 70,
    marginTop:'5%',
    marginLeft:'10%',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#FF9900',
  },

  profilView:
  {

  },

  compteView:
  {

  },

  
  imgView: 
  {
    backgroundColor:'grey',
    
  },
  
  profileImage:{
    position:'absolute',
    width: 100,
    height: 100,
    marginTop:'5%',
    marginLeft:'33%',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#FF9900',
  },


  

  
  
});
  
export default Profil;
