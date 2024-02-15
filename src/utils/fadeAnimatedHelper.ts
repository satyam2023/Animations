import { useRef } from "react";
import { Animated } from "react-native";
const fadeAnim = useRef(new Animated.Value(0)).current;
const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  export {fadeIn,fadeOut}