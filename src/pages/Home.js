import React, { Component } from 'react';
import {View,Text,Image,Dimensions, TouchableOpacity,ImageBackground, ScrollView} from 'react-native';
import styles from '../AppStyles';
import firebase from 'firebase';

class UserAction extends Component{
  render(){
    return(
      <TouchableOpacity style={styles.actionBox}>
        <Text style={styles.insideText}>{this.props.text}</Text>
        <Image style={styles.imgAction} source={this.props.imgUri}/>
      </TouchableOpacity>

    );
  }
}
export default class Home extends Component{

  constructor(props){
    super(props);
    this.state = {
      balance: 'Loading ...',
      balanceAnimation: '',
      helloMsg: '',
      sign: '',
    }

    var firebaseConfig = {
      apiKey: "AIzaSyB3n4ZzgBbG8cB5qOmBG4vjuXIJST28nAc",
      authDomain: "xpbank-2019.firebaseapp.com",
      databaseURL: "https://xpbank-2019.firebaseio.com",
      projectId: "xpbank-2019",
      storageBucket: "xpbank-2019.appspot.com",
      messagingSenderId: "149084666438",
      appId: "1:149084666438:web:362f355bd454b5924ce847",
      measurementId: "G-SJ437D3DGF"

      
    };
    if (!firebase.apps.length){ 
      firebase.initializeApp(firebaseConfig);
    }

    var userId = '1';

    firebase.database().ref("users/" + userId + "/username").once('value', (snapshot) => {
      let state = this.state;
      state.username = snapshot.val();
      this.setState(state);

    });


    firebase.database().ref("users/" + userId + "/balance").on('value', (snapshot) => {
      if(this.state.username != 'undefined'){
        this.state.helloMsg = 'Hello, ' + this.state.username + '!';
      }
      this.state.sign = '$';
      let state = this.state;
      state.balance = snapshot.val();
      this.setState(state);
    });

  }

  
  
  render(){
    return(
      <ImageBackground source={require('../imgs/bg.png')} imageStyle= {{opacity: 0.5}} style={styles.bg} >
      
      <ScrollView style={styles.ScrollView}> 

      <View style={styles.containerHome}>
          <View style={styles.containerTop}>
              <View style={styles.logoBox}>
                <Image style={styles.logo} source={require('../imgs/xpbank.png')}/> 
              </View>

              <View style={styles.balanceBox}>
                <Text style={styles.helloText}>{this.state.helloMsg}</Text>
                <Text style={styles.balanceValue}>{this.state.sign}{this.state.balance}</Text>
                <Text style={styles.balanceText}>CURRENT BALANCE</Text>
              </View>
          </View>

          <View style={styles.itemBox}>

                <View style={styles.centerColumn}> 
                    <UserAction text={"SAVINGS"} imgUri={require('../imgs/savings.png')}></UserAction>
                    <UserAction text={"SPENDING"} imgUri={require('../imgs/spending.png')}></UserAction>
                    <UserAction text={"TRANSFER"} imgUri={require('../imgs/transfer.png')}></UserAction>
                    <UserAction text={"PAY"} imgUri={require('../imgs/pay.png')}></UserAction>
                </View>

                <View style={styles.divisor}></View>

                <View style={styles.centerColumn}> 
                    <UserAction text={"BLOCK CARD"} imgUri={require('../imgs/blockcard.png')}></UserAction>
                    <UserAction text={"YIELD"} imgUri={require('../imgs/yield.png')}></UserAction>
                    <UserAction text={"OPTIONS"} imgUri={require('../imgs/options.png')}></UserAction>
                    <UserAction text={"HELP"} imgUri={require('../imgs/help.png')}></UserAction>
                </View>
          </View>

      </View>

            <View style={styles.ftRegister}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.helpText}>Voltar para a área de login</Text>
              </TouchableOpacity>
            </View>

      </ScrollView>
    </ImageBackground> 
    );
  }
}