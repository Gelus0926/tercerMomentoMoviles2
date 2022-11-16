import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,FontAwesome } from "@expo/vector-icons"
import Cuentas from '../Screen/Vendedor';
import Movimientos from '../Screen/Ventas'

const styles = StyleSheet.create({
    IconStyle: {
      fontSize: 22,
      color: `white`,
      fontWeight: `bold`
    },
    ocultar: {
      display: 'none'
    }
  }
)

const Tab = createBottomTabNavigator()
export default function NavigationBottomStack(){
  return(
    <Tab.Navigator
      initialRouteName = 'Cuentas'
      screenOptions = {{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "#7503B6",
        tabBarInactiveTintColor: "white",
        tabBarInactiveBackgroundColor: "#A36BC3"
      }}>

      <Tab.Screen
        name = 'Cuentas'
        component = {Cuentas}
        options = {{
          title: 'Vendedor', tabBarIcon: ({color, size}) => (
            <FontAwesome 
              name = 'user-circle' 
              style = {styles.IconStyle} 
              color = {color} 
              size = {size}
            />
          )
        }}
      />

      <Tab.Screen 
        name = 'Movimiento'
        component = {Movimientos}
        options = {{
          title: 'Ventas', tabBarIcon: ({color, size}) => (
            <FontAwesome 
              name='usd' 
              style={styles.IconStyle} 
              color={color} 
              size={size}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}