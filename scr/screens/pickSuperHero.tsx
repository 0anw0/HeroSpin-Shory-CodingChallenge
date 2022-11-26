import React, {useMemo} from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { DummyDataObject } from 'scr/types/types';


/*****************************/ 

const imageUri: string =
  'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/';


const dummyArrayData: DummyDataObject[] = [
  {
    id: 1,
    name: 'CAPTAIN AMERICA',
    uri:
      imageUri +
      'd/d7/CapAmerica-EndgameProfile.jpg/revision/latest/scale-to-width-down/1000?cb=20190423175339',
  },
  {
    id: 2,
    name: 'IRON MAN',
    uri:
      imageUri +
      '3/35/IronMan-EndgameProfile.jpg/revision/latest?cb=20190423175213',
  },
  {
    id: 3,
    name: 'THOR',
    uri:
      imageUri +
      '2/22/Thor_in_LoveAndThunder_Poster.jpg/revision/latest?cb=20220615195810',
  },
  {
    id: 4,
    name: 'HULK',
    uri:
      imageUri +
      '7/79/Hulk_in_the_She-Hulk_series_-_Infobox.jpg/revision/latest?cb=20220819171053',
  },
  {
    id: 5,
    name: 'BLACK WIDOW',
    uri:
      imageUri +
      '9/9a/BlackWidow-EndgameProfile.jpg/revision/latest?cb=20190423174842',
  },
];

/*****************************/ 

const SuperHeroCard = item => {
  return (
    <View style={{borderWidth: 1, height: '80%', width: '80%',backgroundColor:'red'}}>
      <Text style={{color: 'black'}}>{item.name}</Text>
    </View>
  );
};

export default function PickSuperHeroScreen() {
  const renderItem = ({item}) => <SuperHeroCard item={item} />;

  const keyExtractor = item => item.id;

  const _renderItem = useMemo(() => renderItem, []);
  const _keyExtractor = useMemo(() => keyExtractor, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '100%', height:'100%'}}>
        <FlatList
          data={dummyArrayData}
          renderItem={renderItem}
          keyExtractor={_keyExtractor}
          horizontal={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer:{ 
    flexGrow:1
  }
})
