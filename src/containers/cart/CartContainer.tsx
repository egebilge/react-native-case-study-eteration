import React from "react"
import { Cart } from "../../components/cart/Cart"
import { ScaledSheet } from "react-native-size-matters"
import { View } from "react-native"

// There should be free space to add more component to this container

const CartContainer: React.FC = React.memo(() => {
  return (
    <View style={style.container}>
      <Cart />
    </View>
  )
})

const style = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: "15@s",
  },
})

export { CartContainer }
