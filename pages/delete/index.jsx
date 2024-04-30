import axios from "axios"
import { useState, useEffect } from "react"
import { View, Text, Pressable, TextInput } from "react-native"
import styles from "./styles"
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Delete(){
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
        .then((tokenX)=>{
            if(tokenX){
                setToken(tokenX)
                console.log("Token Delete: ", token);
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
        nome: nome,
        rua: rua,
        bairro: bairro,
        cidade: cidade,
        uf: uf,
        cep: cep,
        email: email,
        numero: numero
    };

    const deletar = async () => {
        try{
            const response = await axios.delete('http://127.0.0.1:8000/api/usuario/' + userId, 
            { 
                data: dados,
                headers: {
                    Authorization: `Bearer ${token}`
                }
             })
                console.log("excluído");
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
            <Text style={styles.textTitle}>Delete</Text>
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

            <Pressable
                style={styles.btn}
                onPress={deletar}
            >
                <Text style={styles.textBtn}>Excluir</Text>
            </Pressable>
        </View>
    )
}