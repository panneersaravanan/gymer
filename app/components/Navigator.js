import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import TrainerDetails from './TrainerDetails';

const Navigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: {
        visible: false,
      },
    },
  },
  Trainer: {
    screen: TrainerDetails,
    navigationOptions: {
      title: ({ state }) => state.params.name,
    },
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'screen',
});

export default Navigator;
