import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, Image, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Apartment = ({ navigation }) => {
  const [isFaceIDEnabled, setFaceIDEnabled] = useState(true);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Acount')}>
          <AntDesign name="arrowleft" size={24} color="white" style={styles.arrowLeft} />
        </Pressable>
        <Text style={styles.headerTitle}>Thông tin căn hộ</Text>
      </View>
      <ScrollView style={styles.content}>

      </ScrollView>
    </View>
  );
};

export default Apartment;

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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  arrowLeft: {
    color: 'black',
    marginTop: 5,
  },

  content:{

  },

});
