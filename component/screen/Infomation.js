import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Infomation = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Acount')}>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowLeft} />
        </Pressable>
        <Text style={styles.headerTitle}>Thông tin cư dân</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.address_box}>
          <Entypo name="location-pin" size={24} color="white" />
          <Text style={styles.address_text}>Căn 004, Tòa A, Vinhomes Serenity</Text>
        </View>
        <View style={styles.info_section}>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Tên chủ hộ:</Text>
            <Text style={styles.info_value}>Nguyễn Văn A</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Số điện thoại:</Text>
            <Text style={styles.info_value}>0341272417</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Tầng:</Text>
            <Text style={styles.info_value}>2</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Tòa:</Text>
            <Text style={styles.info_value}>A</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Tên căn hộ:</Text>
            <Text style={styles.info_value}>CH004</Text>
          </View>
          
          <View style={styles.info_row}>
            <Text style={styles.info_label}>Mô tả căn hộ:</Text>
            <Text style={styles.info_value}>My house</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Pressable style={styles.content_footer1} onPress={() => navigation.navigate('Home')}>
          <Entypo name="home" size={24} color="black" style={styles.expo_footer} />
          <Text style={styles.text_footer_home}>Trang chủ</Text>
        </Pressable>

        <Pressable style={styles.content_footer2} onPress={() => navigation.navigate('Payment')}>
          <MaterialIcons name="payment" size={24} color="black" />
          <Text style={styles.text_footer_pay}>Thanh toán</Text>
        </Pressable>

        <Pressable style={styles.content_footer3} onPress={() => navigation.navigate('Notification')}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text style={styles.text_footer_notification}>Thông báo</Text>
        </Pressable>

        <Pressable style={styles.content_footer4} onPress={() => navigation.navigate('Account')}>
          <MaterialCommunityIcons name="account" size={24} color="#004d8d" />
          <Text style={styles.text_footer_account}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Infomation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#a1d2f5',
    width: '100%',
    height: 80,
    flexDirection: 'row'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  arrowLeft: {
    color: 'black',
    marginTop: 5,
  },

  content: {
    flex: 1,
    padding: 20,
    width: '100%',
  },
  address_box: {
    flexDirection: 'row',
    backgroundColor: '#a1d2f5',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  address_text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  info_section: {
    marginTop: 20,
  },
  info_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  info_label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  info_value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    height: 60,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    position: 'absolute',
    bottom: 0,
  },
  content_footer1: {
    alignItems: 'center',
  },
  content_footer2: {
    alignItems: 'center',
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
    color: '#004d8d',
  },
});
