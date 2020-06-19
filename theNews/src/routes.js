import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Menu from './pages/Menu'
import CreateNews from './pages/CreateNews'
import ViewNews from './pages/ViewNews'
import SearchNews from './pages/SearchNews'
import ReadNews from './pages/ReadNews'
import EditNews from './pages/EditNews'

export default createAppContainer(
  createSwitchNavigator({
    Menu,
    ReadNews,
    EditNews,
    ViewNews,
    SearchNews,
    CreateNews,
  })
)

// createStackNavigator
// createBottomTabNavigator
// createMaterialTopBarNavigator
// createDrawerNavigator