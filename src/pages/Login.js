import React, { Component } from 'react';
import {View,Text,Image,TextInput, TouchableOpacity,ImageBackground} from 'react-native';
import styles from '../AppStyles';

export default class Login extends Component{
  render(){
    return(
      

        <ImageBackground source={require('../imgs/bg.jpg')} imageStyle= {{opacity: 0.07}} style={styles.bg} resizeMode={"repeat"}>
            <View style={styles.container}>
              <View style={styles.logoBox}>
                <Image style={styles.logo} source={require('../imgs/xpbank.png')}/> 
              </View>

              <TextInput style={styles.txtBox} placeholder="USERNAME" placeholderTextColor="#D2D2D2" maxLength={15}/>
              <TextInput style={styles.txtBox} placeholder="PASSWORD" secureTextEntry={true} placeholderTextColor="#D2D2D2" maxLength={15}/>

              <View style={styles.btnBox}>
                <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('Home')}>
                  <Text style={styles.btnText}>LOGIN</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity>
                <Text style={styles.helpText}>Forgot Password? Reset here</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ftRegister}>
              <TouchableOpacity>
                <Text style={styles.helpText}>Not a member? Register now</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          
      
      
    );
  }
}