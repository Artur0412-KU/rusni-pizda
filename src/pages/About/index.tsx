import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Footer from '../../components/footer/Footer';

export default function About() {
    return (
        <SafeAreaView style={styles.container}>
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
