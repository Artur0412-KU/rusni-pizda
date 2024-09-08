import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Calendar({date}) {
  return (
    <View style = {styles.calendarContainer}>
        <Text style = {{color: '#fff', fontSize: 16, fontWeight: '600'}}>Станом на </Text>
        <View style = {styles.calendar}>
          <AntDesign name='left' size={18} onPress={() => alert('Left')}/>
          <Text style = {{fontWeight: 'bold'}}>{date}</Text>
          <AntDesign name='right' size={18} onPress={() => alert('Right')}/>
        </View>
        
      </View>
  )
}

const styles = StyleSheet.create({
    calendarContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 10,
      gap: 20
    },
    calendar: {
      backgroundColor: '#fff',
      padding: 10,
      alignItems: 'center',
      gap: 20,
      flexDirection: 'row',
      borderRadius: 20
    }
  });
