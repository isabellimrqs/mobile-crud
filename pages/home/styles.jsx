import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#eee',
        alignItems: 'center', 
        justifyContent:'center',
        width: '100%',
        flex:1
    },
    txt:{
        fontSize: 30,
        fontWeight: 'bold'
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
        fontWeight: 500,
        color: "#fff"
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

})

export default styles