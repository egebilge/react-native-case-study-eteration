import axios from 'axios';
import {IProduct} from '../../utils/IProduct';

const ProductService = {
  fetchProducts: async (): Promise<IProduct[]> => {
    const response = await axios.get<IProduct[]>(
      'https://5fc9346b2af77700165ae514.mockapi.io/products',
    );
    return response.data;
  },

  fetchProductById: async (id: string): Promise<IProduct> => {
    const response = await axios.get<IProduct>(
      `https://5fc9346b2af77700165ae514.mockapi.io/products/${id}`,
    );
    return response.data;
  },
};

export {ProductService};
