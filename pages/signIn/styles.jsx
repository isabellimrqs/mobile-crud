import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#eee',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    caixa:{
        width:'80%',
        borderWidth:1,
        borderRadius: 5,
        padding:8,
        fontSize:25,
        marginTop:10,
    },
    title:{
        fontSize: 40,
        fontWeight:'bold'
    },
    caixas:{
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    btnOk:{
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        width:'50%',
        height:50,
        backgroundColor:'lightblue',
        alignItems:'center',
        justifyContent:'center',
    },
})

export default styles