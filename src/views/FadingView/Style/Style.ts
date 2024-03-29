import { StyleSheet } from "react-native";
const styles =StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'black'
      },
      fadingContainer: {
        position:'absolute',
        bottom:0,
        right:0,
        width:'100%',
        height:'40%',
        padding: 20,
        backgroundColor: '#DB4AF826',
      },
      fadingText: {
        fontSize: 20,
        fontWeight:'600',
        textAlign:'center',
        color:'black'
      },
      buttonRow: {
        position:'absolute',
        bottom:0,
        width:'100%',
        padding:10,
      },
      btn:{
        alignSelf:'center',
        width:100,
        height:100,
        borderRadius:100,
        padding:5,
        backgroundColor:'#4700FF66',
      },
      btnText:{
        fontWeight:'600',
        color:'black',
        fontSize:70,
        alignSelf:'center',
        marginTop:-5,
      }

});
export default styles;