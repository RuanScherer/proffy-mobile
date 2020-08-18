import React, { useState, useEffect } from 'react'
import { View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import backIcon from '../../assets/images/icons/back.png'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'
import Popup from '../../components/Popup'
import { useError } from '../../contexts/error'
import styles from './styles'

const Register: React.FC = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [step, setStep] = useState(1)
    const [allowContinue, setAllowContinue] = useState(false)
    const { navigate } = useNavigation()
    const { showError } = useError()

    useEffect(() => {
        if (name) {
            setAllowContinue(true)
        }
    }, [name])

    useEffect(() => {
        if (email && password) {
            setAllowContinue(true)
        }
    }, [email, password])

    function handleRegister() {
        api.post('/users', { name, email, password })
            .then(() => {
                navigate("RegisterSuccess")
            })
            .catch(() => {
                showError(true)
            })
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={
                Platform.OS === 'ios'
                ? 'padding'
                : undefined
            }>
            <Popup
                title="Algo deu errado..."
                message="Erro ao cadastrar-se, tente novamente."
            />
            <View style={styles.header}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigate("Login")}>
                    <Image source={backIcon}/>
                </TouchableOpacity>
                <View style={styles.countersBox}>
                    <View style={[styles.counter, step === 1 ? styles.selectedCounter : {}]}/>
                    <View style={[styles.counter, step === 2 ? styles.selectedCounter : {}]}/>
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Crie sua conta gratuita</Text>
                    <Text style={styles.subtitle}>Basta preencher esses dados e você estará conosco.</Text>
                </View>
                <View>
                    { step === 1 &&
                        <>
                            <Text style={styles.formTitle}>01. Quem é você?</Text>
                            <TextInput
                                value={name}
                                onChangeText={text => setName(text)}
                                style={[styles.input, styles.firstInput, styles.lastInput]}
                                placeholder="Nome completo"
                                placeholderTextColor="#C1BCCC"
                                autoCompleteType="off"
                            />
                            <TouchableOpacity 
                                activeOpacity={0.5}
                                style={[styles.button, allowContinue ? {} : styles.disabledButton]}
                                onPress={() => {
                                    setAllowContinue(false)
                                    setStep(2)
                                }}
                                disabled={!allowContinue}>
                                <Text style={styles.buttonText}>Próximo</Text>
                            </TouchableOpacity>
                        </>
                    }
                    { step === 2 &&
                        <>
                            <Text style={styles.formTitle}>02. E-mail e Senha</Text>
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
                            <TouchableOpacity 
                                activeOpacity={0.5} 
                                style={[styles.button, allowContinue ? {} : styles.disabledButton]}
                                disabled={!allowContinue}
                                onPress={handleRegister}>
                                <Text style={styles.buttonText}>Concluir cadastro</Text>
                            </TouchableOpacity>
                        </>
                    }
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Register