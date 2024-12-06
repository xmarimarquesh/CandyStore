import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{title: 'Home',}} />
      <Tabs.Screen name="explore" options={{title: 'Explore',}} />
    </Tabs>
  );
}
