import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const InvoiceDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.header}>
           <Pressable onPress={()=> navigation.navigate('Notification')} styles={{}}>
                <AntDesign name="arrowleft" size={24} color="White" style={styles.arowleft}/>
           </Pressable>
            
            <Text style={styles.text_header}>Chi tiết hóa đơn</Text>
        </View>
            
      </View>
      <View style={styles.content}>
         <Text>Hóa đơn Chung cư Tháng 10/2024</Text>
         <Text>Căn hộ: CH001</Text>
         <Text>Kỳ thanh toán</Text>
         <Text>10/2024</Text>
         <Text>Hạn thanh toán</Text>
         <Text>10/10/2024</Text>
         <Text>Tiền nước</Text>
         <Text>(01/09/2024 - 31/09/2024)</Text>
         <Text>Chỉ số đầu kỳ: 125</Text>
         <Text>Chỉ sô cuối kỳ: 136</Text>
         <Text>Số lượng tiêu thụ: 11 m3</Text>
         <Text>Giá nước:14.000/tháng </Text>
         <Text>Tổng tiền: 154.000đ</Text>
      </View>
      <Pressable style={styles.btn_payment} onPress={()=>navigation.navigate('Payment')}>
        <Text style={styles.text_payment}>Thanh toán</Text>
      </Pressable>
    </View>
  );
}
export default InvoiceDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    
    header: {
        backgroundColor: '#a1d2f5',
        width: '100%',
        height: 80,
        top: 0,
        position: 'absolute',
        flexDirection:'row'
    },
    text_header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 30,
        marginLeft: 80,
        
    },
    
    arowleft:{
        color: 'white',
        marginLeft: 10, 
        marginTop:30,       
    },

    content:{
        marginTop: 100, 
    },
    btn_payment:{
        width: 150,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 5,
        shadowRadius:2,
        shadowColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 100,
        
      },
    
     text_payment:{
        color: 'white',
        fontWeight: '500',
        fontSize:18,
      },


});
