import { View, Text, Animated, ActivityIndicator } from 'react-native'
import React from 'react'
import { BACKGROUND_COLOR, BACKGROUND_LIGHT_COLOR, generalStyles, ITEM_HEIGHT, ITEM_WIDTH, MAIN_COLOR, SPACING, WHITE } from 'styles';
import {useState} from 'react';
import FastImage from 'react-native-fast-image';

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
  
    const [imageLoading, setImageLoading] = useState(true);
  
    const _onImageLoadingDone = () => setImageLoading(false);
  
    return (
      <View style={{width: ITEM_WIDTH}}>
        <Animated.View
          style={{
            marginHorizontal: SPACING,
            transform: [{translateY}],
            backgroundColor: BACKGROUND_COLOR,
            borderRadius: 40,
            ...generalStyles.centerAlign
          }}>
          <View
            style={{
              width: ITEM_WIDTH * 0.9,
              height: ITEM_HEIGHT * 1,
              backgroundColor: MAIN_COLOR,
              borderRadius: 20,
              alignItems: 'center',
            }}>
            <View
              style={[
                {
                  height: '10%',
                  width: '100%',
                },
                generalStyles.centerAlign,
              ]}>
              <Text
                style={{color: WHITE, fontSize: 18, fontFamily: 'Cairo-Regular'}}>
                {item.name}
              </Text>
            </View>
            <View
              style={[
                {
                  height: '50%',
                  width: '85%',
                },
                generalStyles.centerAlign,
              ]}>
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
            </View>
  
            <View
              style={[
                {
                  height: '35%',
                  width: '100%',
                  borderRadius: 20,
                  backgroundColor: BACKGROUND_LIGHT_COLOR,
                  borderTopRightRadius: 0,
                  marginTop: '10%',
                }, generalStyles.centerAlign
              ]}>
                <Text>
                  {item.description}
                </Text>
              </View>
          </View>
        </Animated.View>
      </View>
    );
  };

export default React.memo(SuperHeroCard, (prevProps, nextProps)=> prevProps.scrollX != nextProps.scrollX ? false: true)