import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container: { 
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: '#F5F5F5', 
	}, 
	cardContainer: { 
		marginTop: 20, 
	}, 
	card: { 
		width: '90%', 
		height: 100, 
		backgroundColor: '#FFF', 
		justifyContent: 'center', 
		alignItems: 'flex-start', 
		paddingHorizontal: 16, 
		paddingVertical: 10, 
		borderRadius: 10, 
		marginBottom: 10, 
		elevation: 5, 
	}, 
	heading: { 
		fontSize: 22, 
		fontWeight: 'bold', 
		color: "black", 
		marginBottom: 6, 
	}, 
	paragraph: { 
		fontSize: 14, 
	}, 
});

export default styles;