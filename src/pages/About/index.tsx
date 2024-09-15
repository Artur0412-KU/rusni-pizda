import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Footer from '../../components/footer/Footer';
import Links from '../../components/about-me/Links';
import { linksData } from '../../data/data';

export default function About() {
    return (
        <SafeAreaView style={styles.container}>
            {linksData.map((item) => {
                return (
                    <Links key={item.id} link={item.link} title={item.title} />
                );
            })}
            <Footer />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4e4634',
        flex: 1,
        justifyContent: 'flex-start',
        padding: 10,
        paddingRight: 30,
    },
});
