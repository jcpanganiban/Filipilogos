import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Onboarding() {
  const navigation = useNavigation();
  let [msg, setMsg] = useState(0);

  const [onBoardingMsgs, setOnBoardingMsgs] = useState([
    'Message 1',
    'Message 2',
    'Message 3',
  ]);

  return (
    <View style={styles.onboarding}>
      <Text style={styles.onboardingText}>{onBoardingMsgs[msg]}</Text>
      <TouchableWithoutFeedback
        onPress={() => {
          setMsg(msg + 1);
          msg === 2 && navigation.navigate('Home');
        }}
        style={styles.onboardingButton}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  onboarding: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'black',
    color: 'white',
  },
  onboardingText: {
    color: 'white',
  },
  onboardingButton: {
    position: 'absolute',
  },
  buttonText: {
    position: 'absolute',
    padding: 10,
    right: 20,
    bottom: 20,
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
  },
});
