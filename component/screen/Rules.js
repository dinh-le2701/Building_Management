import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Rules = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowLeft} />
        </Pressable>
        <Text style={styles.headerText}>Chi Tiết Nội Quy</Text>
      </View>
      
      <ScrollView style={styles.contentRule}>
        <Text style={styles.title}>NỘI QUY QUẢN LÝ, SỬ DỤNG NHÀ CHUNG CƯ VINHOMES SERENITY</Text>

        <Text style={styles.sectionTitle}>Điều 1. Quy định đối với chủ sở hữu, người sử dụng, người tạm trú và khách ra vào nhà chung cư</Text>
        <Text style={styles.detail}>1. Chủ sở hữu nhà chung cư phải chấp hành nghiêm chỉnh Quy chế quản lý, sử dụng nhà chung cư do Bộ Xây dựng ban hành và Bản nội quy này.</Text>
        <Text style={styles.detail}>2. Khách ra vào nhà chung cư phải đăng ký, xuất trình giấy tờ chứng minh nhân thân tại quầy lễ tân (nếu có) hoặc tại tổ bảo vệ và phải tuân thủ sự hướng dẫn của lễ tân hoặc bảo vệ nhà chung cư. Trong trường hợp cần thiết, lễ tân hoặc bảo vệ nhà chung cư được giữ các giấy tờ chứng minh nhân thân của khách ra vào nhà chung cư để phục vụ cho việc kiểm soát an ninh, an toàn của nhà chung cư. Đối với khu vực dành cho văn phòng, dịch vụ, thương mại thì không cần phải đăng ký, xuất trình giấy tờ chứng minh nhân thân này.</Text>
        <Text style={styles.detail}>3. Người đến tạm trú tại căn hộ phải đăng ký danh sách với quầy lễ tân (nếu có) hoặc tại tổ bảo vệ và có trách nhiệm đăng ký tạm trú tại cơ quan công an phường sở tại theo quy định.</Text>
        <Text style={styles.detail}>4. Người sử dụng căn hộ, người tạm trú phải chịu trách nhiệm trước pháp Luật về các hành vi vi phạm Quy chế quản lý, sử dụng nhà chung cư và Bản nội quy này.</Text>
        <Text style={styles.detail}>5. Các quy định áp dụng đối với nhân viên làm việc tại khu văn phòng dịch vụ, thương mại: do chủ đầu tư; Hội nghị nhà chung cư quy định thêm cho phù hợp với từng nhà chung cư (nếu có).</Text>

        <Text style={styles.sectionTitle}>Điều 2. Quy định về việc sử dụng phần sở hữu chung của nhà chung cư</Text>
        <Text style={styles.detail}>1. Sử dụng thang máy và các thiết bị sử dụng chung theo đúng mục đích, công năng thiết kế sử dụng.</Text>
        <Text style={styles.detail}>2. Không được làm hư hỏng hoặc có hành vi vi phạm đến tài sản chung của nhà chung cư.</Text>
        <Text style={styles.detail}>3. Tuân thủ đầy đủ các quy định về an toàn phòng cháy, chữa cháy của nhà chung cư.</Text>
        <Text style={styles.detail}>4. Các quy định khác: Do hội nghị nhà chung cư quy định thêm cho phù hợp với từng nhà chung cư.</Text>

        <Text style={styles.sectionTitle}>Điều 3. Quy định về việc sửa chữa, thay đổi hoặc lắp đặt thêm trong căn hộ, phần diện tích khác thuộc sở hữu riêng</Text>
        <Text style={styles.detail}>1. Cấm các hành vi gây mất trật tự, an toàn, cháy, nổ trong nhà chung cư; kinh doanh vật liệu gây cháy, nổ và ngành, nghề gây nguy hiểm đến tính mạng, tài sản của người sử dụng nhà chung cư theo quy định của pháp luật về phòng cháy, chữa cháy và quy định khác của pháp luật có liên quan.</Text>
        <Text style={styles.detail}>2. Khi gặp sự cố có thể gây nguy hiểm đến tính mạng và an toàn tài sản trong nhà chung cư thì chủ sở hữu, người sử dụng phải thông báo ngay cho Ban quản trị, đơn vị quản lý nhà chung cư để xử lý.</Text>
        <Text style={styles.detail}>3. Trường hợp gặp sự cố khẩn cấp, cần thiết phải sơ tán người ra khỏi nhà chung cư thì phải thực hiện theo hướng dẫn trên loa phát thanh hoặc biển chỉ dẫn thoát hiểm hoặc hướng dẫn của bảo vệ, đơn vị có thẩm quyền để di chuyển người đến nơi an toàn.</Text>

        <Text style={styles.sectionTitle}>Điều 4. Quy định về phòng, chống cháy nổ trong nhà chung cư</Text>
        <Text style={styles.detail}>1. Ban quản trị, đơn vị quản lý vận hành nhà chung cư phải thông báo công khai các thông tin, các nội dung liên quan đến quản lý, sử dụng nhà chung cư trên bản tin hoặc bảng thông báo hoặc phương tiện thông tin khác của nhà chung cư.</Text>
        <Text style={styles.detail}>2. Các nội quy về phòng cháy, chữa cháy phải được gắn đúng nơi quy định; nội quy sử dụng thang máy phải được gắn đúng nơi quy định để đảm bảo việc sử dụng được an toàn, thuận tiện.</Text>

        <Text style={styles.sectionTitle}>Điều 5. Quyền và nghĩa vụ của chủ sở hữu, người sử dụng nhà chung cư</Text>
        <Text style={styles.detail}>1. Yêu cầu Ban quản trị và đơn vị quản lý vận hành nhà chung cư cung cấp thông tin, các nội dung liên quan đến quản lý, sử dụng nhà chung cư.</Text>
        <Text style={styles.detail}>2. Chủ sở hữu nhà chung cư có trách nhiệm đóng bảo hiểm cháy, nổ theo quy định của pháp Luật.</Text>
        <Text style={styles.detail}>3. Chấp hành nghiêm chỉnh các quy định của Bản nội quy này và Quy chế quản lý, sử dụng nhà chung cư do Bộ Xây dựng ban hành.</Text>
        <Text style={styles.detail}>4. Đóng đầy đủ, đúng thời hạn kinh phí quản lý vận hành nhà chung cư và các chi phí khác theo quy định của pháp Luật và theo thỏa thuận với các nhà cung cấp dịch vụ.</Text>

        <Text style={styles.sectionTitle}>Điều 6. Xử lý các hành vi vi phạm</Text>
        <Text style={styles.detail}>1. Thành viên Ban quản trị, đơn vị quản lý vận hành nhà chung cư, chủ sở hữu, người sử dụng, người tạm trú và khách ra vào nhà chung cư nếu có hành vi vi phạm các quy định của Bản nội quy này hoặc vi phạm quy định của Quy chế quản lý, sử dụng nhà chung cư do Bộ Xây dựng ban hành thì tùy theo mức độ vi phạm sẽ bị xem xét, xử lý theo quy định của pháp Luật và phải bồi thường thiệt hại do hành vi vi phạm của mình gây ra.</Text>
        <Text style={styles.detail}>2. Thành viên Ban quản trị, đơn vị quản lý vận hành nhà chung cư, chủ sở hữu, người sử dụng phải nghiêm chỉnh chấp hành quyết định xử lý vi phạm của cơ quan, tổ chức có thẩm quyền.</Text>
      </ScrollView>
    </View>
  );
};

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
  arrowLeft: {
    color: 'black',    
    marginTop: 5,  
  },
  contentRule: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 15,
  },
  detail: {
    marginBottom: 5,
    lineHeight: 20,
  },
});

export default Rules;
