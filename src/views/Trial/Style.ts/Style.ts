import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');
const height = (width * 14) / 20;

const styles = StyleSheet.create({
	container: {
		width,
		height,
		backgroundColor: '#272',
		borderRadius: 10,
		overflow: 'hidden',
	},
	imageContainer: {
		width,
		height,
		borderRadius: 10,
		overflow: 'hidden',
	},
	image: {
		width,
		height,
		resizeMode: 'cover',
		borderRadius: 10,
		borderWidth: 4,
		borderColor: '#ff0000',
	},
	pagination: {
		flexDirection: 'row',
		position: 'absolute',
		bottom: 20,
		alignSelf: 'center',
	},
	paginationDot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: '#6b52ae',
		margin: 8,
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContent: {
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 20,
		width: width - 40,
		alignItems: 'center',
	},
	modalTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#6b52ae',
	},
	modalDescription: {
		fontSize: 18,
		textAlign: 'center',
		marginBottom: 20,
		color: '#555',
	},
	closeButton: {
		backgroundColor: '#4a3',
		padding: 12,
		borderRadius: 8,
		alignSelf: 'stretch',
		alignItems: 'center',
		marginTop: 10,
	},
	closeButtonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16,
	},
});

export default styles;