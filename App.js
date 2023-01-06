import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'
import RegisterPage from './Screen/Register';
import LoginPage from './Screen/Login';
import ProfilePage from './Screen/Profile'

const DataStack = createNativeStackNavigator()
const DataScreen = () => {
  return (
    <DataStack.Navigator>
      <DataStack.Screen name='login' component={LoginPage} options={{title: 'Login'}}/>
      <DataStack.Screen name='register' component={RegisterPage} options={{title: 'register'}} />
    </DataStack.Navigator>
  )
}

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      tabBarStyle: {
        display: 'flex',
        height: 70,
      },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomeTabs') {
          iconName = focused
            ? 'stats-chart'
            : 'stats-chart-outline';
        }
        else if (route.name === 'İndex') {
          iconName = focused ? 'home' : 'home-outline';
        }
        else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'black',
    })}
  >
    <Tabs.Screen name='Acconts' component={DataScreen} options={{ headerShown: false, headerStyle: { backgroundColor: 'black' }, headerTintColor: 'white', }} />
    <Tabs.Screen name='Profile' component={ProfilePage}/>
  </Tabs.Navigator>
)
//    <Tabs.Screen name='Market' component={CategoryScreen}  options={{headerStyle: { backgroundColor:'black'}, headerTintColor: 'white'}} />    // <Tabs.Screen name='Notification' component={NotificationScreen} options={{headerStyle: { backgroundColor:'black'}, headerTintColor: 'white',}}/>


const MainStack = createNativeStackNavigator()
const App = () => {
  return (
      <NavigationContainer>
        <MainStack.Navigator >
          <MainStack.Screen name='Tabs' component={TabsScreen} options={{ headerShown: false }} />
        </MainStack.Navigator>
      </NavigationContainer>
  );
}



export default App;
