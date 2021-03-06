import {StyleSheet} from 'react-native';
//Cor dark legal #292929
export default StyleSheet.create({
    containerTop: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 25,
        width: '100%',
        height: '33%',
    },
    itemBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    centerColumn: {
        alignItems: 'center',
        width: '50%',
        flexDirection: 'column',
    },
    divisor: {
        backgroundColor: '#FFCB2B',
        height: '100%',
        width: '2%',
        borderRadius: 50,
    },
    actionBox: {
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#01E478',
        margin: 5,
        width: 160,
        height: 160,
    },
    insideText: {
        textTransform: 'uppercase',
        marginTop: 10,
        fontSize: 20,
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 0.5,
        fontWeight: 'bold',
    },
    imgAction: { //Imagem
        flex: 1,
        height: 100,
        width: 100,
        resizeMode: 'center',
        margin: 10,
    },
    containerHome: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    helloText: {
        fontSize: 20,
        color: '#FFCB2B',
        fontWeight: 'bold',
        textShadowColor: '#000000',
        textShadowRadius: 0.5,
        
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    ScrollView: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    balanceBox: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        width: '90%',
        height: 150,
        backgroundColor: '#0c070a',
        borderColor: '#01E478',
        borderWidth: 1,
        borderRadius: 5,
    },
    balanceText: {
        padding: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
    },
    balanceValue: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#01E478',
    },
    logoBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 100,   
        resizeMode: 'center',
    },
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
      },
    txtBox: {
        textTransform: 'uppercase',
        backgroundColor: 'white',
        color: 'gray',
        padding: 3,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15,
        width: '92%',
        borderRadius: 10,
        borderColor: '#00E676',
        borderWidth: 1,
    },
    loginBox: {
        marginTop: 15,
        width: '92%',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00E676',
        borderRadius: 10,
        marginBottom: 10,  
    },
    logo: { 
        flex: 1,
        width: '90%',
    },
    ftRegister: {
        width: '100%',
        alignItems: 'center',
        margin: 10,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 30
    },
    helpText: {
        color: 'white',
        fontWeight: '700',
    },
  });