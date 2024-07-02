import React from 'react';
import 'regenerator-runtime/runtime';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MemberInputScreen from './src/screens/MemberInputScreen';
import ScoreInputScreen from './src/screens/ScoreInputScreen';
import ResultScreen from './src/screens/ResultScreen';
import InquireScreen from './src/screens/InquireScreen';
import GameDetailsScreen from './src/screens/GameDetailsScreen';
import HanchanListScreen from './src/screens/HanchanListScreen';
import TestScreen from './src/screens/TestScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MemberInput"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="MemberInput" component={MemberInputScreen} />
      <Stack.Screen name="HanchanList" component={HanchanListScreen} />
      <Stack.Screen name="ScoreInput" component={ScoreInputScreen} />
    </Stack.Navigator>
  );
}

function InquireStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Inquire">
      <Stack.Screen name="Inquire" component={InquireScreen} />
      <Stack.Screen name="GameDetails" component={GameDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="戦歴"
          component={InquireStackNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="記録"
          component={MainStackNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="結果"
          component={TestScreen}
          // component={ResultScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
