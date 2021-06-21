import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IFilters, IProductService, ProductService } from '@/services/data/products';
import { setProducts } from '@/services/redux/actions/productActions';
import Navbar from '@/components/commons/navbar';
import ItemProduct from '@/components/item/product';

const Home = () => {

  const { products } = useSelector((state: any) => state?.allProducts);
  const dispatch = useDispatch();
  const service: IProductService = new ProductService();

  const fetchProducts = (filter: IFilters) => {
    service.GetAll(filter, {
      Success: (response: any) => {
        dispatch(setProducts(response));
      }
    });
  };

  useEffect(() => {
    fetchProducts({
      sort: '',
      limit: 0,
    });
  }, []);

  const renderListProduct = () => products.map((item) => {
    return <ItemProduct item={item} />;
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Shopee Bandung | Jual beli di Ponsel dan Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Navbar />
        <div className="container">
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
          {
            renderListProduct()
          }
          </div>
        </div>
      </main>
    </>
  )
}

export default Home;
