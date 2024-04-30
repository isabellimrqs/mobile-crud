import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Página Home</Text>

            <Pressable style={styles.btn}
            onPress={() => navigation.navigate('Read')}>
                <Text style={styles.textBtn}>Read</Text>
            </Pressable>

            <Pressable style={styles.btn}
            onPress={() => navigation.navigate('Create')}>
                <Text style={styles.textBtn}>Create</Text>
            </Pressable>

            <Pressable style={styles.btn}
            onPress={() => navigation.navigate('Update')}>
                <Text style={styles.textBtn}>Update</Text>
            </Pressable>

            <Pressable style={styles.btn}
            onPress={() => navigation.navigate('Delete')}>
                <Text style={styles.textBtn}>Delete</Text>
            </Pressable>

        </View>

        
    )
}
