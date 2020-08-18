import React, { useState } from 'react'
import {
    View, Image, ImageBackground, Text, TextInput,
    KeyboardAvoidingView, Platform, Modal, TouchableOpacity
} from 'react-native'
import logo from '../../assets/images/logo.png'
import background from '../../assets/images/background.png'
import { useAuth } from '../../contexts/auth'
import styles from './styles'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({ visible: false, message: "" })
    const { signed, signIn } = useAuth()

    function handleSignIn() {
        signIn(email, password)
        if (!signed) {
            setError({ visible: true, message: "Erro ao entrar, tente novamente." })
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={
                Platform.OS === 'ios'
                ? 'padding'
                : undefined
            }>
            <Modal
                animationType="fade"
                transparent={true}
                visible={error.visible}>
                <View style={styles.modal}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalTitle}>Algo deu errado...</Text>
                        <Text style={styles.modalMessage}>{error.message}</Text>
                        <TouchableOpacity 
                            style={styles.modalButton}
                            activeOpacity={0.5}
                            onPress={() => setError({ visible: false, message: "" })}>
                            <Text style={styles.modalButtonText}>Entendi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
                    <TouchableOpacity activeOpacity={0.5}>
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
                <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login