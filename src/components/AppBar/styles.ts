import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#774DD6',
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingTop: 30,
        borderColor: '#6842C2',
        borderWidth: 1
    },

    appBarTittle: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 14,
        color: '#D4C2FF'
    },

    appBarLogo: {
        resizeMode: 'contain',
        width: 38
    }
})

export default styles