import React, { useState } from 'react';
import { View, TouchableNativeFeedback, Animated, StyleSheet, Text } from 'react-native';

const RippleEffect = () => {
  

  
//   const rippleScale = ripple.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 1000],
//   });

 
  const rippleStyles = {
    borderRadius: 1000, 
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -500 }, { translateY: -500 }] 
  };

  return (
    <TouchableNativeFeedback onPress={()=>{}}>
      <View style={styles.container}>
        <Animated.View style={rippleStyles} />
        <View style={styles.button}>
         <Text style={{fontSize:16,fontWeight:'600'}}>
           Ripple Effect
         </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
  },
  button: {
    marginVertical:200,
    height:100,
     width:300,
     alignSelf:'center',
     padding:40,
     backgroundColor:'#E6E6E6',
     borderRadius:200,
     justifyContent:'center',
     alignItems:'center',
  },
});

export default RippleEffect;
