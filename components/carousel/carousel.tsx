import React, { useEffect, useRef, useState } from "react";
import {
	Animated,
	Dimensions,
	FlatList,
	NativeScrollEvent,
	NativeSyntheticEvent,
	StyleSheet,
	View,
} from "react-native";
import { CarouselProps } from "./types";

const Carousel = <T,>({ data, renderItem, style }: CarouselProps<T>) => {
	const containerRef = useRef<View>(null);
	const [width, setWidth] = useState<number>(() => Dimensions.get("window").width);
	useEffect(() => {
		containerRef.current?.measure((x, y, width) => setWidth(width));
	}, [containerRef.current]);
	const [activeIndex, setActiveIndex] = useState(0);
	const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
		setActiveIndex(Math.round(e.nativeEvent.contentOffset.x / width));
	};

	return (
		<View ref={containerRef} style={StyleSheet.compose(styles.container, style)}>
			<FlatList
				data={data}
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				renderItem={(item) => <View style={[styles.item, { width }]}>{renderItem(item)}</View>}
				style={StyleSheet.compose(styles.list, style)}
				onScroll={handleScroll}
			/>
			<View style={styles.indicatorContainer}>
				{data.map((_, index) => (
					<View
						key={index}
						style={[styles.indicator, activeIndex === index ? styles.indicatorActive : undefined]}
					/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 200,
		direction: "ltr",
		backgroundColor: "white",
		paddingVertical: 10,
	},
	list: {
		direction: "ltr",
		flex: 1,
	},
	item: {
		direction: "ltr",
		height: "100%",
	},
	indicatorContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 10,
	},
	indicator: {
		width: 6,
		height: 6,
		borderRadius: 3,
		backgroundColor: "#888",
		marginHorizontal: 3,
	},
	indicatorActive: {
		transform: [{ scale: 1.4 }],
		backgroundColor: "#666",
	},
});

export default Carousel;
