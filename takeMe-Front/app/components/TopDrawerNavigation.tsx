import CloseBurgerIcon from 'app/icons/CloseBurgerIcon';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import DrawerMenuIcon from '../icons/DrawerMenuIcon'
import Menu from './Menu'


const TopDrawerNavigation = () => {
    const [modalVisible, setModalVisible] = useState(false);


    return <View style={styles.container}>

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {

                setModalVisible(!modalVisible);
            }}>
            <View >
                <View style={styles.modalView}>
                    <Menu />
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <CloseBurgerIcon color={'white'} size={20} />
                    </Pressable>
                </View>
            </View>
        </Modal>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <DrawerMenuIcon color={'#2196F3'} size={20} />
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    backButton: {
        borderRadius: 8,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});


export default TopDrawerNavigation