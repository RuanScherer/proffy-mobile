import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput } from 'react-native'
import AppBar from '../../components/AppBar'
import background from '../../assets/images/background.png'
import { useAuth } from '../../contexts/auth'
import api from '../../services/api'
import Popup from '../../components/Popup'
import { useError } from '../../contexts/error'
import styles from './styles'

interface Error {
    title: string,
    message: string,
    callback?(): void
}

const Profile: React.FC = () => {
    const [avatar, setAvatar] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [bio, setBio] = useState("")
    const [error, setError] = useState<Error>({ title: "", message: "" })
    const { user, signOut } = useAuth()
    const { showError } = useError()

    useEffect(() => {
        showError(false)
        api.get(`users/${user?.id}`)
            .then(response => {
                const { user } = response.data
                setName(user.name)
                setEmail(user.email)
                setAvatar(user.avatar)
                setWhatsapp(user.whatsapp)
                setBio(user.bio)
            })
            .catch(err => {
                console.log(err)
                setError({
                    title: "Algo deu errado...",
                    message: "Erro ao buscar informações do seu perfil, tente novamente."
                })
                showError(true)
            })
    }, [])

    function handleSaveChanges() {
        console.log(user?.id)
        api.put(`users/${user?.id}`, {
            name,
            avatar,
            email,
            whatsapp,
            bio
        }).then(() => {
            setError({
                title: "Sucesso!",
                message: "Você precisa se autenticar novamente para aplicar as alterações do perfil."
            })
            showError(true)
        }).catch(err => {
            console.log(err)
            setError({
                title: "Algo deu errado...",
                message: "Erro ao savlar alterações no seu perfil, tente novamente."
            })
            showError(true)
        })
    }

    return (
        <View style={styles.container}>
            <Popup title={error.title} message={error.message} callback={signOut}/>
            <AppBar backTo="Landing" title="Meu Perfil"/>
            <ScrollView style={styles.scroll}>
                <View style={styles.header}>
                    <Image source={{ uri: avatar || "https://api.adorable.io/avatars/220/abott@adorable.png"}} style={styles.avatar}/>
                    <Text style={styles.username}>{name}</Text>
                </View>
                <View style={ styles.form}>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                        <Text style={styles.formTitle}>Seus dados</Text>

                        <Text style={styles.label}>Nome</Text>
                        <TextInput
                            value={name}
                            onChangeText={text => setName(text)}
                            style={styles.input}
                            placeholder="Nome completo"
                            placeholderTextColor="#C1BCCC"
                        />

                        <Text style={styles.label}>E-mail</Text>
                        <TextInput
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={styles.input}
                            placeholder="E-mail"
                            placeholderTextColor="#C1BCCC"
                        />

                        <Text style={styles.label}>Whatsapp</Text>
                        <TextInput
                            value={whatsapp}
                            onChangeText={text => setWhatsapp(text)}
                            style={styles.input}
                            placeholder="(  ) _ ____-____"
                            placeholderTextColor="#C1BCCC"
                        />

                        <Text style={styles.label}>Bio</Text>
                        <TextInput
                            value={bio}
                            onChangeText={text => setBio(text)}
                            style={styles.input}
                            placeholder="(  ) _ ____-____"
                            placeholderTextColor="#C1BCCC"
                            multiline={true}
                            numberOfLines={5}
                        />
                    </View>

                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.5}
                            onPress={handleSaveChanges}>
                            <Text style={styles.buttonText}>Salvar alterações</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile