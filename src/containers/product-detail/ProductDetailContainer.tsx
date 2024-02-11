import React from "react"
import { ProductDetail } from "../../components/product-detail/ProductDetail"
import { View } from "react-native"
import { ScaledSheet } from "react-native-size-matters"

// There should be free space to add more component to this container

interface IProductDetailContainerProps {
  readonly route: any
}

const ProductDetailContainer: React.FC<IProductDetailContainerProps> = React.memo((props) => {
  const { route } = props

  return (
    <View style={styles.container}>
      <ProductDetail route={route} />
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

export { ProductDetailContainer }
