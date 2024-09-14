import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import { data, terms } from '../../../data/data';
import List from '../../statsList/List';
import { useSelector } from 'react-redux';

export default function DateInfo() {
    const combinedData = Object.keys(data.data.stats).map((key) => ({
        key,
        statsValue: data.data.stats[key],
        increaseValue: data.data.increase[key],
        title: terms.data[key].title,
        icon: terms.data[key].icon,
    }));

    const test = useSelector((state) => state.date);
    console.log(test);

    return (
        <View style={styles.listContainer}>
            <ScrollView>
                {combinedData.map((item) => (
                    <List key={item.key} item={item} />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        paddingTop: 20,
        flex: 1,
        flexGrow: 10,
        maxHeight: '60%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'orange',
        marginBottom: 10,
    },
});
