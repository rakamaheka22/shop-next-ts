import { DataService } from '../config';
import { HandleError, IResponseSuccess } from './../response';

export interface IProductDetail {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export interface IFilters {
  sort?: string;
  limit?: number;
}

export interface IProductService {
  GetAll(filters: IFilters, handler: IResponseSuccess): void;
  GetById(id: number, handler: IResponseSuccess): void;
}

export class ProductService implements IProductService {
  async GetAll(filters: IFilters, handler: IResponseSuccess) {
    try {
      const { data } =
        await DataService
          .get<IProductDetail>(`/products?sort=${filters.sort}&limit=${filters.limit}`);
      handler.Success && handler.Success(data);
    } catch (error) {
      HandleError(error, handler);
    }
  }
  async GetById(id: number, handler: IResponseSuccess) {
    try {
      const { data } =
        await DataService
          .get<IProductDetail>(`/products/${id}`);
      handler.Success && handler.Success(data);
    } catch (error) {
      HandleError(error, handler);
    }
  }
}
