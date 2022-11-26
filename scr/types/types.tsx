export type screenProps = {
    navigation: navigationProps;
};

export type navigationProps = {
    toggleDrawer: () => void;
    navigate: (screenName: string) => void;
    goBack: ()=> void
};