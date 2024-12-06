import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="products" />
    </Tabs>
  );
}
