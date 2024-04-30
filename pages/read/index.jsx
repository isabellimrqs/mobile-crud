import axios from "axios"
import { useState,  useEffect } from "react"
import { View, Text, Pressable, TextInput } from "react-native"
import styles from "./styles"
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Read(){
    const [userId, setUserId] = useState('')
    const [nome, setNome] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [cep, setCep] = useState('')
    const [email, setEmail] = useState('')
    const [numero, setNumero] = useState('')
    const [token, setToken] = useState(null)
    
    useEffect(()=> {
        AsyncStorage.getItem('token')
        .then((tokenY)=>{
            if(tokenY){
                setToken(tokenY)
                console.log("Token Read: ", token);
            }
        }).catch(error=>{
            console.log(error);
        })
    }, [token])
    
    const buscar = async ()=>{
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/usuario/'+userId,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setNome(response.data.nome),
            setRua(response.data.rua),
            setBairro(response.data.bairro),
            setCidade(response.data.cidade),
            setUf(response.data.uf),
            setCep(response.data.cep),
            setEmail(response.data.email),
            setNumero(response.data.numero)    
        }catch(erro){
            setErro(erro.response.status)
            console.log(erro)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Read</Text>
            <TextInput
                placeholder="ID"
                style={styles.caixa}
                onChangeText={(e)=>setUserId(e)}
                value={userId}
            />
            <Pressable
                style={styles.btn}
                onPress={buscar}
            >
                <Text style={styles.textBtn}>Ok</Text>
            </Pressable>
            <Text style={styles.textos}>{nome}</Text>
            <Text style={styles.textos}>{rua}</Text>
            <Text style={styles.textos}>{bairro}</Text>
            <Text style={styles.textos}>{cidade}</Text>
            <Text style={styles.textos}>{uf}</Text>
            <Text style={styles.textos}>{cep}</Text>
            <Text style={styles.textos}>{email}</Text>
            <Text style={styles.textos}>{numero}</Text>
        </View>
    )
}