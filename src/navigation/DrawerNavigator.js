import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { TabNavigator } from "~/navigation/TabNavigator";
import TodoHistory from '~/pages/TodoHistory';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Today" component={TabNavigator} />
      <Drawer.Screen name="History" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;