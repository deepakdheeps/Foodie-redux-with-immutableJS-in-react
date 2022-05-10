import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { connect } from "react-redux";
import { addTOCart } from "../../Redux/shopping/shopping.action";

const ProductItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{props.title}</h3>
          <div className={classes.price}>${props.price.toFixed(2)}</div>
        </header>
        <p className={classes.para}>{props.description}</p>
        <div>
          <img className={classes.image} alt="" src={props.img} />
        </div>
        <div className={classes.actions}>
          <button onClick={() => props.addTOCart(props.id)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTOCart: (id) => dispatch(addTOCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
