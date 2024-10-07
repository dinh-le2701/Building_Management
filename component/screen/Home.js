import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Home= ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <view style={styles.circle}></view>
        <Text style={styles.text_welcome_user_name}>Xin chào</Text>
      </View>

      <View style={styles.center}>
       {/* thong tin cua can ho resident o 
          - Diện tích căn hộ
          - Số phòng trong căn hộ
          - Loại căn hộ
          - Thông tin quản lý chung cư
          - Số điện thoại quản lý

          - 
       */}
       <Pressable>
        <View>
          <Image/>
        </View>
        <Text>Hóa đơn</Text>       
       </Pressable>
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.content_footer1}
          onPress={()=>navigation.navigate('Home')}>
            <Entypo name="home" size={24} color="#004d8d" style={styles.expo_footer}/>
            <Text style={styles.text_footer_home}>Trang chủ</Text>
        </Pressable>

        <Pressable style={styles.content_footer2}
          onPress={()=>navigation.navigate('Payment')}>

          <MaterialIcons name="payment" size={24} color="black" />
          <Text style={styles.text_footer_pay}>Thanh toán</Text>
        </Pressable>

        <Pressable style={styles.content_footer3}
          onPress={()=>navigation.navigate('Notification')}>

          <Ionicons name="notifications" size={24} color="black" />
          <Text style={styles.text_footer_notification}>Thông báo</Text>
        </Pressable>
        <Pressable style={styles.content_footer4}
          onPress={()=>navigation.navigate('Account')}
        >
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text style={styles.text_footer_account}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#a1d2f5',
    height: 100,
    width: '100%', 
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
   
  },

  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 20,
  },

  text_welcome_user_name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft:20
  },

  center:{

  },

  footer: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    height: 60,
    width: '100%', 
    position: 'absolute',
    bottom: 0, 
    justifyContent: 'space-around', 
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  content_footer1: {
    alignItems: 'center',
    
  },
  content_footer2: {
    alignItems: 'center',
    marginTop: 2, 
  },
  content_footer3: {
    alignItems: 'center',
  },
  content_footer4: {
    alignItems: 'center',
  },
  
  text_footer_home: {
    fontSize: 12,
    fontWeight: '700',
    color: '#004d8d',
  },
  text_footer_pay: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
  text_footer_notification: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
  text_footer_account: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
});