export type screenProps = {
  navigation: navigationProps;
};

export type navigationProps = {
  toggleDrawer: () => void;
  navigate: (screenName: string) => void;
  goBack: () => void;
};

export type HerosDataType = {
  id: number;
  name: string;
  uri: string;
  description: string
};

export type DummyDataList = {
  item: HerosDataType;
};
