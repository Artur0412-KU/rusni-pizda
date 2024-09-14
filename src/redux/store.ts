import { configureStore } from '@reduxjs/toolkit';
import statsSlice from './statsSlice';
import { data } from '../data/data';
import dateSlice, { changeDate } from './dateSlice';

export const store = configureStore({
    reducer: {
        stats: statsSlice,
        data: dateSlice,
    },
});
