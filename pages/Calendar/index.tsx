import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CalendarComponent from '../../components/calendar/Calendar';
import Footer from '../../components/footer/Footer';

export default function Calendar() {
    return (
        <SafeAreaView style={styles.container}>
            <CalendarComponent date={'09 вересня 2024'}/>
            <Footer/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4e4634',
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
        paddingRight: 30,
    },
});
