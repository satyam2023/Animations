import { StyleSheet } from "react-native";
const styles=StyleSheet.create({
    inputbox:{
        width:353,
        height:56,
        borderRadius:33,
        marginLeft:20,
        backgroundColor:'#F5F7F9',
        flexDirection:'row',
        marginBottom:16,
        marginHorizontal:'10%',
        borderWidth:1,
        borderColor:'#FFC0008C',
     },
     container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#6BFFCB6D',
      
      },
      input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
      },
      button: {
        marginTop:10,
        backgroundColor: '#56CC4C8C',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
      topPart:{
        position:'relative',
        bottom:100,
      },
      img:{
        transform:[{scale:3}],
      
      },
      form:{
        padding:10
      },
      InputImg:
        {height:56,width:40,resizeMode:'contain',marginLeft:7,borderRadius:100}
      
});
export  default styles;