import { createStackNavigator } from "@react-navigation/stack"
import { CartScreen } from "../../screens"
import { moderateScale } from "react-native-size-matters"

const Stack = createStackNavigator()

const CartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="E-Market"
        component={CartScreen}
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

export { CartNavigator }
