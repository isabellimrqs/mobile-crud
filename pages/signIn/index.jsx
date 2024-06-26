import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native'
import styles from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

export default function Login({ navigation }) {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [token, setToken] = useState(null)

    useEffect(()=> {
        AsyncStorage.setItem('token', token)
        .then(()=>{
            if(token != null){
                console.log("Token Sign In: ", token);
            }
        }).catch(error=>{
            console.log(error);
        })
    }, [token])

    const fetchToken = async () =>{
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/token/',
                {
                    username: usuario,
                    password: senha
                }
            )
            setToken(response.data.access)
            console.log('Token SignIn: ', token);
            navigation.navigate("Read")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
            </View>
            <TextInput
                placeholder='Usuário'
                onChangeText={setUsuario}
                value={usuario}
                style={styles.caixa}
            />
            <TextInput
                placeholder='Senha'
                onChangeText={setSenha}
                value={senha}
                style={styles.caixa}
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.btnOk}
                onPress={fetchToken}
            >
                <Text style={{ fontSize: 25 }}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btnOk}
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={{ fontSize: 25 }}>Sign Up</Text>
            </TouchableOpacity>

        </View>
    )
}