import { Tabs } from "expo-router";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from 'react-native';

const CustomTabTitle = ({ focused, title }) => {
  return (
    <Text style={{ color: focused ? '#6D9773' : 'black' }}>
      {title}
    </Text>
  );
};

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomTabTitle focused={focused} title="Home" />
          ),
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="home" color={focused? '#6D9773' : {color}} size={26} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomTabTitle focused={focused} title="Favorites" />
          ),
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="heart"  color={focused? '#6D9773' : {color}} size={26}/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomTabTitle focused={focused} title="Profile" />
          ),
          tabBarIcon: ({ color,focused }) => (
            <MaterialCommunityIcons name="account"  color={focused? '#6D9773' : {color}} size={26}/>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: ({ focused }) => (
            <CustomTabTitle focused={focused} title="Settings" />
          ),
          tabBarIcon: ({ color,focused }) => (
            <MaterialCommunityIcons name="cog"  color={focused? '#6D9773' : {color}} size={26}/>
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          href: null,
          
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          headerShown: false,
          href: null,
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          headerShown: false,
          href: null,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          href: null,
        }}
      />
    </Tabs>
  );
}
