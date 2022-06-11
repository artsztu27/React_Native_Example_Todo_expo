import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// component
import TodoToday from '~/pages/TodoToday';
import TodoHistory from '~/pages/TodoHistory';

export function TabNavigator(props) {
  const Tab = createBottomTabNavigator();
  console.log('props.route.name=',props.route.name)
  return (
      <Tab.Navigator initialRouteName={props.route.name}  screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Today" component={TodoToday} />
          <Tab.Screen name="History" component={TodoHistory} />
      </Tab.Navigator>

  );
}