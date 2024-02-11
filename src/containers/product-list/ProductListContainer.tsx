import React from "react"
import { ProductList } from "../../components/product-list/ProductList"
import { View } from "react-native"
import { ScaledSheet } from "react-native-size-matters"

// There should be free space to add more component to this container

const ProductListContainer: React.FC = React.memo(() => {
  return (
    <View style={styles.container}>
      <ProductList />
    </View>
  )
})

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: "15@s",
  },
})

export { ProductListContainer }
