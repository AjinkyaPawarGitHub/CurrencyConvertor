import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import { currencyByRupee } from '../constants';

type currencyBtnProps = PropsWithChildren<{
    name: string;
    value: number;
    flag: string;
    symbol: string;

}>

const CurrencyBtn = (props: currencyBtnProps): JSX.Element => {
    return (
        <View style={styles.btncontainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )

}

export default CurrencyBtn

const styles = StyleSheet.create
    ({
        btncontainer:
        {
            alignItems: 'center'

        },
        flag: {
            fontSize: 28,
            color: "#FFFFFF",
            marginBottom: 4
        },
        country: {
            fontSize: 14,
            color: "#2d3436",

        }
    })