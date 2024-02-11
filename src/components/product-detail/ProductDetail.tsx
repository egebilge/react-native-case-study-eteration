import React from "react"
import { Button, Image, Text, View } from "react-native"
import { styles } from "./style"
import { useProductDetail } from "../../hooks/product-detail/useProductDetail"
import { useDispatch } from "react-redux"
import { addToCart } from "../../features/product/productSlice"
import { IProduct } from "../../utils/IProduct"
import { useNavigation } from "@react-navigation/native"

interface IProductDetailProps {
  readonly route: any
}

const ProductDetail: React.FC<IProductDetailProps> = ({ route }) => {
  const { id } = route.params.product
  const { product } = useProductDetail(id)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const addToCartAndNavigateCart = (product: IProduct) => {
    dispatch(addToCart(product))
    navigation.navigate("Cart" as never)
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.name}</Text>
      <Text>{product.description}</Text>
      <View style={styles.bottomContainer}>
        <Text>Price: {product.price} ₺</Text>
        <View style={styles.bottomButton}>
          <Button
            title="Add to Cart"
            color={"#fff"}
            onPress={() => addToCartAndNavigateCart(product)}
          />
        </View>
      </View>
    </View>
  )
}

export { ProductDetail }
