import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Text, ImageBackground, Image } from 'react-native'
import background from '../../assets/images/give-classes-background.png'
import successIcon from '../../assets/images/icons/success.png'
import styles from './styles'

const RegisterSuccess: React.FC = () => {
    const { navigate } = useNavigation()

    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode="contain"
                source={background}
                style={styles.main}>
                <Image source={successIcon} style={styles.icon}/>
                <Text style={styles.title}>Cadastro concluído!</Text>
                <Text style={styles.subtitle}>Agora você faz parte da plataforma Proffy.</Text>
            </ImageBackground>
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.button}
                onPress={() => navigate("Login")}>
                <Text style={styles.buttonText}>Fazer login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterSuccess