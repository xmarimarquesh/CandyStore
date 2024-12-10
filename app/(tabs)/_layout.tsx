import { Header } from '@/components/header';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Image } from 'react-native';

export default function TabLayout() {

  return (
    <>
      
      <Tabs>
        <Tabs.Screen 
          name="index" 
          options={{ 
              headerShown: false, 
              tabBarStyle: {
                backgroundColor: '#1B7263', 
                borderTopWidth: 0, 
                height: 60,
                paddingTop: 10
              }, 
              tabBarLabel: "",
              tabBarIcon: () => (<Image source={require('@/assets/images/home-icon-silhouette.png')} width={100} height={100} />)
            }}
            />
        <Tabs.Screen 
          name="products" 
          options={{ 
              headerShown: false, 
              tabBarStyle: {
                backgroundColor: '#1B7263', 
                borderTopWidth: 0, 
                height: 60,
                paddingTop: 10
              }, 
              tabBarLabel: "",
              tabBarIcon: () => (<Image source={require('@/assets/images/cake.png')} width={100} height={100} />)
            }}
            />
        <Tabs.Screen 
          name="orders" 
          options={{ 
              headerShown: false, 
              tabBarStyle: {
                backgroundColor: '#1B7263', 
                borderTopWidth: 0, 
                height: 60,
                paddingTop: 10
              }, 
              tabBarLabel: "",
              tabBarIcon: () => (<Image source={require('@/assets/images/shopping-list.png')} width={100} height={100} />)
            }}
            />
        <Tabs.Screen 
          name="profile" 
          options={{ 
              headerShown: false, 
              tabBarStyle: {
                backgroundColor: '#1B7263', 
                borderTopWidth: 0, 
                height: 60,
                paddingTop: 10
              }, 
              tabBarLabel: "",
              tabBarIcon: () => (<Image source={require('@/assets/images/user.png')} width={100} height={100} />)
            }}
            />
      </Tabs>
    </>
  );
}
