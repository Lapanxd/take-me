import CloseBurgerIcon from '../icons/CloseBurgerIcon';
import React, { useState } from 'react';
import { Modal, StyleSheet, Pressable, View, Dimensions } from 'react-native';
import DrawerMenuIcon from '../icons/DrawerMenuIcon';
import Menu from './Menu';

const TopDrawerNavigation = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Menu onClose={() => setModalVisible(false)} />
          <Pressable onPress={() => setModalVisible(!modalVisible)}>
            <CloseBurgerIcon color={'black'} size={40} />
          </Pressable>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <DrawerMenuIcon color={'black'} size={40} />
      </Pressable>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  modalView: {
    width: windowWidth,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
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
});

export default TopDrawerNavigation;
