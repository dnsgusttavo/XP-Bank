import React, { Component } from 'react';
import {View,Text,Image,TextInput, TouchableOpacity,ImageBackground, ScrollView} from 'react-native';
import styles from '../AppStyles';

class UserAction extends Component{
  render(){
    return(
      <TouchableOpacity>
        <View style={styles.clickBox}>
          <Text style={styles.insideText}>{this.props.text}</Text>
          <Image style={styles.imgAction} source={this.props.imgUri}/>
        </View>
      </TouchableOpacity>

    );
  }
}
export default class Login extends Component{
  render(){
    return(
      <ImageBackground source={require('../imgs/bg.jpg')} imageStyle= {{opacity: 0.07}} style={styles.bg} resizeMode={"repeat"}>
      <ScrollView style={styles.ScrollView}> 
      <View style={styles.containerHome}>
        <View style={styles.logoBox}>
          <Image style={styles.logo} source={require('../imgs/xpbank.png')}/> 
        </View>
      
        <View style={styles.balanceBox}>
          <Text style={styles.balanceText}>CURRENT BALANCE</Text>
          <Text style={styles.balanceValue}>$97814.87</Text>
        </View>

        <View style={styles.clickArea}>
          <UserAction text={"SAVINGS"} imgUri={require('../imgs/savings.png')}></UserAction>
          <UserAction text={"SPENDING"} imgUri={require('../imgs/spending.png')}></UserAction>
        </View>

        <View style={styles.clickArea}>
          <UserAction text={"TRANSFER"} imgUri={require('../imgs/transfer.png')}></UserAction>
          <UserAction text={"PAY"} imgUri={require('../imgs/pay.png')}></UserAction>
        </View>

        <View style={styles.clickArea}>
          <UserAction text={"BLOCK CARD"} imgUri={require('../imgs/blockcard.png')}></UserAction>
          <UserAction text={"YIELD"} imgUri={require('../imgs/yield.png')}></UserAction>
        </View>

        <View style={styles.clickArea}>
          <UserAction text={"OPTIONS"} imgUri={require('../imgs/options.png')}></UserAction>
          <UserAction text={"HELP"} imgUri={require('../imgs/help.png')}></UserAction>
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