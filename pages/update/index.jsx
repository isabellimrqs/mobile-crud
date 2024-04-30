import axios from "axios"
import { useState, useEffect } from "react"
import { View, Text, Pressable, TextInput } from "react-native"
import styles from "./styles"
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Update(){
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
        .then((tokenZ)=>{
            if(tokenZ){
                setToken(tokenZ)
                console.log("Token Update: ", token);
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
            console.log(erro)
        }
    }

    const dados = {
        'nome': nome,
        'rua': rua,
        'bairro': bairro,
        'cidade': cidade,
        'uf': uf,
        'cep': cep,
        'email': email,
        'numero': numero
    }

    const atualizar = async () => {
        try{
            const response = await axios.put('http://127.0.0.1:8000/api/usuario/' + userId, 
            dados,
            { 
                headers: {
                    Authorization: `Bearer ${token}`
                }
             })
                console.log("atualizado");
                setUserId('');
                setNome('');
                setRua('');
                setBairro('');
                setCidade('');
                setUf('');
                setCep('');
                setEmail('');
                setNumero('');
        }catch(e){
            console.log(e)
        }
            
            
};


    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Update</Text>

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

        
            <TextInput style={styles.textos} 
            onChangeText={(e)=>setNome(e)} 
            value={nome} 
            placeholder="Nome"/>

            <TextInput style={styles.textos} 
            onChangeText={(e)=>setRua(e)} 
            value={rua} 
            placeholder="Rua"/>

            <TextInput style={styles.textos} 
            onChangeText={(e)=>setBairro(e)} 
            value={bairro} 
            placeholder="Bairro"/>

            <TextInput style={styles.textos} 
            onChangeText={(e)=>setCidade(e)} 
            value={cidade} 
            placeholder="Cidade"/>

            <TextInput style={styles.textos} 
            onChangeText={(e)=>setUf(e)} 
            value={uf} 
            placeholder="UF"/>

            <TextInput 
            style={styles.textos} 
            onChangeText={(e)=>setCep(e)} 
            value={cep} 
            placeholder="CEP"/>

            <TextInput style={styles.textos} 
            onChangeText={(e)=>setEmail(e)} 
            value={email} 
            placeholder="Email"/>

            <TextInput style={styles.textos} 
            onChangeText={(e)=>setNumero(e)} 
            value={numero} 
            placeholder="Número"/>

            <Pressable
                style={styles.btn}
                onPress={atualizar}
            >
                <Text style={styles.textBtn}>Ok</Text>
            </Pressable>
        </View>
    )
}