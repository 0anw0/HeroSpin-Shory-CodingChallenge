import React, {useMemo} from 'react';
import {
  View,
  Animated,
} from 'react-native';

import {HerosDataType} from 'scr/types/types';
import {
  BACKGROUND_COLOR,ITEM_WIDTH, width
} from 'styles';
import { SuperHeroCard } from 'components';

const imageUri: string =
  'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/';

const HerosData: HerosDataType[] = [
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
    <View style={{flex: 1, backgroundColor: BACKGROUND_COLOR}}>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        data={data}
        renderItem={_renderItem}
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
