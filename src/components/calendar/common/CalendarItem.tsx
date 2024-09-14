import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import defineLocale from '../../../config/defineLocale';
import { useDispatch } from 'react-redux';
import { changeDate } from '../../../../redux/dateSlice';

export default function CalendarItem() {
    const [selected, setSelected] = useState('');
    const dispatch = useDispatch();

    const setDate = (day) => {
        setSelected(day.dateString);
        dispatch(changeDate(day.dateString));
    };
    return (
        <SafeAreaView>
            <Calendar
                locale={defineLocale()}
                style={styles.calendar}
                onDayPress={(day) => {
                    setDate(day);
                }}
                markedDates={{
                    [selected]: {
                        selected: true,
                        marked: true,
                    },
                }}
                accessibilityLanguage="de"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    calendar: {
        borderRadius: 10,
        width: 300,
        justifyContent: 'center',
        marginRight: 10,
    },
});
