import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from './styles'

export default function Create(){
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Página Create</Text>
            <Text>{codigo}</Text>
        </View>
    )
}
