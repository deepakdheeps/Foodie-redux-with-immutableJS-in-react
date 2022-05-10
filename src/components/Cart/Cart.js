import { connect } from "react-redux";
import Card from "../UI/Card";
import PropTypes from "prop-types";
import { selectProgramInput } from "./CartButton";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as actions from "../../Redux/details/action";
import { List } from "immutable";
//import { List } from "immutable";
//import { resetMessage } from "../../Redux/details/action";

 export const getTotalQty = (cart) => {
  const arrayqty = cart.map((item) => item.get("qty",0));
  console.log("arrayqty",arrayqty,"cart",cart);
  let initialValue = 0;
  let sum = arrayqty.reduce((totalValue, currentValue) => {
    return totalValue + currentValue;
  }, initialValue);
  console.log("sum",sum)
  return sum;
};

const Cart = ({ resetMessage, cart }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNO] = useState("");
  const [address, setAddress] = useState("");

  const value = {
    name: name,
    email: email,
    phoneNo: phoneNo,
    address: address,
  };

  const getTotalPrice = () => {
    const arrayValues = cart.map((item) => item.get("qty",0) * item.get("price",0));
    let initialValue = 0;
    let sum = arrayValues.reduce((totalValue, currentValue) => {
      return totalValue + currentValue;
    }, initialValue);
    return sum.toFixed(2);
  };

  return (
    <Card className={classes.cart}>
      <>
        <div className={classes.flex}>
          <h2>Your Shopping Cart</h2>
          <Link to="/">
            <button>Back Menu</button>
          </Link>
        </div>
        <ul>
          {cart.map((item) => (
          
            <CartItem
              key={item.get("id",1)}
              items={{
                id: item.get("id",1),
                title: item.get("title","title"),
                quantity: item.get("qty",0),
                price: item.get("price",0),
                img: item.get("img","jpg"),
              }}
            />
          ))}
        </ul>
        <div>
          <h3>Total Quantitiy : {getTotalQty(cart)}</h3>
          <h3>Total Price : ${getTotalPrice()}</h3>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3 className={classes.h3}>Enter Your Info</h3>
          <Link to="/Order">
          <button
            className={classes.checkout}
            onClick={() => resetMessage(value)}
          >
            {" "}
            CheckOut
          </button>
          </Link>
        </div>
        <hr />
        {/* ------------------------------------------------------------- */}
        <form>
          <label htmlFor="label">Name &nbsp; : &nbsp; </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="label"> Email &nbsp; : &nbsp; </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="label">Phone &nbsp;: &nbsp;</label>
          <input
            type="number"
            value={phoneNo}
            onChange={(e) => setPhoneNO(e.target.value)}
          />{" "}
          <br />
          <label htmlFor="value">Address&nbsp;:</label>
          <input
            type="text"
            className={classes.address}
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />{" "}
          <br />
        </form>
      </>
    </Card>
  );
};

Cart.propTypes = {
  cart: PropTypes.instanceOf(List),
};

const mapStateToProps = (state) => {
  return {
    cart: selectProgramInput(state),
  };
};

export default connect(mapStateToProps, actions)(Cart);
