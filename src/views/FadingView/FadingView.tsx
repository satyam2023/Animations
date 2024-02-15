import React, { useRef, useState } from 'react'
import { View,Text, Animated, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './Style/Style';
import { handlePress } from '../../utils/SpringAnim';
import TabItem from '../../components/TabItems/TabItem';

const FadingView:React.FC<{}> = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  
const [clicked,setclicked]=useState<boolean>(false)
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
       duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1500,
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
        <Text style={styles.fadingText}>{`Today's Date is: ${new Date().getDate()}`}</Text>
        <TabItem/>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Animated.View style={clicked?{transform:[{scale:2}]}:{}}>
           <TouchableOpacity style={styles.btn} onPress={()=>{handlePress();
          if(!clicked){fadeIn(); setclicked(true)}else{fadeOut();setclicked(false)}}}>
          <Text style= {styles.btnText}>{!clicked?"Show Bottom Tab":"Hide Bottom tab"}</Text>
           </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  )
}

export default FadingView;