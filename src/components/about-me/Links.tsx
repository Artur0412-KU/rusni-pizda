import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { A } from '@expo/html-elements';
import { FontAwesome } from '@expo/vector-icons';

export default function Links({ link, title }) {
    return (
        <View style={styles.link}>
            <A href={link} style={styles.text}>
                {title}
            </A>
            <FontAwesome name="arrow-right" size={24} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    link: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        gap: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'semibold',
    },
});
