import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styles from './styles'

export default function Delete(){
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Página Delete</Text>
            <Text>{codigo}</Text>
        </View>
    )
}
