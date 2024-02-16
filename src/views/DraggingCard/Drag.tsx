import React, { useRef, useState } from 'react'; 
import { 
	 PanResponder, Animated, 
	Text 
} from 'react-native'; 
import styles from './Style/Style';

interface IDrag{
    heading:string,
    paragraph:string,
}

const DragAndDropCard:React.FC<IDrag>=({heading,paragraph}:IDrag) => { 

	 
	const position = useRef(new Animated.ValueXY()).current; 

	const [dragging, setDragging] = useState(false); 

	const panResponder = useRef( 
		PanResponder.create({ 
			onStartShouldSetPanResponder: () => true, 
			onMoveShouldSetPanResponder: () => true, 
			onPanResponderGrant: () => { 
				setDragging(true); 
			}, 
			onPanResponderMove: Animated.event( 
				[ 
					null, 
					{ 
						dx: position.x, 
						dy: position.y, 
					}, 
				], 
				{ useNativeDriver: false } 
			), 
			onPanResponderRelease: () => { 
			
				setDragging(false); 
			}, 
		}) 
	).current; 

	return ( 
		<Animated.View 
			style={[ 
				styles.card, 
				{ 
					transform: position.getTranslateTransform(), 
					opacity: dragging ? 0.5 : 1, 
				}, 
			]} 
			{...panResponder.panHandlers} 
		> 
			<Text style={styles.heading}>{heading}</Text> 
			<Text style={styles.paragraph}>{paragraph}</Text> 
		</Animated.View> 
	); 
}; 




export default DragAndDropCard;
