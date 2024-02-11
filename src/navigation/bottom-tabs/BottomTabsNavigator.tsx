import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import { ProductListNavigator } from "../product-list/ProductListNavigator"
import { CartNavigator } from "../cart/CartNavigator"
import { shallowEqual, useSelector } from "react-redux"
import React from "react"
import { RootState } from "../../store"
import { FavoritesNavigator } from "../favorites/FavoritesNavigator"

const Tab = createBottomTabNavigator()

const BottomTabsNavigator = () => {
  const { cartItems, isLoading, favoriteItems } = useSelector(
    (state: RootState) => state.product,
    shallowEqual,
  )

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = ""
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline"
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline"
          } else if (route.name === "Favorites") {
            iconName = focused ? "star" : "star-outline"
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen name="Home" component={ProductListNavigator} options={{ headerShown: false }} />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          headerShown: false,
          tabBarBadge:
            !isLoading && cartItems.length > 0
              ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
              : undefined,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          headerShown: false,
          tabBarBadge: favoriteItems.length > 0 ? favoriteItems.length : undefined,
        }}
      />
    </Tab.Navigator>
  )
}

export { BottomTabsNavigator }
