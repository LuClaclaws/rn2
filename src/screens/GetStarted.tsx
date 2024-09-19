import { View, Text, ImageBackground } from "react-native"
import React from "react"
import LinearGradient from 'react-native-linear-gradient';


const GetStarted = () => {
    return (
        <ImageBackground style={{ display: "flex", width: "100%", height: "100%" }} source={require('./assets/getstarted_img.jpg')} >
            <LinearGradient colors={['transparent', '#ffffff']}
                style={{ width: "100%", height: "100%", flex: 1 }}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 0, y: 0.7 }}
            >

               <View style={{height: "66%"}}/>
               <View style={{alignItems: "center"}}>

                  <Text style={{fontSize: 30, fontWeight:"bold", color: "black"}}>
                       Ignite your Ideas with Captivating Visuals{' '}
                  </Text>

                  <Text style={{fontSize: 18, fontWeight:"bold", color: "gray"}}>
                    {' '}
                    Unlock the power of your imagination and experience the thrill of bring
                    your creative visions to life like never before
                  </Text>

                  



               </View>

            </LinearGradient>
        </ImageBackground>
      

    )
}

export default GetStarted