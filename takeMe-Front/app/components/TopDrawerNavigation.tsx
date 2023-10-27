import CloseBurgerIcon from 'app/icons/CloseBurgerIcon';
import React, { useState } from 'react';
import { Modal, StyleSheet, Pressable, View } from 'react-native';
import DrawerMenuIcon from '../icons/DrawerMenuIcon'
import Menu from './Menu'


const TopDrawerNavigation = () => {
    const [modalVisible, setModalVisible] = useState(false);


    return <View style={styles.container}>
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { setModalVisible(!modalVisible); }}>
            <View >
                <View style={styles.modalView}>
                    <Menu onClose={() => setModalVisible(false)} /> 
                    <Pressable
                        style={styles.button}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <CloseBurgerIcon color={'black'} size={40} />
                    </Pressable>
                </View>
            </View>
        </Modal>
        <Pressable
            style={[styles.button, styles.buttonbg]}
            onPress={() => setModalVisible(true)}>
            <DrawerMenuIcon color={'black'} size={40} />
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
        width: '420px',
        height: '420px',
        flexDirection: 'row',
        backgroundColor: 'white',
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
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        textAlign: 'center',
    },
});


export default TopDrawerNavigation