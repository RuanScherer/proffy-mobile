import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import backIcon from '../../assets/images/icons/back.png'
import logo from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

interface AppBarProps {
    title: string,
    backTo: string
}

const AppBar: React.FC<AppBarProps> = ({ backTo, title }) => {
    const { navigate } = useNavigation()

    return (
        <View style={styles.appBar}>
            <TouchableOpacity onPress={() => navigate(backTo)} activeOpacity={0.5}>
                <Image source={backIcon}/>
            </TouchableOpacity>
            <Text style={styles.appBarTittle}>{title}</Text>
            <Image source={logo} style={styles.appBarLogo}/>
        </View>
    )
}

export default AppBar