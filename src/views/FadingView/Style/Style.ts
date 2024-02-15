import { StyleSheet } from "react-native";
const styles =StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        flexBasis: 100,
        justifyContent: 'space-evenly',
        marginVertical: 16,
      },
      btn:{
        alignSelf:'center',
        borderRadius:100,
        padding:15,
        backgroundColor:'#4700FF66',
      },
      btnText:{
        fontWeight:'600',
        color:'black',
        fontSize:16
      }

});
export default styles;