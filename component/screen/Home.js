import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Image, FlatList } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Home = ({ navigation, route }) => {
  const items = [
    { id: '1', name: 'Hóa đơn', icon: 'file-invoice-dollar', img: require('../img/invoice.jpg')},
    { id: '2', name: 'Hợp đồng', icon: 'file-invoice-dollar',img: require('../img/hopdong.png')},
    { id: '3', name: 'Báo cáo', icon: 'file-invoice-dollar', img: require('../img/report.png')},
    { id: '4', name: 'Nội quy', icon: 'file-invoice-dollar', img: require('../img/noiquy.png')},
  ];

  const HomeItem = ({ item }) => (
    <View style={styles.homeItemContainer}>
      <Pressable onPress={()=>navigation.navigate('Invoice')}>
         <View style={styles.iconCircle}>
          {/* <Image style={styles.avatar2}>{item.img}</Image> */}
          {/* <FontAwesome6 name={item.icon} size={24} color="black" /> */}
        </View>
        <Text style={styles.homeItemText}>{item.name}</Text>
      </Pressable>
     
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>    
        <View style={styles.circle}>
          <Image source={require('../img/avatar.png')} style={styles.avatar}/>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>Nguyễn Văn A</Text>
          <Text style={styles.headerSubtitle}></Text>
          <Text style={styles.headerAddress}></Text>
        </View>
        <Image source={require('../img/lo-go.png')} style={styles.logo}/>
      </View>

      <ScrollView style={styles.content}>
        {/* Shortcut Icons */}
        <View style={styles.shortcutContainer}>
          <FlatList
            data={items}
            numColumns={5}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <HomeItem item={item} />}
          />
        </View>

        {/* Notifications */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Thông báo mới</Text>
            <Pressable onPress={()=>navigation.navigate('Notification')}>
              <Text style={styles.sectionLink}>Xem tất cả</Text>
            </Pressable>
            
          </View>
          <View style={styles.notificationContainer}>
            <View style={styles.notificationIconContainer}>
              <MaterialIcons name="warning" size={24} color="red" />
            </View>
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationText}>
                Thông báo hóa đơn tháng 10/2024
              </Text>
              <Text style={styles.notificationDate}>5.862.340 VNĐ</Text>
              <Text style={styles.notificationDate}>1 ngày trước</Text>
            </View>
          </View>
        </View>

        {/* Management Requests */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Báo cáo sự cố</Text>
            <Pressable onPress={()=>navigation.navigate('Report')}>
              <Text style={styles.sectionLink}>Xem tất cả</Text>
            </Pressable>
            
          </View>
          <View style={styles.requestContainer}>
            <View style={[styles.requestItem, { backgroundColor: '#dff3f5' }]}>
              <Text style={styles.requestTitle}>Khác</Text>
              <Text style={styles.requestStatus}>Đang xử lý</Text>
              <Text style={styles.requestIssue}>Thay đổi cửa kính</Text>
              <Text style={styles.requestDate}>19/09/2024 15:51</Text>
            </View>
            <View style={[styles.requestItem, { backgroundColor: '#f5e9cf' }]}>
              <Text style={styles.requestTitle}>Khác</Text>
              <Text style={styles.requestStatus}>Đang xử lý</Text>
              <Text style={styles.requestIssue}>Sự cố về điện</Text>
              <Text style={styles.requestDate}>01/09/2024 15:31</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer Navigation */}
      <View style={styles.footer}>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
          <Entypo name="home" size={24} color="#004d8d" />
          <Text style={styles.footerText}>Trang chủ</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Payment')}>
          <MaterialIcons name="payment" size={24} color="black" />
          <Text style={styles.footerText}>Thanh toán</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Notification')}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text style={styles.footerText}>Thông báo</Text>
        </Pressable>
        <Pressable style={styles.footerItem} onPress={() => navigation.navigate('Account')}>
          <MaterialCommunityIcons name="account" size={24} color="black" />
          <Text style={styles.footerText}>Tài khoản</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#a1d2f5',
    height: 150,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo:{
    width: 80,
    height: 80, 
    borderRadius: 40,
    marginLeft: 80,
    marginTop: -30

  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'grey',
  },
  avatar:{
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  headerText: {
    marginLeft: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 16,
    marginVertical: 4,
  },
  headerAddress: {
    fontSize: 14,
    color: 'grey',
  },
  content: {
    padding: 20,
  },
  avatar2:{
    width: 50,
    height: 50, 
    borderRadius: 25,
  },
  shortcutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeItemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconCircle: {
    backgroundColor: '#e0e0e0',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  homeItemText: {
    fontSize: 14,
    textAlign: 'center',
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionLink: {
    color: '#007aff',
  },
  notificationContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff3e0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  notificationIconContainer: {
    marginRight: 15,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  notificationDate: {
    fontSize: 12,
    color: 'grey',
    marginTop: 5,
  },
  requestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  requestItem: {
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  requestTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  requestStatus: {
    color: '#ff9800',
    marginVertical: 5,
  },
  requestIssue: {
    fontSize: 14,
  },
  requestDate: {
    fontSize: 12,
    color: 'grey',
  },
  requestNote: {
    fontSize: 12,
    color: 'grey',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 2,
  },
});
