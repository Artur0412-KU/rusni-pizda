import { A } from '@expo/html-elements';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>
                Made with ❤️.{' '}
                <A href="https://github.com/Artur0412-KU">Artur0412-KU</A>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingTop: 380,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
