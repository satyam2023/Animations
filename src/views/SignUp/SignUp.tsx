import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Image, Pressable, TouchableWithoutFeedback } from 'react-native';
import InputText from '../../components/TextInput/InputText';
import styles from './Style/Style';

const MovingSignupButton = () => {
  const [isValid, setIsValid] = useState(false);
//   var RotateX=useRef(new Animated.Value(0)).current;
  const [buttonPosition] = useState(new Animated.Value(0));
  const details={
    name:useRef(''),
    email:useRef(''),
    phone:useRef(''),
    age:useRef(''),
    password:useRef(''),
  }

  const RotateX=buttonPosition.interpolate({
    inputRange: [0,100],
   outputRange: ['0deg','360deg'],
})

  const handleValidation = () => {
    
    
    
    
  };

  const handleSignup = () => {
    if (isValid) {
     
     
    } else {

      Animated.sequence([
        Animated.timing(buttonPosition, {
          toValue: -200,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(buttonPosition, {
          toValue: 200,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(buttonPosition, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start();
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.topPart}>
             <Image source={require('../../assests/Image/SignUp.png')} style={styles.img}/>
        </View>
        <View style={styles.form}>
        <View style={styles.inputbox}>
            <Image source={require('../../assests/Image/Name.png')} style={styles.InputImg}/>
        <InputText placeholder={'Enter Name'} ChangeText={(text:string)=>{details.name.current=text}} keyboardType={'text'} secureText={false} maxLength={20}/>
        </View>
        <View style={styles.inputbox}>
        <Image source={require('../../assests/Image/Email.png')} style={styles.InputImg}/>
        <InputText placeholder={'Enter Email Id'} ChangeText={(text:string)=>{details.email.current=text}} keyboardType={'email'} secureText={false} maxLength={20}/>
        </View>
        <View style={styles.inputbox}>
        <Image source={require('../../assests/Image/Age.png')} style={styles.InputImg}/>
        <InputText placeholder={'Enter Age'} ChangeText={(text:string)=>{details.age.current=text}} keyboardType={'numeric'} secureText={false} maxLength={20}/>
        </View>
        <View style={styles.inputbox}>
        <Image source={require('../../assests/Image/Phone.png')} style={styles.InputImg}/>
        <InputText placeholder={'Enter Mobile Number'} ChangeText={(text:string)=>{details.phone.current=text}} keyboardType={'numeric'} secureText={false} maxLength={20}/>
        </View>
        <View style={styles.inputbox}>
        <Image source={require('../../assests/Image/Password.png')} style={styles.InputImg}/>
        <InputText placeholder={'Enter Password'} ChangeText={(text:string)=>{details.password.current=text}} keyboardType={'text'} secureText={true} maxLength={20}/>
        </View>
        </View>
        <TouchableWithoutFeedback  onPress={handleSignup} >
        <Animated.View style={[styles.button, { transform: [{ translateX: buttonPosition },{rotate:RotateX}] }]}>
          <Text style={styles.buttonText}>Log In</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};



export default MovingSignupButton;
