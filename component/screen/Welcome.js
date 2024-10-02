import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';

const Welcome= ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
          <Image style={styles.img_background} source={require('../img/toanha.jpg')}/>
            
          <View style={styles.content}>
              <Text style={styles.text_title}>Welcome</Text>
              <Pressable style={styles.button}
                onPress={() => navigation.navigate('SignIn')}
              >
                <Text style={styles.text_button}>SignIn</Text>
              </Pressable>

              <Pressable style={styles.button}
                onPress={() => navigation.navigate('SignUp')}
              >
                <Text style={styles.text_button}>SignUp</Text>
              </Pressable>
            </View>
      </View>
    </View>
  );
}
export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view:{
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
  },

  img_background:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginTop: -119
    
  },

  content:{
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: -400,
  },
  

  text_title:{
    fontSize: 60,
    fontWeight: '700',
    color: 'white',
    marginBottom: 80,
  },

  button:{
    width: 250,
    backgroundColor: '#a1d2f5',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    
  },

  text_button:{
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },

  input:{
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },


});
