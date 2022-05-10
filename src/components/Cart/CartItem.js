import classes from "./CartItem.module.css";
import { connect } from "react-redux";
import { addTOCart } from "../../Redux/shopping/shopping.action";
import { removeFromCart } from "../../Redux/shopping/shopping.action";

const CartItem = (props) => {
  // const removeItemHandler = () => {
  //   dispatch(cartActions.removeItemFromCart(id));
  // };

  // const addItemHandler = () => {
  //   dispatch(
  //     cartActions.addItemToCart({
  //       id,
  //       title,
  //       price,
  //     })
  //   );
  // };

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.items.title}</h3>
        <div className={classes.price}>
          {/* ${total.toFixed(2)}{" "} */}
          <span className={classes.itemprice}>
            (${props.items.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.items.quantity}</span>
        </div>
        <img alt="img" className={classes.altimg} src={props.items.img} />
        <div className={classes.actions}>
          {/* <input min="1" type="number" id="qty" value={props.items.quantity} /> */}
          <button onClick={() => props.addTOCart(props.items.id)}>+</button>
          <button onClick={() => props.removeFromCart(props.items.id)}>
            -
          </button>
        </div>
      </div>
    </li>
  );
};

// const mapsDispatchToProps = (dispatch) => {
//   return {
//     addTOCart: (id) => dispatch(addTOCart(id)),
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFromCart: (id) => dispatch(removeFromCart(id)),
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addTOCart: (id) => dispatch(addTOCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
