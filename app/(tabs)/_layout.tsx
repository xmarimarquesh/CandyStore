import { Header } from '@/components/header';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {

  return (
    <>
      
      <Tabs>
        <Tabs.Screen name="index" options={{ headerShown: false }}/>
        <Tabs.Screen name="products" options={{ headerShown: false }}/>
        <Tabs.Screen name="profile" options={{ headerShown: false }}/>
      </Tabs>
    </>
  );
}
