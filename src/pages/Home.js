import React, { Component } from 'react';
import {View,Text,Image,TextInput, TouchableOpacity,ImageBackground, ScrollView} from 'react-native';
import styles from '../AppStyles';

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
          <TouchableOpacity>
          <View style={styles.clickBox}></View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.clickBox}></View>
          </TouchableOpacity>
        </View>

        <View style={styles.clickArea}>
          <TouchableOpacity>
          <View style={styles.clickBox}></View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.clickBox}></View>
          </TouchableOpacity>
        </View>

        <View style={styles.clickArea}>
          <TouchableOpacity>
          <View style={styles.clickBox}></View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.clickBox}></View>
          </TouchableOpacity>
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