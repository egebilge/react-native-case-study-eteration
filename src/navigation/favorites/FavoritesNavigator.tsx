import { createStackNavigator } from "@react-navigation/stack"
import { moderateScale } from "react-native-size-matters"
import FavoritesScreen from "../../screens/favorites/FavoritesScreen"

const Stack = createStackNavigator()

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="E-Market"
        component={FavoritesScreen}
        options={{
          title: "E-Market",
          headerStyle: {
            backgroundColor: "#2A59FE",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: moderateScale(24),
            fontWeight: "800",
            lineHeight: moderateScale(29.26),
          },
        }}
      />
    </Stack.Navigator>
  )
}

export { FavoritesNavigator }
