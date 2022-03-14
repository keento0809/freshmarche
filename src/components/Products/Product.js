import ProductPaper from "../UIcomponents/Products/ProductPaper";
import ViewDetailButton from "../UIcomponents/Buttons/ViewDetailButton";

const Product = (props) => {
  return (
    <ProductPaper>
      <li key={props.index}>
        <h4>{props.name}</h4>
        <p>{props.price}</p>
        {/* <img src={props.imageUrl} alt="" /> */}
        <ViewDetailButton text="View" />
      </li>
    </ProductPaper>
  );
};

export default Product;
