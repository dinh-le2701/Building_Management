import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';

const SignIn= ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img_background} source={require('../img/building.jpg')}/>
      <View style={styles.content_signin}>
          <View style={styles.user}>
            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.textiput} placeholder = 'Enter your email'/>
          </View>

          <View style={styles.user}>
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.textiput} placeholder = 'Enter password'/>
          </View>
      <Pressable style={styles.btn_signin} onPress={() => navigation.navigate('Resident_Home')}>
        <Text style={styles.text_btn_signin}>Sign In</Text>
      </Pressable>

      <View style={styles.question}>
          <Text style={styles.text_question}>Don't have an account?</Text>
          <Pressable style={styles.link_question} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.text_link_question}>Sign Up</Text>
          </Pressable>
  
      </View>
      </View>
      
    </View>
  );
}
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img_background:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginTop: -100
    
  },
  content_signin:{
    width: '80%',
    padding: 20,
    backgroundColor: '#EEF4F5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    marginTop: -480,
  },

  user:{
    marginBottom: 10
  },
  text:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  textiput:{
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    height: 40
  },
  textiput_name:{
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 40
  },
  btn_signin:{  
    width: 270,
    backgroundColor: '#01BAB4',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,

  },
  text_btn_signin:{
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  question:{
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text_question:{
    fontSize: 16,
    color: '#01BAB4'
  },
  text_link_question:{
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#01BAB4',
    marginTop: 2
  },

});
