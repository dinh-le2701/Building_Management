import { StyleSheet, Text, View, Image, Pressable, TextInput, AsyncStorage } from 'react-native';
import React, { useState } from 'react';

const SignIn = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSignIn = async () => {
    if (!formData.email || !formData.password) {
      console.log('Email và mật khẩu không được để trống');
      return;
    }
    try {
      const response = await fetch('http://localhost:8901/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password 
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          await AsyncStorage.setItem('token', data.token);
          navigation.replace("Home");

        } else {
          console.log('Login failed:', data.message);
        }
      } else {
        console.log('HTTP error:', response.status);
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.img_background} source={require('../img/toanha.jpg')} />
      <View style={styles.content_signin}>
        <View style={styles.user}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.textiput}
            placeholder='Enter your email'
            secureTextEntry={false}
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
          />
        </View>

        <View style={styles.user}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.textiput}
            placeholder='Enter password'
            secureTextEntry={true}
            value={formData.password}
            onChangeText={(text) => handleChange('password', text)}
          />
        </View>

        <Pressable style={styles.btn_signin} onPress={handleSignIn}>
          <Text style={styles.text_btn_signin}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img_background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginTop: -146.5
  },
  content_signin: {
    width: '80%',
    padding: 20,
    backgroundColor: '#EEF4F5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    marginTop: -480,
  },
  user: {
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textiput: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    height: 40
  },
  btn_signin: {
    width: 270,
    backgroundColor: '#a1d2f5',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  text_btn_signin: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
