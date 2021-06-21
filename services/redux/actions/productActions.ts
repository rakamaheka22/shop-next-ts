import { IProductDetail } from '@/services/data/products';
import { ActionTypes } from '../constants/action-types';

export const setProducts = (products: IProductDetail[]) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const selectedProduct = (product: IProductDetail) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: product,
});
