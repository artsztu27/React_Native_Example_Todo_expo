import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// component
import TodoToday from '~/pages/TodoToday';
import TodoHistory from '~/pages/TodoHistory';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
          name="Today"
          component={TodoToday}
        />
        <Stack.Screen
          name="History"
          component={TodoHistory}
        />
    </Stack.Navigator>
  );
};

export default StackNavigator ;