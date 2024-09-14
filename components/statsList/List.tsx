import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { statistics } from '../../api';

export default function List({ image, number, increase, title }) {
    const [statistInfo, setStatisctInfo] = useState<any[]>([]);

    return (
        <View style={styles.listContainer}>
            <View style={styles.image}>
                <SvgUri uri={image} width={50} height={50} />
            </View>

            <View style={styles.textContainer}>
                <View style={styles.increaseContainer}>
                    <Text style={styles.title} numberOfLines={2}>
                        {number}
                    </Text>
                    <Text style={styles.title}>(+{increase})</Text>
                </View>
                <Text style={styles.title}>{title}</Text>
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
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    increaseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
});
