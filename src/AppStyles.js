import {StyleSheet} from 'react-native';
import { red } from 'ansi-colors';

export default StyleSheet.create({
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
        height: 200,
        backgroundColor: 'white',
        borderColor: '#01E478',
        borderWidth: 1,
        borderRadius: 5,
    },
    balanceText: {
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    balanceValue: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#01E478',
    },
    clickArea:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '90%',
    },
    clickBox: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#01E478',
        height: 150,
        width: 150,
    },
    containerHome: {
        flex: 1,
        marginTop: 25,
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    logoBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 100,     
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
        margin: 10,
        width: '90%',
        borderRadius: 10,
        borderColor: '#00E676',
        borderWidth: 1,
    },
    btnBox: {
        width: '90%',
        flexDirection: 'row',
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 15,
        backgroundColor: '#00E676',
        height: 50,
        width: '50%',
    },
    logo: { 
        flex: 1,
        width: '90%',
        resizeMode: 'center',
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