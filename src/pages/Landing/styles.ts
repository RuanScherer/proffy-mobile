import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    topContainer: {
        height: '45%',
        width: '100%',
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40
    },

    bottomContainer: {
        height: '55%',
        width: '100%',
        backgroundColor: '#F0F0F7',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#6A6180',
        fontSize: 20,
        lineHeight: 30
    },
    
    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },
    
    buttonPrimary: {
        backgroundColor: '#9871F5'
    },

    buttonSecondary: {
        backgroundColor: '#04D361'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#9C98A6',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 15
    },

    header: {
        width: '100%',
        marginTop: 30,
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    avatar: {
        borderRadius: 30,
        height: 40,
        width: 40,
        marginRight: 10
    },

    username: {
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
    },

    logout: {
        padding: 8,
        height: 45,
        width: 45,
        borderRadius: 8,
        backgroundColor: '#774DD6',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles