import React, {useMemo, useState} from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItemInfo,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Animated,
  Platform,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {DummyDataObject} from 'scr/types/types';
import {height, width} from 'styles';

/*****************************/

const ITEM_WIDTH = width * 0.75,
  // const CARD_WIDTH = width * 0.6,
  ITEM_HEIGHT = height * 0.75;
const SPACING = 10;

const imageUri: string =
  'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/';

const HerosData: DummyDataObject[] = [
  {
    id: 1,
    name: 'CAPTAIN AMERICA',
    uri:
      imageUri +
      'd/d7/CapAmerica-EndgameProfile.jpg/revision/latest/scale-to-width-down/1000?cb=20190423175339',
    description:
      'In the present day, scientists in the Arctic uncover an old, frozen aircraft. In March 1942, Nazi lieutenant general Johann Schmidt and his men steal a mysterious relic called the Tesseract,[N 2] which possesses untold godly powers, from the town of Tønsberg in German-occupied Norway.',
  },
  {
    id: 2,
    name: 'IRON MAN',
    uri:
      imageUri +
      '3/35/IronMan-EndgameProfile.jpg/revision/latest?cb=20190423175213',
    description:
      'In the present day, scientists in the Arctic uncover an old, frozen aircraft. In March 1942, Nazi lieutenant general Johann Schmidt and his men steal a mysterious relic called the Tesseract,[N 2] which possesses untold godly powers, from the town of Tønsberg in German-occupied Norway.',
  },
  {
    id: 3,
    name: 'THOR',
    uri:
      imageUri +
      '2/22/Thor_in_LoveAndThunder_Poster.jpg/revision/latest?cb=20220615195810',
    description: '',
  },
  {
    id: 4,
    name: 'HULK',
    uri:
      imageUri +
      '7/79/Hulk_in_the_She-Hulk_series_-_Infobox.jpg/revision/latest?cb=20220819171053',
    description: `It was patently apparent that [the monstrous character the] Thing was the most popular character in [Marvel's recently created superhero team the] Fantastic Four. ... For a long time, I'd been aware of the fact that people were more likely to favor someone who was less than perfect. ... It's a safe bet that you remember Quasimodo, but how easily can you name any of the heroic, handsomer, more glamorous characters in The Hunchback of Notre Dame? And then there's Frankenstein.`,
  },
  {
    id: 5,
    name: 'BLACK WIDOW',
    uri:
      imageUri +
      '9/9a/BlackWidow-EndgameProfile.jpg/revision/latest?cb=20190423174842',
    description:
      'In the present day, scientists in the Arctic uncover an old, frozen aircraft. In March 1942, Nazi lieutenant general Johann Schmidt and his men steal a mysterious relic called the Tesseract,[N 2] which possesses untold godly powers, from the town of Tønsberg in German-occupied Norway.',
  },
];

/*****************************/

const SuperHeroCard = ({item, index, scrollX}) => {
  const inputRange = [
    (index - 2) * ITEM_WIDTH,
    (index - 1) * ITEM_WIDTH,
    index * ITEM_WIDTH,
  ];

  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [20, -30, 20],
    extrapolate: 'clamp',
  });

  const [imageLoading, setImageLoading] = useState<true | false>(true);

  const _onImageLoadingDone = () => setImageLoading(false);

  return (
    <View style={{width: ITEM_WIDTH}}>
      <Animated.View
        style={{
          marginHorizontal: SPACING,
          transform: [{translateY}],
          backgroundColor: 'white',
          borderRadius: 20,
          justifyContent:'center', 
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: ITEM_WIDTH * 0.8,
            height: ITEM_HEIGHT * 1,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '10%',
              width:'100%',
            }}>
            <Text
              style={{color: 'black', fontSize: 20, fontFamily: 'Cairo-Bold'}}>
              {item.name}
            </Text>
          </View>
          {imageLoading && <ActivityIndicator size={24} color={'blue'} />}
          <FastImage
            source={{uri: item.uri}}
            style={{
              height: ITEM_HEIGHT * 0.5,
              width: ITEM_WIDTH * 0.8,
              borderRadius: 15,
            }}
            onLoadEnd={_onImageLoadingDone}
            resizeMode={FastImage.resizeMode.cover}
          />

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const EmptyCard = () => <View style={{width: width * 0.1}}></View>;

export default function PickSuperHeroScreen() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const data = [
    {id: 0, name: 'left-space'},
    ...HerosData,
    {id: -1, name: 'right-space'},
  ];

  const renderItem = ({item, index}) => {
    if (item.id == 0 || item.id == -1) return <EmptyCard />;
    else return <SuperHeroCard item={item} index={index} scrollX={scrollX} />;
  };

  const keyExtractor = item => item.id;

  const _renderItem = useMemo(() => renderItem, []);
  const _keyExtractor = useMemo(() => keyExtractor, []);

  const _onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );

  return (
    <View style={{flex: 1}}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        data={data}
        renderItem={renderItem}
        keyExtractor={_keyExtractor}
        renderToHardwareTextureAndroid
        contentContainerStyle={{alignItems: 'center'}}
        horizontal={true}
        bounces={false}
        onScroll={_onScroll}
        scrollEventThrottle={16}
        snapToInterval={ITEM_WIDTH}
        snapToAlignment="start"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    flexGrow: 1,
  },
});
