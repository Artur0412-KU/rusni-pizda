import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    SafeAreaView,
    View,
} from 'react-native';
import { data, terms } from '../../data/data';
import List from './List';
import { useSelector } from 'react-redux';
import statsSlice from '../../redux/statsSlice';

export default function Stats() {
    const test = useSelector(state => state.state)
    const firstDate = new Date('2022-02-24'); // 10th May, 2022
    const secondDate = new Date(); // today, 14th May, 2022

    const millisecondsDiff = secondDate.getTime() - firstDate.getTime();

    const combinedData = Object.keys(data.data.stats).map((key) => ({
        key,
        statsValue: data.data.stats[key],
        increaseValue: data.data.increase[key],
        title: terms.data[key].title,
        icon: terms.data[key].icon,
    }));

    const daysDiff = Math.round(millisecondsDiff / (24 * 60 * 60 * 1000));
    return (
        <View style={styles.listContainer}>
            <Text>{test}</Text>
            <Text style={styles.title}>{daysDiff}-й день війни </Text>
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
