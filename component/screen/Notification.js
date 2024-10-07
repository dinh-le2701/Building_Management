import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, FlatList } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';



const Notification= ({ navigation,route }) => {
  const notifications = [
    {
      id: '1',
      title: 'Bạn có hóa đơn tiền điện tháng 10/2024',
      dduration: 'Hạn đóng 5 ngày',
      icon: require('../img/toanha.jpg'),
      price: '1.250.000đ',
      status: 'Chưa thanh toán',
    },
    {
      id: '2',
      title: 'Bạn có hóa đơn tiền nước tháng 10/2024',
      duration: 'Hạn đóng 5 ngày',
      icon: require('../img/toanha.jpg'),
      price: '350.000đ', 
      status: 'Chưa thanh toán',
    },
  
  ];

  const NotificationItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.status}>{item.status}</Text>
        {/* <Pressable style={styles.payment} onPress={()=> navigation.navigate('Payment')}>
          <Text style={styles.payment_text}>Thanh toán</Text>
        </Pressable> */}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Thông báo</Text>
      </View>
    <View style={styles.content} >
      <Pressable onPress={()=>navigation.navigate('InvoiceDetails')}>
        <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        contentContainerStyle={styles.listContainer}
        />
      </Pressable>
      
    </View>
      <View style={styles.footer}>
        <Pressable style={styles.content_footer1}
          onPress={()=>navigation.navigate('Home')}>
            <Entypo name="home" size={24} color="black" style={styles.expo_footer}/>
            <Text style={styles.text_footer_home}>Trang chủ</Text>
        </Pressable>

        <Pressable style={styles.content_footer2}
          onPress={()=>navigation.navigate('Payment')}>

          <MaterialIcons name="payment" size={24} color="black" />
          <Text style={styles.text_footer_pay}>Thanh toán</Text>
        </Pressable>

        <Pressable style={styles.content_footer3}
          onPress={()=>navigation.navigate('Notification')}>

          <Ionicons name="notifications" size={24} color="#004d8d" />
          <Text style={styles.text_footer_notification}>Thông báo</Text>
        </Pressable>
        <Pressable style={styles.content_footer4}
          onPress={()=>navigation.navigate('Account')}
        >
          <MaterialCommunityIcons name="account" size={24} color="#black" />
          <Text style={styles.text_footer_account}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#a1d2f5',
    width: '100%',
    height: 80,
    top: 0,
    position: 'absolute',
  },
  text_header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    marginLeft: 10,
    
  },
  content:{
    marginTop: -200, 
    paddingHorizontal: 20,
    width: '100%',
  },

  notificationContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25,
    marginTop: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  duration: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
  },

  status:{
    fontSize: 14,
    fontWeight: '400',
    color: 'green',
    fontStyle: 'italic',
    marginTop: 5
  },

  payment:{
    width: 90,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 5,
    shadowRadius:2,
    shadowColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 150,
    marginTop: -30,
  },

  payment_text:{
    color: 'white',
    fontWeight: '500'
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
    color: 'black',
  },
  text_footer_pay: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black'
  },
  text_footer_notification: {
    fontSize: 12,
    fontWeight: '700',
    color: '#004d8d',
  },
  text_footer_account: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
});
