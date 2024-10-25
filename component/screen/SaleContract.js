import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const SaleContract = ({ navigation }) => { 
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowleft} />
                </Pressable>
                <Text style={styles.headerText}>Chi Tiết Hợp Đồng</Text>
            </View>

            {/* Content Contract */}
            <ScrollView style={styles.content_contract}>
                <Text style={styles.title}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</Text>
                <Text style={styles.subtitle}>Độc lập - Tự do - Hạnh phúc</Text>
                <Text style={styles.contract_title}>HỢP ĐỒNG MUA BÁN CĂN HỘ CHUNG CƯ</Text>
                <Text style={styles.details}>Số: ......../HĐ</Text>
                <Text style={styles.date}>.............., ngày........ tháng........năm..........</Text>

                <Text style={styles.sectionTitle}>Hai bên chúng tôi gồm:</Text>

                <Text style={styles.subHeader}>BÊN BÁN NHÀ Ở (sau đây gọi tắt là Bên bán):</Text>
                <Text style={styles.detail}>- Công ty: ………………………………………………..................…………</Text>
                <Text style={styles.detail}>- Đại diện bởi Ông (Bà):..............................Chức vụ:..................</Text>
                <Text style={styles.detail}>- Số CCCD: .......................cấp ngày:...../...../......, tại.....................</Text>
                <Text style={styles.detail}>- Địa chỉ:................................................................................................</Text>
                <Text style={styles.detail}>- Điện thoại:..........................................Fax:.......................................</Text>
                <Text style={styles.detail}>- Số tài khoản: ................................tại Ngân hàng:..................... </Text>
                <Text style={styles.detail}>- Mã số thuế:.......................................................................................</Text>

                <Text style={styles.subHeader}>BÊN MUA NHÀ Ở (sau đây gọi tắt là Bên mua):</Text>
                <Text style={styles.detail}>- Ông (bà):...........................................................................................</Text>
                <Text style={styles.detail}>- Đại diện cho (nếu Bên mua là tổ chức):............................... .................................................................................................................</Text>
                <Text style={styles.detail}>- Số CCCD: .......................cấp ngày:...../...../......, tại....................</Text>                
                <Text style={styles.detail}>- Hộ khẩu thường trú:....................................................................</Text>
                <Text style={styles.detail}>- Địa chỉ liên hệ:................................................................................</Text>
                <Text style={styles.detail}>- Điện thoại:...........................................Fax:.....................................</Text>
                <Text style={styles.detail}>- Số tài khoản: ................................tại Ngân hàng:.................... </Text>
                <Text style={styles.detail}>- Mã số thuế (nếu có):...................................................................</Text>

                <Text style={styles.sectionTitle}>Hai bên chúng tôi thoả thuận ký kết hợp đồng này với các nội dung sau đây:</Text>

                <Text style={styles.sectionTitle}>Điều 1. Bên bán đồng ý bán và Bên mua đồng ý mua căn hộ với các đặc điểm dưới đây:</Text>
                <Text style={styles.subHeader}>1. Đặc điểm về căn hộ:</Text>
                <Text style={styles.detail}>Căn hộ số: ......................tầng (tầng có căn hộ):.....................</Text>
                <Text style={styles.detail}>Diện tích sàn căn hộ: .................................................m2</Text>
                <Text style={styles.detail}>Năm xây dựng:....................................... </Text>
                <Text style={styles.detail}>Căn hộ này thuộc tòa nhà chung cư số...............đường (hoặc phố) …………..........phường (xã)............................quận (huyện, thị xã, thị trấn, thành phố thuộc tỉnh)....................................tỉnh (thành phố).........................................</Text>

                <Text style={styles.subHeader}>2. Đặc điểm về đất xây dựng tòa nhà chung cư có căn hộ nêu tại khoản 1 Điều này:</Text>
                <Text style={styles.detail}>Thửa đất số:..............hoặc ô số:..............hoặc lô số:...............</Text>
                <Text style={styles.detail}>Tờ bản đồ số:..................................................................................</Text>
                <Text style={styles.detail}>Diện tích đất sử dụng chung:...................m2</Text>

                <Text style={styles.sectionTitle}>Điều 2. Giá bán căn hộ, phương thức và thời hạn thanh toán</Text>
                <Text style={styles.detail}>1. Giá bán căn hộ:..........................................................đồng</Text>
                <Text style={styles.detail}>(Bằng chữ:.........................................................................................).</Text>

                <Text style={styles.subHeader}>2. Phương thức thanh toán:</Text>
                <Text style={styles.detail}>Thanh toán bằng tiền Việt Nam thông qua hình thức (trả bằng tiền mặt hoặc chuyển khoản qua ngân hàng) ....................................................................................</Text>

                <Text style={styles.subHeader}>3. Thời hạn thanh toán:</Text>
                <Text style={styles.detail}>a) Thanh toán một lần vào ngày..........tháng........năm..........</Text>
                <Text style={styles.detail}>b) Trường hợp mua nhà ở theo phương thức trả chậm, trả dần thì thực hiện thanh toán bao gồm các đợt như sau:</Text>

                <Text style={styles.sectionTitle}>Điều 3. Chất lượng công trình nhà ở</Text>
                <Text style={styles.detail}>Bên bán cam kết bảo đảm chất lượng công trình (nhà chung cư trong đó có căn hộ nêu tại Điều 1 hợp đồng này) theo đúng yêu cầu trong thiết kế công trình và sử dụng đúng các vật liệu xây dựng căn hộ mà các bên đã thỏa thuận.</Text>

                <Text style={styles.sectionTitle}>Điều 4. Quyền và nghĩa vụ của Bên bán</Text>
                <Text style={styles.detail}>1. Quyền của Bên bán:</Text>
                <Text style={styles.detail}>a) Yêu cầu Bên mua trả đủ tiền mua nhà theo đúng thỏa thuận ghi trong hợp đồng;</Text>
                <Text style={styles.detail}>b) Yêu cầu Bên mua nhận nhà theo đúng thỏa thuận ghi trong hợp đồng;</Text>
                <Text style={styles.detail}>c) Có quyền ngừng hoặc yêu cầu nhà cung cấp ngừng cung cấp điện, nước và các dịch vụ tiện ích khác nếu Bên mua vi phạm Quy chế quản lý sử dụng nhà chung cư;</Text>
                <Text style={styles.detail}>d) Các quyền khác do hai bên thoả thuận:.............................</Text>

                <Text style={styles.detail}>2. Nghĩa vụ của Bên bán:</Text>
                <Text style={styles.detail}>a) Xây dựng hòan chỉnh cơ sở hạ tầng theo quy hoạch và nội dung hồ sơ dự án đã được phê duyệt;</Text>
                <Text style={styles.detail}>b) Thiết kế căn hộ và thiết kế công trình tuân thủ các quy định về pháp luật xây dựng;</Text>
                <Text style={styles.detail}>c) Kiểm tra, giám sát việc xây dựng căn hộ để đảm bảo chất lượng xây dựng;</Text>
                <Text style={styles.detail}>d) Bảo quản nhà ở đã bán trong thời gian chưa giao nhà ở cho Bên mua;</Text>

                <Text style={styles.sectionTitle}>Điều 5. Quyền và nghĩa vụ của Bên mua</Text>
                <Text style={styles.detail}>1. Quyền của Bên mua:</Text>
                <Text style={styles.detail}>a) Nhận bàn giao căn hộ có chất lượng với các thiết bị, vật liệu nêu tại bảng danh mục vật liệu xây dựng;</Text>
                <Text style={styles.detail}>b) Yêu cầu Bên bán làm thủ tục đề nghị cấp giấy chứng nhận quyền sở hữu;</Text>
                <Text style={styles.detail}>c) Được sử dụng các dịch vụ hạ tầng;</Text>
                <Text style={styles.detail}>d) Yêu cầu Bên bán hoàn thiện cơ sở hạ tầng;</Text>

                <Text style={styles.sectionTitle}>Điều 6. Thuế và các khoản phí, lệ phí phải nộp</Text>
                <Text style={styles.detail}>Các bên mua bán thoả thuận trách nhiệm thực hiện nghĩa vụ tài chính khi mua bán căn hộ như sau:</Text>
                <Text style={styles.detail}>1. Bên mua phải nộp các khoản thuế, phí liên quan đến việc chuyển nhượng quyền sử dụng đất, quyền sở hữu nhà ở theo quy định của pháp luật;</Text>

                <Text style={styles.sectionTitle}>Điều 7. Cam kết của các bên</Text>
                <Text style={styles.detail}>1. Bên bán cam kết:</Text>
                <Text style={styles.detail}>a) Tất cả giấy tờ liên quan đến tài sản, quyền lợi liên quan đến tài sản mà Bên bán đang sở hữu đều hợp pháp;</Text>

                <Text style={styles.detail}>2. Bên mua cam kết:</Text>
                <Text style={styles.detail}>a) Nhận bàn giao nhà tại địa điểm theo thỏa thuận trong hợp đồng;</Text>

                <Text style={styles.sectionTitle}>Điều 8. Các thỏa thuận khác</Text>
                <Text style={styles.detail}>1. Những vấn đề không được ghi trong hợp đồng này sẽ được giải quyết theo quy định của pháp luật;</Text>
                <Text style={styles.detail}>2. Hai bên cam kết thực hiện hợp đồng này đúng và đầy đủ.</Text>

                <Text style={styles.sectionTitle}>Điều 9. Hiệu lực hợp đồng</Text>
                <Text style={styles.detail}>Hợp đồng có hiệu lực kể từ ngày ký.</Text>

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0', 
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
        flex: 1,
        padding: 20,
        backgroundColor: 'white', 
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 20,
    },
    contract_title: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 10,
    },
    details: {
        textAlign: 'center',
        marginBottom: 10,
    },
    date: {
        textAlign: 'center',
        marginBottom: 20,
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 15,
    },
    subHeader: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 10,
    },
    detail: {
        marginBottom: 5,
        lineHeight: 20,
    },
    signature: {
        textAlign: 'right',
        marginTop: 30,
        marginBottom: 10,
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

export default SaleContract;
