import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view';
import { carouselData } from '../../data/data';
import { A } from '@expo/html-elements';

export default function DonateCarousel() {
  const pagerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next page
      setCurrentPage((prevPage) => {
        const nextPage = (prevPage + 1) % carouselData.length;
        pagerRef.current?.setPage(nextPage);
        return nextPage;
      });
    }, 3000); // Change page every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [carouselData.length]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Бажаєш збільшити стату?</Text>
      <PagerView style={styles.pagerView} initialPage={0} ref={pagerRef} onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>
        {carouselData.map((item, index) => (
          <View key={item.id} style={styles.page}>
            <A style={styles.linkTitle} href={item.link}>{item.title}</A>
          </View>
        ))}
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'orange',
  },
  pagerView: {
    width: '80%',
    height: 80, 
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 5,
  },
  linkTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',

  },
});


