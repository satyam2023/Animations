import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, Alert, Image } from 'react-native';
import Data from './Data/Data';
const CardSwiper = () => {
  const [pan] = useState(new Animated.ValueXY());
  const [currentIndex, setCurrentIndex] = useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true, 
    onMoveShouldSetPanResponder: () => true,
   
    onPanResponderMove: Animated.event([
      null,
      { 
        dx: pan.x, 
        dy: pan.y
       }
    ]
    ),
    onPanResponderRelease: (e, gesture) => {
      if (gesture.dx > 220) {
        Animated.spring(pan, {
          toValue: { x: 500, y: gesture.dy },
          useNativeDriver: false
        }).start(() => {
          setCurrentIndex(currentIndex + 1);
          pan.setValue({ x: 0, y: 0 });
        });
      } else if (gesture.dx < -120) {
        
        Animated.spring(pan, {
          toValue: { x: -500, y: gesture.dy },
          useNativeDriver: false
        }).start(() => {
          setCurrentIndex(currentIndex + 1);
          pan.setValue({ x: 0, y: 0 });
        });
      } else {
       
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false
        }).start();
      }
    }
  });

  const rotateCard = pan.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-10deg', '0deg', '10deg']
  });

  const animatedCardStyles = {
    transform: [{ translateX: pan.x }, { translateY: pan.y }, { rotate: rotateCard }]
  };

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.card, animatedCardStyles]}
      >
       <Image source={Data[currentIndex].image}/>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 300,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardSwiper;
