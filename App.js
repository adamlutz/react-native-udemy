import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ComponentScreen from "./src/screens/ComponentsScreen";
import ImageScreen from "./src/screens/ImageScreen"
import CounterScreen from './src/screens/CounterScreen';
import ColorsScreen from './src/screens/ColorsScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Lists: ListScreen,
    Components: ComponentScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorsScreen,
    Squares: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
