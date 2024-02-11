import { IProduct } from "./IProduct"

export interface IProductState {
  readonly allProducts: IProduct[]
  readonly cartItems: IProduct[]
  readonly filteredProducts: IProduct[]
  readonly favoriteItems: IProduct[]
  readonly isLoading: boolean
  readonly error: string | null
}
