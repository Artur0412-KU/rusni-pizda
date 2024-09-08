import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import Calendar from './components/calendar/Calendar';
import Stats from './components/statsList/Stats';
import DonateCarousel from './components/carousel/carousel';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textSubtitle}>Генеральний штаб ЗС України інформує</Text>
        <Text style={styles.title}>Загальні бойові втрати російського окупанта</Text>
      </View>
      <Calendar date="8 вересня 2024"/>
      <StatusBar style="light" />
      <Stats/>
      <DonateCarousel/>
      <Footer/>
    </View>
    

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4e4634',
    justifyContent: 'center',
    paddingTop: 70,
    padding: 10
  },
  textContainer: {
    alignItems: 'flex-start',
    gap: 20,
  },
  textSubtitle: {
    fontSize: 16,
    color: '#fff'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'orange',
  }
});
