import CloseBurgerIcon from 'app/icons/CloseBurgerIcon';
import React, { useState } from 'react';
import { Modal, StyleSheet, Pressable, View, Dimensions } from 'react-native'; // Importez Dimensions depuis 'react-native'
import DrawerMenuIcon from '../icons/DrawerMenuIcon';
import Menu from './Menu';

const TopDrawerNavigation = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade" // Changez l'animation en "slide" ou ce que vous préférez
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Menu onClose={() => setModalVisible(false)} />
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <CloseBurgerIcon color={'black'} size={40} />
          </Pressable>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonbg]}
        onPress={() => setModalVisible(true)}
      >
        <DrawerMenuIcon color={'black'} size={40} />
      </Pressable>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width; // Obtenez la largeur de la fenêtre

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 30,
  },
  modalView: {
    width: windowWidth, // Utilisez la largeur de la fenêtre pour occuper tout l'écran
    height: '100vh',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'flex-end', // Pour positionner le contenu à droite
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 50,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonbg: {
    borderRadius: 80,
    backgroundColor: 'white',
  },
});

export default TopDrawerNavigation;
