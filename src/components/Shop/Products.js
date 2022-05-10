import ProductItem from "./ProductItem";
import {  List } from "immutable";
import classes from "./Products.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Products = ({ products }) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite Foods </h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            // key={product.id}
            key={product.get('id',0)}
            id={product.get('id',0)}
            title={product.get("title","title")}
            price={product.get("price",0)}
            description={product.get("description","description")}
            img={product.get("img","img")}
          />
        ))}
      </ul>
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.instanceOf(List),
  /// cart: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    products: selectProgramInput(state),
  };
};
const globalConfigurationState = (state) => state.shop;
const selectProgramInput = (state) =>globalConfigurationState(state).get("products",[]);

export default connect(mapStateToProps)(Products);
