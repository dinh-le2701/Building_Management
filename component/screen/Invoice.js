import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Invoice = ({navigation}) => {
  const [selectedApartment, setSelectedApartment] = useState('Chưa thanh toán');

  const apartments = [
    {id: 'Chưa thanh toán', status: 'active' },
    {id: 'Đã thanh toán',  status: 'inactive' },
  ];

  const bills = [
    {
      id: 'HD002',
      apartmentId: 'Chưa thanh toán',
      month: '10/2024',
      total: '5.862.340',
      details: [
        { label: 'Phí môi trường', amount: '1.215.000' },
        { label: 'Phí điện', amount: '2.215.000' },
        { label: 'Phí nước', amount: '1.215.000' },
        { label: 'Phí quản lý', amount: '1.215.000' },
      ],
    },
    {
      id: 'HD001',
      apartmentId: 'Đã thanh toán',
      month: '09/2024',
      total: '4.862.340',
      details: [
        { label: 'Phí môi trường', amount: '1.215.000' },
        { label: 'Phí điện', amount: '1.215.000' },
        { label: 'Phí nước', amount: '1.215.000' },
        { label: 'Phí quản lý', amount: '1.215.000' },
      ],
    },
  ];

  const renderBillDetails = (details) => {
    return details.map((item, index) => (
      <View key={index} style={styles.billDetail}>
        <Text style={styles.billDetailText}>{item.label}</Text>
        <Text style={styles.billDetailText}>{item.amount} VND</Text>
      </View>
    ));
  };

  const renderBills = () => {
    const filteredBills = bills.filter(
      (bill) => bill.apartmentId === selectedApartment
    );
    return filteredBills.map((bill) => (
      <View key={bill.id} style={styles.billContainer}>
        <View style={styles.billHeader}>
          <Text style={styles.billId}>{bill.id}</Text>
          <Text style={styles.billLocation}>{bill.location}</Text>
        </View>
        <Pressable style={styles.billSummary}>
          <Text style={styles.billMonth}>Hóa đơn tháng {bill.month}</Text>
          <Text style={styles.billTotal}>{bill.total} VND</Text>
        </Pressable>
        {renderBillDetails(bill.details)}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
            <Pressable onPress={()=>navigation.navigate('Home')}>
              <AntDesign name="arrowleft" size={24} color="White" style={styles.arowleft}/>
            </Pressable>
            <Text style={styles.headerText}>Chi tiết hóa đơn</Text>
        </View>

      {/* Apartment List */}
      <View style={styles.apartmentList}>
        {apartments.map((apt) => (
          <Pressable
            key={apt.id}
            style={[
              styles.apartmentButton,
              selectedApartment === apt.id && styles.apartmentButtonActive,
            ]}
            onPress={() => setSelectedApartment(apt.id)}
          >
            <Text style={styles.apartmentText}>{apt.id}</Text>
          </Pressable>
        ))}
      </View>

      {/* Bill List */}
      <View style={styles.billList}>{renderBills()}</View>

      {/* Payment Button */}
      <View style={styles.footer}>
        <Pressable onPress={()=>navigation.navigate('Payment')} 
          style={styles.payButton}         
        >
          <MaterialIcons name="payment" size={24} color="black" />
          <Text style={styles.payButtonText}>Thanh toán</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#a1d2f5',
    width: '100%',
    height: 80,
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  arowleft:{
    color: 'black',    
    marginTop: 5,  
  },
  apartmentList: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
  apartmentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '40%',
  },
  apartmentButtonActive: {
    backgroundColor: '#a1d2f5',
  },
  apartmentText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    
  },
  apartmentName: {
    marginLeft: 5,
    color: '#888',
  },
  billList: {
    padding: 10,
  },
  billContainer: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
  },
  billHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  billId: {
    fontWeight: 'bold',
  },
  billLocation: {
    color: '#888',
  },
  billSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  billMonth: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  billTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  billDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  billDetailText: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  payButton: {
    backgroundColor: '#a1d2f5',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  payButtonText: {
    marginLeft: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
