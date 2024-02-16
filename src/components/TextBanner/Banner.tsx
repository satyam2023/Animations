import React, { useRef, useEffect } from 'react';
import { Animated, View, Text } from 'react-native';

const MovingTextBanner = () => {
  const translateX = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -300, 
        duration: 4000, 
        useNativeDriver: true, 
      })
    ).start();
  }, [translateX]);

  return (
    <View style={{ overflow: 'hidden', width: '100%', padding:20,backgroundColor:'black' }}>
      <Animated.View
        style={{
          flexDirection: 'row',
          transform: [{ translateX }],
        }}>
        <Text style={{ fontSize: 16,color:'red' }}>Learning About the Animation in the React Native.....</Text>
      </Animated.View>
    </View>
  );
};

export default MovingTextBanner;
