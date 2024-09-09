import Home from './pages/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from './pages/Calendar';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Provider store={store}>
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
                    name="Календар"
                    component={Calendar}
                    options={{
                        tabBarIcon: ({ color }) => {
                            return (
                                <FontAwesome
                                    name="calendar"
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
