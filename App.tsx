import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from './pages/Calendar';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerStyle: {
                        backgroundColor: '#4e4634',
                        elevation: 0,
                        shadowOpacity: 0,
                    }, // Custom label style
                    tabBarStyle: {
                        backgroundColor: '#4e4634',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderTopWidth: 0,
                    },
                    tabBarActiveTintColor: 'orange', // Color when active
                    tabBarInactiveTintColor: 'gray',
                    headerTitleStyle: { color: '#fff' },
                    tabBarIcon: ({ color, size, focused }) => {
                        let iconName;

                        if (route.name === 'Головна') {
                            iconName = focused ? 'home' : 'home-outline';
                            return (
                                <Ionicons
                                    name={iconName}
                                    color={color}
                                    size={size}
                                />
                            );
                        } else if (route.name === 'Календар') {
                            iconName = focused
                                ? 'calendar'
                                : 'calendar-outline';
                            return (
                                <Ionicons
                                    name={iconName}
                                    color={color}
                                    size={size}
                                />
                            );
                        }

                        return null;
                    },
                })}
            >
                <Tab.Screen name="Головна" component={Home} />
                <Tab.Screen name="Календар" component={Calendar} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34',
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
});
