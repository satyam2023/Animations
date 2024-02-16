import React, { useRef, useState } from 'react'
import { View, Text, Animated, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './Style/Style';
import DragAndDropCard from '../DraggingCard/Drag';
import TabItem from '../../components/TabItems/TabItem';


const FadingView: React.FC<{}> = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const springAnim = useRef(new Animated.Value(1)).current;
  console.log("Springanim Value::", springAnim);
  const [clicked, setclicked] = useState<boolean>(false)
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const bouncy = () => {
    Animated.timing(springAnim, {
      toValue: 0,
      duration:2000,
      useNativeDriver: true,
    }).start();
  };

  const reBouncy = () => {
    Animated.timing(springAnim, {
      toValue: 1,
      duration:2000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim,
          },
        ]}>
        <TouchableOpacity onPress={() => { reBouncy(); fadeOut(); setclicked(false);console.log("cross clicked")}}>
          <Text style={{ color: 'black', marginLeft: '90%', fontSize: 40, transform: [{ rotate: '90deg' }] }}>+</Text>
        </TouchableOpacity>
      </Animated.View>

        <Animated.View style={[{opacity:springAnim},styles.buttonRow]}>
          <TouchableOpacity style={styles.btn} onPress={() => {
            bouncy();
            if (!clicked) { fadeIn(); setclicked(true) } else { fadeOut(); setclicked(false) }
          }}>
            <Text style={styles.btnText}>+</Text>
            
          </TouchableOpacity>
        </Animated.View>
    </SafeAreaView>
  )
}

export default FadingView;