import React, { useState, useEffect, useContext } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import landingImage from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import logout from '../../assets/images/icons/logout.png'
import api from '../../services/api'
import AuthContext from '../../contexts/auth'
import styles from './styles'

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0)
    const { user, signOut } = useContext(AuthContext)
    const { navigate } = useNavigation()

    useEffect(() => {
        api.get('/connections')
            .then(response => setTotalConnections(response.data.total))
            .catch(err => console.log(err))
    })

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses')
    }

    function handleNavigateToStudyPage() {
        navigate('Study')
    }

    return (
        <>
            <View style={styles.topContainer}>
                <View style={styles.header}>
                    <View style={styles.user}>
                        <Image source={{ uri: user?.avatar || "https://api.adorable.io/avatars/220/abott@adorable.png" }} style={styles.avatar}/>
                        <Text style={styles.username}>{user ? user.name : ""}</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.logout}
                        onPress={signOut}>
                        <Image source={logout}/>
                    </TouchableOpacity>
                </View>
                <Image source={landingImage} style={styles.banner}/>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.title}>
                    Seja bem-vindo, {'\n'}
                    <Text style={styles.titleBold}>O que deseja fazer?</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton 
                        style={[styles.button, styles.buttonPrimary]}
                        onPress={handleNavigateToStudyPage}>
                        <Image source={studyIcon}/>
                        <Text style={styles.buttonText}>Estudar</Text>
                    </RectButton>
                    <RectButton 
                        style={[styles.button, styles.buttonSecondary]}
                        onPress={handleNavigateToGiveClassesPage}>
                        <Image source={giveClassesIcon}/>
                        <Text style={styles.buttonText}>Dar aulas</Text>
                    </RectButton>
                </View>

                <Text style={styles.totalConnections}>
                    Total de {totalConnections} conexões já realizadas {' '}
                    <Image source={heartIcon} />
                </Text>
            </View>
        </>
    )
}

export default Landing