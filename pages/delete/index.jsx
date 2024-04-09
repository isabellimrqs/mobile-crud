import axios from "axios"
import { useState } from "react"
import { View, Text, Pressable, TextInput } from "react-native"
import styles from "./styles"

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

    const buscar = ()=>{
        axios.get('http://127.0.0.1:8000/api/usuario/'+userId)
        .then((response)=>{
            setNome(response.data.nome)
            setRua(response.data.rua)
            setBairro(response.data.bairro)
            setCidade(response.data.cidade)
            setUf(response.data.uf)
            setCep(response.data.cep)
            setEmail(response.data.email)
            setNumero(response.data.numero)
        })
        .catch((erro)=>{
            console.log(erro)
        })
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

    const deletar = () => {
    axios.delete('http://127.0.0.1:8000/api/usuario/' + userId, { data: dados })
        .then((response) => {
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
        })
        .catch((erro) => {
            console.log(erro);
        });
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