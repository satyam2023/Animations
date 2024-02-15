import { useRef } from "react";
import { Animated } from "react-native";


const handlePress = () => {
    console.log("function called::")
    const springAnim=new Animated.Value(1)
    Animated.spring(springAnim, {
        toValue: 100,
        friction: 900,
        tension: 40000,
        useNativeDriver: true
    })
  };

  export {handlePress}