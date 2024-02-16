import { useRef } from "react";
import { Animated } from "react-native";


const handlePress = () => {
    console.log("function called::")
    const springAnim=new Animated.Value(1)
    Animated.spring(springAnim, {
        toValue: 100,
        bounciness:9000,
        speed:1000,
        useNativeDriver: true
    })
  };

  export {handlePress}