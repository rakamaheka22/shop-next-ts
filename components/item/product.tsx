import { IProductDetail } from "@/services/data/products";

const ItemProduct = (props: {
  item: IProductDetail;
}) => {
  const { item } = props;

  return (
    <div>
      <div>
        <img src={item.image} alt={item.title} />
      </div>
      <div>
        <span>{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.price}</p>
      </div>
    </div>
  );
}

export default ItemProduct;
