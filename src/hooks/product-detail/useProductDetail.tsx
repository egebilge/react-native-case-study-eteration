import { useEffect, useMemo, useState } from "react"
import { IProduct } from "../../utils/IProduct"
import { ProductService } from "../../services/product-service"

const useProductDetail = (id: string) => {
  const [product, setProduct] = useState<IProduct | null>(null)

  useEffect(() => {
    const loadProductDetail = async () => {
      try {
        const productDetails = await ProductService.fetchProductById(id)
        setProduct(productDetails)
      } catch (error) {
        console.error(error)
      }
    }

    loadProductDetail()
  }, [id])

  const data = useMemo(() => {
    return {
      product,
    }
  }, [product])

  return data
}
export { useProductDetail }
