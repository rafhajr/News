import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Menu from './pages/Menu'
import CreateNews from './pages/CreateNews'
import ViewNews from './pages/ViewNews'
import SearchNews from './pages/SearchNews'

export default createAppContainer(
  createSwitchNavigator({
    Menu,
    ViewNews,
    SearchNews,
    CreateNews,
  })
)

// createStackNavigator
// createBottomTabNavigator
// createMaterialTopBarNavigator
// createDrawerNavigator