import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Reports = ({navigation}) => {

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
            <Pressable onPress={()=>navigation.navigate('Home')}>
              <AntDesign name="arrowleft" size={24} color="White" style={styles.arowleft}/>
            </Pressable>
            <Text style={styles.headerText}>Báo cáo</Text>
        </View>
    </View>
  );
};

export default Reports;

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
});
