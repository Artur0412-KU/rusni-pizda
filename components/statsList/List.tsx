import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const img ="https://e7.pngegg.com/pngimages/79/1008/png-clipart-kenny-mccormick-stan-marsh-kyle-broflovski-eric-cartman-south-park-the-stick-of-truth-parks-miscellaneous-orange-thumbnail.png"

export default function List({key, item,}) {
  return (
    <View key={key} style = {styles.listContainer}>
        <Image style = {styles.image}/>
        <Text style ={styles.title} numberOfLines={2}>{item.title}</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    width: 300
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#fff',
  }, 
  image: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    
  }
})
