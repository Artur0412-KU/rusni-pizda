import React from 'react'
import { Image, ScrollView, StyleSheet, Text, SafeAreaView, View } from 'react-native'
import { data } from '../../data/data'
import List from './List'

export default function Stats() {
    const firstDate = new Date("2022-02-24") // 10th May, 2022
    const secondDate = new Date() // today, 14th May, 2022

    const millisecondsDiff = secondDate.getTime() - firstDate.getTime()

    const daysDiff = Math.round(millisecondsDiff / (24 * 60 * 60 * 1000));
  return (

    <View style = {styles.listContainer}>
        <Text style = {styles.title}>{daysDiff}-й день війни </Text>
        <ScrollView>
           {Object.entries(data.data).map(([key, item]) => (
              <List key={key} item={item}/>
            ))} 
        </ScrollView>
        
    </View>    
    
  )
}


const styles = StyleSheet.create({
    listContainer: {
        paddingTop: 20,
        flex: 1,
        flexGrow: 10,
        maxHeight: '40%'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'orange'
    }
})