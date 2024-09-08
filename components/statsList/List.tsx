import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

export default function List({ item }) {
    return (
        <View style={styles.listContainer}>
            <View style={styles.image}>
                <SvgUri uri={item.icon} width={50} height={50} />
            </View>

            <View style={styles.textContainer}>
                <View style={styles.increaseContainer}>
                    <Text style={styles.title} numberOfLines={2}>
                        {item.statsValue}
                    </Text>
                    <Text style={styles.title}>(+{item.increaseValue})</Text>
                </View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        width: 300,
    },
    textContainer: {
        gap: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    image: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    increaseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
});
