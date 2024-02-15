import React, { useRef, useState } from 'react'
import { Animated, Image, TouchableOpacity, View } from 'react-native'
import styles from './Style';

const TabItem = () => {
    //const [animationValue, setAnimationvalue] = useState(new Animated.Value(0));
    const animationValue = useRef(new Animated.Value(0)).current;
    const [moveForward,setMoveForward]=useState(false);
    
    function startAnimation(){
        if(moveForward==false){
     Animated.timing(animationValue,{
        toValue:250,
        duration:600,
        useNativeDriver:true

     }
     
     ).start();
     setMoveForward(true);}
     else{
        Animated.timing(animationValue,{
            toValue:0,
            duration:600,
            useNativeDriver:true
         }
         ).start();
        setMoveForward(false)
     }

    }

    const animatedStyle = {
        transform: [
           
          {
            translateY:0,
          },
          {
            translateX:animationValue,
          }
        ]
      }
  return (
    <View style={styles.container}>
    <Animated.View style={[animatedStyle]}>
        <TouchableOpacity onPress={startAnimation} >
            <Image source={require('../../assests/Image/FootBall.png')}  />
        </TouchableOpacity>
    </Animated.View>
    </View>
  )
}

export default TabItem