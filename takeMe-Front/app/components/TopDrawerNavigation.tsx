import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation, NavigationProp } from '@react-navigation/core'
import DrawerMenuIcon from '../icons/DrawerMenuIcon'
import { RootStackParams } from 'app/navigators/MenuNavigator'
import { DrawerActions } from '@react-navigation/native';


const TopDrawerNavigation = () => {
    // const navigation = useNavigation<NavigationProp<RootStackParams>>();
    const navigation = useNavigation()

    return <View style={styles.container}>
        <TouchableHighlight style={styles.backButton} underlayColor="#f0ddcc" onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
        }}>
            <DrawerMenuIcon color="#333" size={20} />
        </TouchableHighlight>
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
    }
})

export default TopDrawerNavigation