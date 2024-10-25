import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Pressable, ScrollView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

const CreateReport = ({navigation}) => {
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    const pickImages = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            Alert.alert("Permission required", "You need to grant permission to access the photo library.");
            return;
        }
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImages([...images, ...result.assets]);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => navigation.navigate('Report')}>
                    <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowLeft} />
                </Pressable>
                <Text style={styles.headerTitle}>Tạo Báo Cáo</Text>
            </View>
            <ScrollView style={styles.form} contentContainerStyle={{ paddingBottom: 16 }}>
                <Text style={styles.label}>Tiêu đề *</Text>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    placeholder="Nhập tiêu đề"
                    value={title}
                    onChangeText={setTitle}
                />

                <Text style={styles.label}>Loại phản ánh *</Text>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    placeholder="Nhập loại phản ánh"
                    value={category}
                    onChangeText={setCategory}
                />

                <Text style={styles.label}>Nội dung *</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Nhập nội dung"
                    multiline={true}
                    numberOfLines={4}
                    value={content}
                    onChangeText={setContent}
                />

                <View style={styles.imageContainer}>
                    {images.map((item, index) => (
                        <Image
                            key={index}
                            source={{ uri: item.uri }}
                            style={styles.imageIcon}
                        />
                    ))}
                </View>

                <TouchableOpacity style={styles.addImage} onPress={pickImages}>
                    <FontAwesome name="image" size={24} color="black" />
                    <Text>Thêm ảnh</Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>GỬI BÁO CÁO</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 16,
    },
    header: {
        padding: 16,
        backgroundColor: '#a1d2f5',
        alignItems: 'center',
        flexDirection:'row'
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
    form: {
        padding: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 12,
        fontSize: 15,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 8,
    },
    addImage: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        width: 80,
        height: 80,
        marginTop: 8,
    },
    imageIcon: {
        width: 80,
        height: 80,
        marginRight: 8,
        marginBottom: 8, 
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 16,
    },
    submitButton: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        alignItems: 'center',
        marginHorizontal: 16,
        borderRadius: 4,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CreateReport;
