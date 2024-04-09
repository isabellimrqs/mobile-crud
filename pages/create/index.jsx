import axios from "axios"
import { useState } from "react"
import { View, Text, Pressable, TextInput } from "react-native"
import styles from "./styles"

export default function Create(){
    //const [userId, setUserId] = useState('')
    const [nome, setNome] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [cep, setCep] = useState('')
    const [email, setEmail] = useState('')
    const [numero, setNumero] = useState('')

    const inserir = () => {
        const dados = {
            'nome': nome,
            'rua': rua,
            'bairro': bairro,
            'cidade': cidade,
            'uf': uf,
            'cep': cep,
            'email': email,
            'numero': numero
        };
    
        axios.post('http://127.0.0.1:8000/api/usuarios', dados)
        .then((response)=>{
            setNome('')
            setRua('')
            setBairro('')
            setCidade('')
            setUf('')
            setCep('')
            setEmail('')
            setNumero('')
            console.log("cadastrado")
        })
        .catch((erro)=>{
            console.log(erro)
        });
    
    }


    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>Create</Text>

        
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
                onPress={inserir}
            >
                <Text style={styles.textBtn}>Ok</Text>
            </Pressable>
        </View>
    )
}