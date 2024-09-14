import React, { useEffect } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Stats from '../../components/statsList/Stats';
import DonateCarousel from '../../components/carousel/carousel';
import { StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addStats } from '../../redux/statsSlice';
import { statistics, warInfo } from '../../api';

export default function Home() {
    const dispatch = useDispatch();
    const test = 'test';

    useEffect(() => {
        dispatch(addStats(test));
    });

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textSubtitle}>
                    🔥 Генеральний штаб ЗС України інформує
                </Text>
                <Text style={styles.title}>
                    Загальні бойові втрати російського окупанта
                </Text>
            </View>
            <Stats />
            <DonateCarousel />
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4e4634',
        justifyContent: 'center',
        paddingTop: 70,
        padding: 10,
    },
    textContainer: {
        alignItems: 'flex-start',
        gap: 20,
    },
    textSubtitle: {
        fontSize: 16,
        color: '#fff',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'orange',
    },
});
