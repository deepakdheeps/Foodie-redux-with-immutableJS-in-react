import CartIcon from "./cartIcon";
import { List, Map } from "immutable";
import PropTypes from "prop-types";
import classes from "./CartButton.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalQty } from "./Cart";
//import { List } from "immutable";


const CartButton = ({cart}) => {
  return (
    <Link to="/values">
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
         <span>My Cart</span>
         <span className={classes.badge}>{getTotalQty(cart)}</span>   
        
     
      </button>
    </Link>
  );
};

CartButton.propTypes = {
  cart: PropTypes.instanceOf(List),
};
const mapStateToProps = (state) => {
    return {
    cart: selectProgramInput(state),
  };
};

const globalConfigurationState = (state) =>{
  console.log("state value of buton",state)
  return  state.shop;
}

export const selectProgramInput = (state) =>globalConfigurationState(state).get("cart",[]);
export default connect(mapStateToProps)(CartButton);
