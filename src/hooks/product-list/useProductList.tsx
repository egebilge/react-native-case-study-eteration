import { useEffect, useMemo, useState } from "react"
import { ProductService } from "../../services/product-service"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { appendProducts, filterProducts, setAllProducts } from "../../features/product/productSlice"

const useProductList = () => {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.product.allProducts)
  const filteredProducts = useSelector((state: RootState) => state.product.filteredProducts)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await ProductService.fetchProducts()
        dispatch(setAllProducts(fetchedProducts))
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    loadProducts()
  }, [dispatch])

  useEffect(() => {
    dispatch(filterProducts(searchQuery))
  }, [products, searchQuery, dispatch])

  const handleEndReached = () => {
    if (!searchQuery && filteredProducts.length < products.length) {
      const newProductsToLoad = products.slice(
        filteredProducts.length,
        filteredProducts.length + 12,
      )
      dispatch(appendProducts(newProductsToLoad))
    }
  }

  const data = useMemo(() => {
    return {
      filteredProducts,
      searchQuery,
      setSearchQuery,
      handleEndReached,
    }
  }, [filteredProducts, searchQuery])

  return data
}

export { useProductList }
