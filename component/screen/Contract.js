import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Contract = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowleft} />
        </Pressable>
        <Text style={styles.headerText}>Chi Tiết Hợp Đồng</Text>
      </View>
      {/* Contract Content */}
      <ScrollView style={styles.content_contract}>
        <View style={styles.title}>
          <Text style={styles.centerText}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Text>
          <Text style={styles.centerText}>Độc lập - Tự do - Hạnh phúc</Text>
        </View>
        <Text style={styles.centerText}>........., Ngày....... Tháng ....... Năm ...........</Text>
        <Text style={styles.contractTitle}>HỢP ĐỒNG THUÊ CĂN HỘ CHUNG CƯ</Text>

        {/* BÊN CHO THUÊ (Bên A) */}
        <Text style={styles.sectionTitle}>BÊN CHO THUÊ (Bên A):</Text>
        <Text>Ông/Bà: .......................................................</Text>
        <Text>Số CCCD: ............ Cơ quan cấp: ........... Ngày cấp: ..........</Text>
        <Text>Địa chỉ: ......................................................</Text>
        <Text>Điện thoại: ..................................................</Text>

        {/* BÊN THUÊ (Bên B) */}
        <Text style={styles.sectionTitle}>BÊN THUÊ (Bên B):</Text>
        <Text>Ông/Bà: .......................................................</Text>
        <Text>Số CCCD: ............ Cơ quan cấp: ........... Ngày cấp: ..........</Text>
        <Text>Địa chỉ: ......................................................</Text>
        <Text>Điện thoại: ..................................................</Text>

        {/* Điều khoản hợp đồng */}
        <Text style={styles.sectionTitle}>ĐIỀU 1: ĐỐI TƯỢNG VÀ NỘI DUNG CỦA HỢP ĐỒNG</Text>
        <Text>1.1. Bên A cho Bên B thuê căn hộ tại địa chỉ: [Số nhà, tên đường, phường/xã, Thành phố/Quận/Huyện, Tỉnh]</Text>
        <Text>1.2. Mục đích thuê: Bên B thuê căn hộ để sử dụng vào mục đích: ......................................................</Text>

        <Text style={styles.sectionTitle}>ĐIỀU 2: THỜI HẠN THUÊ CĂN HỘ</Text>
        <Text>Thời hạn thuê là: .... năm.</Text>

        <Text style={styles.sectionTitle}>ĐIỀU 3: GIÁ THUÊ, PHƯƠNG THỨC VÀ THỜI HẠN THANH TOÁN</Text>
        <Text>3.1. Giá thuê: .... Đồng/tháng.</Text>
        <Text>3.2. Chi phí sử dụng điện, nước, điện thoại do Bên B thanh toán cho nhà cung cấp.</Text>
        <Text>3.3. Phương thức thanh toán: Thanh toán theo kỳ .... tháng một lần.</Text>

        <Text style={styles.sectionTitle}>ĐIỀU 4: ĐẶT CỌC</Text>
        <Text>Bên B đặt cọc cho Bên A số tiền là: .... Đồng.</Text>

        <Text style={styles.sectionTitle}>ĐIỀU 5: CHO THUÊ LẠI CĂN HỘ</Text>
        <Text>Bên B không có quyền cho thuê lại căn hộ trừ khi có sự đồng ý bằng văn bản của Bên A.</Text>

        <Text style={styles.sectionTitle}>ĐIỀU 6: QUYỀN VÀ NGHĨA VỤ CỦA BÊN A</Text>
        <Text>6.1. Quyền của Bên A: Nhận tiền thuê đúng hạn, yêu cầu sửa chữa các hư hỏng do Bên B gây ra,...</Text>
        <Text>6.2. Nghĩa vụ của Bên A: Bàn giao căn hộ, đảm bảo Bên B sử dụng ổn định trong thời gian thuê,...</Text>

        <Text style={styles.sectionTitle}>ĐIỀU 7: QUYỀN VÀ NGHĨA VỤ CỦA BÊN B</Text>
        <Text>7.1. Quyền của Bên B: Nhận bàn giao căn hộ, đơn phương chấm dứt hợp đồng khi Bên A vi phạm,...</Text>
        <Text>7.2. Nghĩa vụ của Bên B: Trả tiền thuê đúng hạn, sử dụng căn hộ đúng mục đích,...</Text>

        <Text style={styles.sectionTitle}>ĐIỀU 8: CHẤM DỨT HỢP ĐỒNG</Text>
        <Text>Hợp đồng chấm dứt khi xảy ra một trong các trường hợp: Hết thời hạn, thỏa thuận chấm dứt trước,...</Text>

        <Text style={styles.sectionTitle}>ĐIỀU 9: PHƯƠNG THỨC GIẢI QUYẾT TRANH CHẤP</Text>
        <Text>Tranh chấp phát sinh sẽ được giải quyết bằng thương lượng, nếu không thành, sẽ khởi kiện theo pháp luật.</Text>

        <Text style={styles.sectionTitle}>ĐIỀU 10: CAM KẾT CỦA CÁC BÊN</Text>
        <Text>Bên A và Bên B chịu trách nhiệm trước pháp luật về những lời cam đoan đã thỏa thuận trong hợp đồng.</Text>

        <Text style={styles.sectionTitle}>ĐIỀU 11: ĐIỀU KHOẢN CUỐI CÙNG</Text>
        <Text>Hợp đồng có hiệu lực từ: ...........................................</Text>
        <View style={{flexDirection:'row', marginTop: 20}}>
          <View style={styles.text_signature1}>
            <Text style={styles.text_chothue}>BÊN CHO THUÊ</Text>
            <Text style={styles.luuy}>(Ký và ghi gõ họ tên)</Text>
          </View>
          <View style={styles.text_signature1}>
            <Text style={styles.text_thue}>BÊN CHO THUÊ</Text>
            <Text style={styles.luuy}>(Ký và ghi gõ họ tên)</Text>
          </View>
        </View>
       
        
      </ScrollView>
    </View>
  );
};

export default Contract;

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
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  arrowleft: {
    color: 'black',
    marginTop: 5,
  },
  content_contract: {
    padding: 15,
  },
  title: {
    alignItems: 'center',
    marginBottom: 10,
  },
  centerText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contractTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  signatures: {
    textAlign: 'center',
    marginTop: 30,
  },
  text_signature1:{
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_signature2:{
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text_chothue:{
    fontSize: 14,
    fontWeight: 'bold',
  },

  text_thue:{ 
    fontSize: 14,
    fontWeight: 'bold',
  },
  
});
