import { FlashList } from "@shopify/flash-list"
import React from "react"
import { useProductList } from "../../hooks/product-list/useProductList"
import { FiltersHeader } from "./filters-header/FiltersHeader"
import { ProductItem } from "./product-item/ProductItem"

const ProductList: React.FC = () => {
  const { searchQuery, setSearchQuery, handleEndReached, filteredProducts } = useProductList()

  return (
    <FlashList
      data={filteredProducts}
      ListHeaderComponent={
        <FiltersHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      }
      keyExtractor={(item) => item.id.toString()}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.1}
      estimatedItemSize={100}
      numColumns={2}
      renderItem={({ item }) => <ProductItem product={item} />}
    />
  )
}

export { ProductList }
