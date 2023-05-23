import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: true,
          tabBarLabel: 'Home',
          headerTitle: 'Home',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" size={size} color={color} />
        }}
      />

      <Tabs.Screen
        name="tools"
        options={{
          tabBarLabel: 'Account',
          headerTitle: 'My Account',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="archieve"
        options={{
          tabBarLabel: 'Arsip',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="archieve" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          tabBarLabel: 'Account',
          headerTitle: 'My Account',
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" size={size} color={color} />
        }}
      />
    </Tabs>
  );
};