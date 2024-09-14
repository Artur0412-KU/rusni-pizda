import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CalendarComponent from '../../components/calendar/Calendar';
import Footer from '../../components/footer/Footer';
import DateInfo from '../../components/calendar/common/DateInfo';

export default function Calendar() {
    return (
        <SafeAreaView style={styles.container}>
            <CalendarComponent />
            <DateInfo />
            <Footer />
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
