import React, {useEffect, useMemo} from 'react';
import {
  View,
  Animated,
  ListRenderItem,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';

import {
  BACKGROUND_COLOR,ITEM_WIDTH, width
} from 'styles';
import { SuperHeroCard } from 'components';
import { screenProps, HerosDataType,dataListType } from 'types';
import { HerosData } from 'utils';

const EmptyCard = () => <View style={{width: width * 0.1}}></View>;

export default function PickSuperHeroScreen(props:screenProps) {

  useEffect(() => {
    Orientation.lockToPortrait(); 
  }, [])

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const data = [
    {id: 0, name: 'left-space'},
    ...HerosData,
    {id: -1, name: 'right-space'},
  ];

  const renderItem:ListRenderItem<HerosDataType> = ({item, index}:dataListType) => {
    if (item.id == 0 || item.id == -1) return <EmptyCard />;
    else return <SuperHeroCard item={item} index={index} scrollX={scrollX} />;
  };

  const keyExtractor = (item) => item.id

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
