import React, { useState, useEffect } from 'react'
import {
    View, Image, ImageBackground, Text, TextInput,
    KeyboardAvoidingView, Platform, Modal, TouchableOpacity
} from 'react-native'
import logo from '../../assets/images/logo.png'
import background from '../../assets/images/background.png'
import { useAuth } from '../../contexts/auth'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import Popup from '../../components/Popup'
import { useError } from '../../contexts/error'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allowSend, setAllowSend] = useState(false)
    const { signed, signIn } = useAuth()
    const { navigate } = useNavigation()
    const { showError } = useError()

    useEffect(() => showError(false), [])

    useEffect(() => {
        if (email && password) {
            setAllowSend(true)
        }
    }, [email, password])

    function handleSignIn() {
        signIn(email, password)
        if (!signed) {
            showError(true)
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={
                Platform.OS === 'ios'
                ? 'padding'
                : undefined
            }>
            <Popup
                title="Algo deu errado..."
                message="Erro ao entrar, tente novamente."
            />
            <View style={styles.banner}>
                <ImageBackground
                    resizeMode="contain"
                    source={background}
                    style={styles.bannerBackground}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.slogan}>
                        Sua plataforma de estudos online.
                    </Text>
                </ImageBackground>
            </View>
            
            <View style={styles.loginForm}>
                <View style={styles.spaced}>
                    <Text style={styles.title}>Fazer Login</Text>
                    <TouchableOpacity 
                        activeOpacity={0.5}
                        onPress={() => navigate('Register')}>
                        <Text style={styles.linkText}>Criar uma conta</Text>
                    </TouchableOpacity>
                </View>
                <TextInput 
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={[styles.input, styles.firstInput]}
                    placeholder="E-mail"
                    placeholderTextColor="#C1BCCC"
                    autoCompleteType="off"
                />
                <TextInput 
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={[styles.input, styles.lastInput]}
                    placeholder="Senha"
                    placeholderTextColor="#C1BCCC"
                    autoCompleteType="off"
                    secureTextEntry={true}
                />
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.text}>Esqueci minha senha</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={[styles.button, allowSend ? {} : styles.disabledButton]}
                    onPress={handleSignIn}
                    disabled={!allowSend}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login