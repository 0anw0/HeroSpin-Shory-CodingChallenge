import {StackHeaderProps, StackScreenProps} from '@react-navigation/stack';

export type navigationProps = {
  toggleDrawer: () => void;
  navigate: (screenName: string) => void;
  goBack: () => void;
};

export type HerosDataType = {
  id: number;
  name: string;
  uri: string;
  description: string;
};

export type dataListType = {
  item: HerosDataType;
  index: number;
};

export type HeaderProps = {
  LeftIcon?: string;
  RightIcon?: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  title?: string;
};

export type FilmInfoSectionType = {
  type: string;
  value: string;
  duration: number;
};

export type FilmNameComponentType = {
  title: string;
  duration: number;
  onSufflePress?: () => void;
  onViewPress?: () => void;
};

type routeProps = { 
  name:string, 
  params: any | undefined
}

export type screenProps = {
  navigation: navigationProps;
  route: routeProps
};
