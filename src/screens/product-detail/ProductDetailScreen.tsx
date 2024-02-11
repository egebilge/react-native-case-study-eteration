import React from "react"
import { ProductDetailContainer } from "../../containers/product-detail/ProductDetailContainer"

// There should be free space to add more server-side logic or API calls.

interface IProductDetailScreenProps {
  readonly route: any
}

const ProductDetailScreen: React.FC<IProductDetailScreenProps> = ({ route }) => {
  return <ProductDetailContainer route={route} />
}

export { ProductDetailScreen }
