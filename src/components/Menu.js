import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

// component
import TodoToday from '~/pages/TodoToday';
import TodoHistory from '~/pages/TodoHistory';

const Drawer = createDrawerNavigator();
const LeftMenu = (props) => {
    return (
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen
          name="今日待辦事項"
          component={TodoToday}
          options={{ drawerLabel: '今日待辦事項' }}
        />
        <Drawer.Screen
          name="歷史待辦事項"
          component={TodoHistory}
          options={{ drawerLabel: '歷史待辦事項' }}
        />
      </Drawer.Navigator>
    );
}

export default LeftMenu

