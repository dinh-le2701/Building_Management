import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Report = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="arrowleft" size={24} color="White" style={styles.arrowleft} />
                </Pressable>
                <Text style={styles.headerText}>Báo Cáo</Text>
            </View>

            {/* Content */}
            {/* ... */}

            {/* Footer */}
            <View style={styles.footer}>
                <Pressable style={styles.btn_create_request} onPress={() => navigation.navigate('CreateReport')}>
                    <Text style={styles.text_create_request}>TẠO BÁO CÁO</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Report;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'space-between',
        flexDirection: 'column',
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
    arrowleft: {
        color: 'black',
        marginTop: 5,
    },
    footer: {
        padding: 16,
        backgroundColor: '#f5f5f5',
        justifyContent: 'flex-end',
    },
    btn_create_request: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_create_request: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});