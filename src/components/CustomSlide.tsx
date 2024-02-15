import React, { useState } from 'react';
import { View, Text, PanResponder, Animated } from 'react-native';

const CustomSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      },
    })
  )[0];

  const interpolateX = pan.x.interpolate({
    inputRange: [-200, 200],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const onValueChange = (newValue:any) => {
    setSliderValue(newValue);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{sliderValue}</Text>
      <Animated.View
        style={{
          width: 200,
          height: 20,
          backgroundColor: 'lightgray',
          borderRadius: 10,
        }}>
        <Animated.View
          {...panResponder.panHandlers}
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: 'blue',
            borderRadius: 10,
            transform: [{ translateX: pan.x }],
          }}
        />
      </Animated.View>
    </View>
  );
};

export default CustomSlider;
