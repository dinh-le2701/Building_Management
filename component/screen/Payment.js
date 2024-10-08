import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Payment = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.text_header}>Thanh toán</Text>
      </View>

      {/* Payment Options */}
      <View style={styles.content}>
        <Text style={styles.title}>Phương thức thanh toán</Text>

        {/* Payment Method 1 */}
        <View style={styles.optionContainer}>
          <Text style={styles.optionTitle}>Thanh toán tại quầy lễ tân</Text>
          <Text style={styles.optionText}>
            Mời quý khách đến quầy lễ tân đóng tiền theo hóa đơn trên ứng dụng. Sau khi thanh toán, hóa đơn điện tử sẽ được kiểm tra và gửi đến trạng thái thanh toán.
          </Text>
        </View>

        {/* Payment Method 2 */}
        <View style={styles.optionContainer}>
          <Text style={styles.optionTitle}>Chuyển khoản ngân hàng</Text>
          <Text style={styles.optionText}>
            Quý khách vui lòng chuyển khoản theo thông tin dưới đây: {'\n'}
            STK: 6886999 688 - Ngân hàng ABC {'\n'}
            Chủ TK: Công ty TNHH...
          </Text>
        </View>

        {/* Payment Method 3 */}
        <View style={styles.optionContainer}>
          <Text style={styles.optionTitle}>Chuyển khoản ngân hàng trực tuyến</Text>
          <Text style={styles.optionText}>
            Chuyển khoản ngân hàng trực tuyến qua ứng dụng Mobile Banking...
          </Text>
        </View>

        {/* Transaction Summary */}
        <View style={styles.transactionSummary}>
          <Text style={styles.transactionText}>Thành tiền</Text>
          <Text style={styles.transactionAmount}>5.862.340 VNĐ</Text>
        </View>

        {/* Confirmation Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Đồng ý</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <Pressable style={styles.content_footer1} onPress={() => navigation.navigate('Home')}>
          <Entypo name="home" size={24} color="black" />
          <Text style={styles.text_footer_home}>Trang chủ</Text>
        </Pressable>

        <Pressable style={styles.content_footer2} onPress={() => navigation.navigate('Payment')}>
          <MaterialIcons name="payment" size={24} color="#004d8d" />
          <Text style={styles.text_footer_pay}>Thanh toán</Text>
        </Pressable>

        <Pressable style={styles.content_footer3} onPress={() => navigation.navigate('Notification')}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text style={styles.text_footer_notification}>Thông báo</Text>
        </Pressable>

        <Pressable style={styles.content_footer4} onPress={() => navigation.navigate('Account')}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text style={styles.text_footer_account}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#a1d2f5',
    width: '100%',
    height: 80,
    position: 'absolute',
    top: 0,
  },
  text_header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    marginLeft: 10,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 100,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  optionText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  transactionSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  transactionText: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#a1d2f5',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
    color: '#004d8d',
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
