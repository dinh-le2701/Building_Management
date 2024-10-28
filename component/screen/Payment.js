import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Animated, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Payment = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState('counter'); 
  const scaleValue = new Animated.Value(1); 

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.5,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1, 
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.text_header}>Thanh toán</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Phương thức thanh toán</Text>

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => setSelectedMethod('counter')}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <View style={[styles.radioCircle, selectedMethod === 'counter' && styles.radioSelected]} />
          <View style={styles.radioContainer}>         
            <Text style={styles.optionTitle}>Thanh toán tại quầy lễ tân</Text>
            <Text style={styles.optionText}>
              Mời quý khách đến quầy lễ tân đóng tiền theo {"\n"}  
              hóa đơn trên ứng dụng. Sau khi thanh toán, {"\n"}
              hóa đơn điện tử sẽ được kiểm tra và gửi đến {"\n"} 
              trạng thái thanh toán.  
            </Text>
          </View>
          
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => setSelectedMethod('bankTransfer')}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <View style={[styles.radioCircle, selectedMethod === 'bankTransfer' && styles.radioSelected]} />
          <View style={styles.radioContainer}>
            <Text style={styles.optionTitle}>Chuyển khoản ngân hàng</Text>
            <Text style={styles.optionText}>
              Quý khách vui lòng chuyển khoản theo {"\n"}thông tin dưới đây: {'\n'}
              STK: 6886999 688 - Ngân hàng ABC {'\n'}
              Chủ TK: Công ty TNHH Vinhomes Serenity
            </Text>
          </View>
          
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => setSelectedMethod('onlineBanking')}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        > 
          <View style={[styles.radioCircle, selectedMethod === 'onlineBanking' && styles.radioSelected]} />
          <View style={styles.radioContainer}>          
            <Text style={styles.optionTitle}>Chuyển khoản ngân hàng trực tuyến</Text>
            <Text style={styles.optionText}>
              Chuyển khoản ngân hàng trực tuyến qua {"\n"} ứng dụng Momo 
            </Text>
          </View>
          
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.transactionSummaryContainer}>
        <View style={styles.transactionSummary}>
          <Text style={styles.transactionText}>Thành tiền</Text>
          <Text style={styles.transactionAmount}>5.862.340 VNĐ</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>

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

        <Pressable style={styles.content_footer4} onPress={() => navigation.navigate('Acount')}>
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
  },
  header: {
    backgroundColor: '#a1d2f5',
    width: '100%',
    height: 80,
    position: 'absolute',
    top: 0,
    zIndex: 1, 
  },
  text_header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    marginLeft: 30,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 100, 
    // flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  radioContainer: {
    marginBottom: 5,
    flexDirection: 'column',
    marginLeft: 10,
  },
  radioCircle: {
    height: 15, 
    width: 15,  
    borderRadius: 8, 
    borderWidth: 2,
    borderColor: '#004d8d',
    marginRight: 10,
    marginTop: 40,
  },
  radioSelected: {
    backgroundColor: '#004d8d',
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'left',
  },
  optionText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginLeft: 10, 
    marginTop: 5,
    textAlign: 'left',
  },
  transactionSummaryContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8', 
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 60, 
    left: 0,
    right: 0,
  },
  transactionSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  transactionText: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
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
