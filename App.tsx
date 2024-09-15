import Home from './src/pages/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from './src/pages/About';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import About from './src/pages/About';
import { usePushNotifications } from './src/hooks/usePushNotifications';

const Tab = createBottomTabNavigator();

export default function App() {
    const { expoPushToken, notification } = usePushNotifications();

    const data = JSON.stringify(notification, undefined, 2);
    return (
        <Provider store={store}>
            {expoPushToken?.data}
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: '#4e4634',
                            elevation: 0,
                            shadowOpacity: 0,
                            borderTopWidth: 0,
                        },
                        tabBarActiveTintColor: 'orange', // Color when active
                        tabBarInactiveTintColor: 'gray',
                    })}
                >
                    <Tab.Screen
                        name="Головна"
                        component={Home}
                        options={{
                            tabBarIcon: ({ color }) => {
                                return (
                                    <FontAwesome
                                        name="home"
                                        color={color}
                                        size={24}
                                    />
                                );
                            },
                        }}
                    />
                    <Tab.Screen
                        name="Про мене"
                        component={About}
                        options={{
                            tabBarIcon: ({ color }) => {
                                return (
                                    <FontAwesome
                                        name="user"
                                        color={color}
                                        size={24}
                                    />
                                );
                            },
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
