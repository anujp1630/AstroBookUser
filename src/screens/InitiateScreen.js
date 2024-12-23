import { ImageBackground, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../config/Screen'
import { Fonts } from '../assets/style'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { colors } from '../config/Constants1'
import { TouchableOpacity } from 'react-native-gesture-handler'

const InitiateScreen = () => {
  return (
            <ImageBackground style={{flex:1}}
            source={require('../assets/images/BG123.png')}>
                
              {BUTTON()}

            </ImageBackground>
  )
  function BUTTON(){
    return(
        <View style={{alignItems:"center",paddingTop:SCREEN_HEIGHT*0.88}}>
        <TouchableOpacity style={{height:SCREEN_HEIGHT*0.07,justifyContent:"center",alignItems:"center",backgroundColor:colors.astrobook1,borderRadius:25,width:SCREEN_WIDTH*0.7,elevation:1}}>
                    <Text style={{...Fonts.black11InterMedium,fontSize:responsiveFontSize(2.3),color:colors.white_color}}>Explore More</Text>
        </TouchableOpacity>
        </View>
    )
  }
 

}

export default InitiateScreen

const styles = StyleSheet.create({})