import React, { useEffect, useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    SafeAreaView,
    View,
} from 'react-native';
// import { data, terms } from '../../data/data';
import List from './List';
import { useSelector } from 'react-redux';
import statsSlice from '../../../redux/statsSlice';
import { statistics, terms, warInfo } from '../../api/index';

export default function Stats() {
    const test = useSelector((state) => state.state);

    const [info, setInfo] = useState<any | null>(null);
    const [statistInfo, setStatistInfo] = useState<any | null>(null);
    const [termsInfo, setTermsInfo] = useState<any | null>(null);

    useEffect(() => {
        getInfo();
    }, []);

    const getInfo = async () => {
        const info = await warInfo();
        setInfo(info);

        const statistInfo = await statistics();
        setStatistInfo(statistInfo);
        statistics();

        const termsInfo = await terms();
        setTermsInfo(termsInfo);
        console.log('terms:', termsInfo);
    };
    return (
        <View style={styles.listContainer}>
            <Text>{test}</Text>
            <Text style={styles.title}>
                {info?.data?.current_day}-й день війни
            </Text>
            <ScrollView>
                <List
                    number={statistInfo?.data?.stats?.personnel_units}
                    title={termsInfo?.data?.personnel_units?.title}
                    increase={statistInfo?.data?.increase?.personnel_units}
                    image={termsInfo?.data?.personnel_units?.icon}
                />

                <List
                    number={statistInfo?.data?.stats?.tanks}
                    title={termsInfo?.data?.tanks?.title}
                    increase={statistInfo?.data?.increase?.tanks}
                    image={termsInfo?.data?.tanks?.icon}
                />

                <List
                    number={
                        statistInfo?.data?.stats?.armoured_fighting_vehicles
                    }
                    title={termsInfo?.data?.armoured_fighting_vehicles?.title}
                    increase={
                        statistInfo?.data?.increase?.armoured_fighting_vehicles
                    }
                    image={termsInfo?.data?.armoured_fighting_vehicles?.icon}
                />

                <List
                    number={statistInfo?.data?.stats?.artillery_systems}
                    title={termsInfo?.data?.artillery_systems?.title}
                    increase={statistInfo?.data?.increase?.artillery_systems}
                    image={termsInfo?.data?.artillery_systems?.icon}
                />

                <List
                    number={statistInfo?.data?.stats?.mlrs}
                    title={termsInfo?.data?.mlrs?.title}
                    increase={statistInfo?.data?.increase?.mlrs}
                    image={termsInfo?.data?.mlrs?.icon}
                />

                <List
                    number={statistInfo?.data?.stats?.aa_warfare_systems}
                    title={termsInfo?.data?.aa_warfare_systems?.title}
                    increase={statistInfo?.data?.increase?.aa_warfare_systems}
                    image={termsInfo?.data?.aa_warfare_systems?.icon}
                />

                <List
                    number={statistInfo?.data?.stats?.planes}
                    title={termsInfo?.data?.planes?.title}
                    increase={statistInfo?.data?.increase?.planes}
                    image={termsInfo?.data?.planes?.icon}
                />

                <List
                    number={statistInfo?.data?.stats?.helicopters}
                    title={termsInfo?.data?.helicopters?.title}
                    increase={statistInfo?.data?.increase?.helicopters}
                    image={termsInfo?.data?.helicopters?.icon}
                />

                <List
                    number={statistInfo?.data?.stats?.vehicles_fuel_tanks}
                    title={termsInfo?.data?.vehicles_fuel_tanks?.title}
                    increase={statistInfo?.data?.increase?.vehicles_fuel_tanks}
                    image={termsInfo?.data?.vehicles_fuel_tanks?.icon}
                />

                <List
                    number={statistInfo?.data?.stats?.warships_cutters}
                    title={termsInfo?.data?.warships_cutters?.title}
                    increase={statistInfo?.data?.increase?.warships_cutters}
                    image={termsInfo?.data?.warships_cutters?.icon}
                />

                <List
                    number={statistInfo?.data?.stats?.cruise_missiles}
                    title={termsInfo?.data?.cruise_missiles?.title}
                    increase={statistInfo?.data?.increase?.cruise_missiles}
                    image={termsInfo?.data?.cruise_missiles?.icon}
                />

                <List
                    number={statistInfo?.data?.stats?.uav_systems}
                    title={termsInfo?.data?.uav_systems?.title}
                    increase={statistInfo?.data?.increase?.uav_systems}
                    image={termsInfo?.data?.uav_systems?.icon}
                />

                <List
                    number={statistInfo?.data?.stats?.atgm_srbm_systems}
                    title={termsInfo?.data?.atgm_srbm_systems?.title}
                    increase={statistInfo?.data?.increase?.atgm_srbm_systems}
                    image={termsInfo?.data?.atgm_srbm_systems?.icon}
                />

                <List
                    number={statistInfo?.data?.stats?.submarines}
                    title={termsInfo?.data?.submarines?.title}
                    increase={statistInfo?.data?.increase?.submarines}
                    image={termsInfo?.data?.submarines?.icon}
                />
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
