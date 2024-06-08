import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const Img = require('../../assets/Illustration.png');

const Splash = () => {
  const {navigate} = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView />
      <Image source={Img} style={styles.image} resizeMode="cover" />
      <View style={styles.viewTitle}>
        <Text style={styles.title}>Aprenda do seu jeito em casa!</Text>
        <Text style={styles.subtitle}>Eficiente e efetivo</Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonLabel}>Comece agora</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
  },
  image: {
    marginTop: 92,
    height: 344,
    alignSelf: 'center',
  },
  viewTitle: {
    marginTop: 72,
    alignItems: 'center',
  },
  title: {
    fontSize: 39,
    color: '#2C2B47',
  },
  subtitle: {
    fontSize: 17,
    color: '#B9B8C6',
    marginTop: 12,
  },
  button: {
    marginTop: 73,
    backgroundColor: '#2C2B47',
    width: 186,
    height: 58,
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    color: '#FFF1EF',
    fontSize: 18,
  },
});

export default Splash;
