import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#eee',
        flex:1
    },
    caixa:{
        width:'80%',
        height:40,
        borderColor: '#000',
        borderRadius:10,
        marginTop:10,
        padding: 10,
        backgroundColor:'#fff'
    },
    btn:{
        width:'40%',
        height:40,
        borderColor: '#000',
        borderRadius:10,
        marginTop:10,
        backgroundColor:'lightblue', 
        alignItems:'center',
        justifyContent:'center'
    },
    textBtn:{
        fontSize: 25,
    },
    textTitle:{
        fontSize: 50,
        fontWeight:'bold'
    },
    textInput:{
        padding:10,
    },
    textos:{
        width:'80%',
        height:40,
        borderColor: '#000',
        borderRadius:10,
        marginTop:10,
        backgroundColor:'#fff',
        padding: 10
    },

})

export default styles