import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./product.scss";

const Products = () => {
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Products;
