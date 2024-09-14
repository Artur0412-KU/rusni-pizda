import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CalendarItem from './common/CalendarItem';

export default function CalendarComponent() {
    return (
        <View style={styles.calendarContainer}>
            <Text style={{ color: 'orange', fontSize: 18, fontWeight: 'bold' }}>
                Станом на
            </Text>
            <CalendarItem />
        </View>
    );
}

const styles = StyleSheet.create({
    calendarContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 20,
        gap: 20,
    },
});
