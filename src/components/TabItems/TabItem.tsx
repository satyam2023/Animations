import React, { useRef, useState } from 'react'
import { Animated, Image, TouchableOpacity, View } from 'react-native'
import styles from './Style';

const TabItem = () => {
    //const [animationValue, setAnimationvalue] = useState(new Animated.Value(0));
    const animationValue = useRef(new Animated.ValueXY({x:0,y:0})).current;
    const [moveForward,setMoveForward]=useState(false);
    const animatedWidth = useRef(new Animated.Value(0)).current;
    
    function startAnimation(){
        if(moveForward==false){
     Animated.timing(animationValue.x,{
        toValue:250,
        duration:2000,
        useNativeDriver:true
     }
     ).start();
     setMoveForward(true);}
     else{
        Animated.timing(animationValue.x,{
            toValue:0,
            duration:2000,
            useNativeDriver:true
         }
         ).start();
        setMoveForward(false)
     }

    }

    
     const RotateX= animationValue.x.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg'],
    })
    
 function SmoothBack(){
  console.log("Smooth Called::");
  Animated.timing(animatedWidth,{
    toValue:320,
    duration:2000,
    useNativeDriver:false
  } ).start()}

  function Smooth(){
    console.log("Smooth Called::");
    Animated.timing(animatedWidth,{
      toValue:0,
      duration:2000,
      useNativeDriver:false
    } ).start()}

 console.log("WIDTh::",animatedWidth);
 console.log("value::",animationValue.x);


    const animatedStyle = {
        transform: [
           
          {
            translateY:0,
          },
          {
            translateX:animationValue.x,
          },
          {
            rotateX:RotateX,
          }
        ]
      }
  return (
    <View style={[styles.container]}>
<TouchableOpacity style={{width:animatedWidth,backgroundColor:'#2E8AFD5B',borderRadius:100}} >
    <Animated.View style={[animatedStyle]}>
        <TouchableOpacity onPress={()=>{startAnimation();if(!moveForward){SmoothBack()}else{Smooth()}}} >
            <Image source={require('../../assests/Image/FootBall.png')} />
        </TouchableOpacity>
    </Animated.View>
    </TouchableOpacity>
    
    </View>
  )
}

export default TabItem