import React from 'react';
import { DefaultTheme } from '@react-navigation/native';
import colors from '../config/colors';

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.tertiary,
        background: colors.white,
    }
};