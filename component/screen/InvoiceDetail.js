import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const InvoiceDetail = ({ route, navigation }) => {
  const { bill } = route.params;

  const calculateTotalCost = () => {
    let total = 0;
    bill.details.forEach((detail) => {
      total += parseInt(detail.amount.replace(/\./g, '')); 
    });
    return total.toLocaleString('vi-VN');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Invoice')}>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowLeft} />
        </Pressable>
        <Text style={styles.headerTitle}>Chi tiết hoá đơn</Text>
      </View>

      {/* Invoice Information */}
      <View style={styles.invoiceInfo}>
        <Text style={styles.buildingName}>Bắc Hà Tower</Text>
        <Text style={styles.apartmentInfo}>Căn hộ: 713 T01</Text>
        <View style={styles.totalAmountRow}>
          <Text style={styles.totalAmountText}>Tổng tiền:</Text>
          <Text style={styles.totalAmountValue}>{calculateTotalCost()}đ</Text>
          <Text style={styles.paymentStatus}>
            {bill.apartmentId === 'Chưa thanh toán' ? 'Chưa thanh toán' : 'Đã thanh toán'}
          </Text>
        </View>
        <View style={styles.dueDateRow}>
          <Text>Kỳ thanh toán:</Text>
          <Text>{bill.month}</Text>
          <Text>Hạn thanh toán:</Text>
          <Text>{bill.dueDate ? bill.dueDate : 'Không có'}</Text>
        </View>
      </View>

      {/* Bill Details */}
      <ScrollView style={styles.detailsContainer}>
        {bill.details.map((detail, index) => (
          <View key={index} style={styles.detailItem}>
            <Text style={styles.detailTitle}>{detail.label}</Text>
            <Text style={styles.detailAmount}>{detail.amount}đ</Text>
          </View>
        ))}
      </ScrollView>

      {/* Payment Button */}
      {bill.apartmentId === 'Chưa thanh toán' && (
        <Pressable style={styles.payButton} onPress={()=>navigation.navigate('Payment')} >
          <Text style={styles.payButtonText}>THANH TOÁN</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    backgroundColor: '#a1d2f5',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  arrowLeft: {
    color: 'black',
    marginTop: 5,
  },
  invoiceInfo: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  buildingName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  apartmentInfo: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  totalAmountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  totalAmountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalAmountValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009688',
  },
  paymentStatus: {
    fontSize: 14,
    color: '#d32f2f',
  },
  dueDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  detailsContainer: {
    padding: 16,
  },
  detailItem: {
    marginBottom: 16,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009688',
  },
  detailAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#009688',
    marginBottom: 8,
  },
  payButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    alignItems: 'center',
    margin: 16,
    borderRadius: 4,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InvoiceDetail;
