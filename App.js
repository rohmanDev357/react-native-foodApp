import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import screen
import SearchScreen from './src/screen/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'BussinessSearch',
    },
  },
);

export default createAppContainer(navigator);
