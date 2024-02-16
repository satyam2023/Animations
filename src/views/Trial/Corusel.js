// Image.js
import React, { useState, useEffect, useRef } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	Dimensions,
	TouchableOpacity,
	Animated,
	Modal,
} from 'react-native';
import styles from './Style.ts/Style';
const { width } = Dimensions.get('window');
const height = (width * 14) / 20;
const sliderImages = [
'../../assests/Image/Cricket.png',
'../../assests/Image/FootBall.png',
'../../assests/Image/VolleyBall.png',
'../../assests/Image/Cricket.png',
];
const ItemDetails = [
	{
		title: 'Cricket',
		description: 'It is Used To Play Cricket'},
	{
		title: 'FootBall',
		description: 'It is Used To Play Cricket',
	},
	{
		title: 'FootBall',
		description: 'It is Used To Play Cricket',
	},
	{
		title: 'FootBall',
		description: 'It is Used To Play Cricket',
	},
];
const ImageCarousel = () => {
	const [activeInd, setActiveInd] = useState(0);
	const [modalShow, setModalShow] = useState(false);
	const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
	const scrollX = new Animated.Value(0);
	const scrollViewRef = useRef();
	const imageClickFunction = (ind) => {
		setActiveInd(ind);
		setModalShow(true);
	};
	useEffect(() => {
		let inter;
		if (autoScrollEnabled) {
			inter = setInterval(() => {
				const newInd = (activeInd + 1) % sliderImages.length;
				setActiveInd(newInd);
				scrollViewRef.current.scrollTo({ x: newInd * width, animated: true });
			}, 4000);
		}
		return () => clearInterval(inter);
	}, [activeInd, autoScrollEnabled]);

	return (
		<View style={styles.container}>
			<ScrollView ref={scrollViewRef}
						horizontal
						pagingEnabled
						showsHorizontalScrollIndicator={false}
						onMomentumScrollEnd={(event) => {
							const newIndex = Math.floor
							(event.nativeEvent.contentOffset.x / width);
							setActiveInd(newIndex);
				}}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: false }
				)}>
				{sliderImages.map((image, index) => (
					<TouchableOpacity key={index} 
										activeOpacity={0.9} 
										style={styles.imageContainer} 
										onPress={() => imageClickFunction(index)}>
						<Image source={require('../../assests/Image/Cricket.png')} style={styles.image} />
					</TouchableOpacity>
				))}
			</ScrollView>
			<View style={styles.pagination}>
				{sliderImages.map((_, index) => (
					<Animated.View key={index}
								style={[styles.paginationDot,{
									opacity: scrollX.interpolate({
									inputRange: [
										(index - 1) * width,
										index * width,
										(index + 1) * width,
									],
									outputRange: [0.5, 1, 0.5],
									extrapolate: 'clamp',
								})}]}/>
				))}
			</View>
			<Modal animationType="slide"
				transparent={true}
				visible={modalShow}
				onRequestClose={() => setModalShow(false)}>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Text style={styles.modalTitle}>
							{ItemDetails[activeInd].title}
						</Text>
						<Text style={styles.modalDescription}>
							{ItemDetails[activeInd].description}
						</Text>
						<TouchableOpacity style={styles.closeButton}
										onPress={() => setModalShow(false)}>
							<Text style={styles.closeButtonText}>Close</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default ImageCarousel;
