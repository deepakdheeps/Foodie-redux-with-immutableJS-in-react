import * as actionTypes from "./shopping.types";
import { fromJS } from "immutable";

const INITIAL_STATE = fromJS({
  cart: [],
  products: [ 
    {
      id: "m1",
      title: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      img: "https://tse3.mm.bing.net/th?id=OIP.AqGcnEeaV9937h_lz8l8UAHaE6&pid=Api&P=0&w=246&h=163",
      qty:1
    },
    {
      id: "m2",
      title: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      img: "https://tse4.mm.bing.net/th?id=OIP.ejVlTpLo-o0OXyKVvhy_iAHaE6&pid=Api&P=0&w=285&h=189",
      qty:1
    },
    {
      id: "m3",
      title: "BBQ Burger",
      description: "American, raw, meaty",
      price: 12.99,
      img: "https://tse4.mm.bing.net/th?id=OIP.nFKmPW8RFvPBBfFyHxAX7QHaE8&pid=Api&P=0&w=253&h=168",
      qty:1
    },
    {
      id: "m4",
      title: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      img: "https://tse2.mm.bing.net/th?id=OIP.xbu0ePhpnjcP0rjVdIazEgHaE8&pid=Api&P=0&w=266&h=177",
      qty:1
    },
    {
      id: "m5",
      title: "Shawarma",
      description: "Special Shawarma with mexican chous..",
      price: 26.99,
      img: "https://tse1.mm.bing.net/th?id=OIP.54H7cFwCZ16yDWwWuOAz1wHaEK&pid=Api&P=0&w=274&h=154",
      qty:1
    },
    {
      id: "m6",
      title: "Pastha",
      description: "tasty pastha with mozerall cheese",
      price: 9.99,
      img: "https://tse1.mm.bing.net/th?id=OIP.Kfks6fSqsTUs4vuniPdxrwHaFj&pid=Api&P=0&w=249&h=187",
      qty:1
    },
  ],

  currentItem: null,
  //totalQuantity: 0,
  // changed: false,
});

const shopReducer = (state = INITIAL_STATE, action) => {
  console.log("shop value of cart",action);
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //assign the value of cuurect action payload id particular object value
      let cartIn = state.get('products',[]).find(
        (product) => product.get('id',0) === action.payload.id
      )
    
// const result=state.get('products',[]).findIndex(value=>value.id==item.id);  
// console.log("result of index",result);

      console.log("let",cartIn);  
      // Check if Item is in cart already
      let inCart = state.get('cart',[]).find((item) =>
        item.get('id',0) === action.payload.id
      );
      //it use down value then only you did ntot get undefined
      let cart=inCart!==undefined;
     // let qty=item.set('qty',1);
       // console.log("incart",cart)
       const values =cart?
           state.get('cart',[]).map((item) =>
            item.get('id') === action.payload.id
             // ? { ...item.set(('qty')+1) }
              ?item.set('qty',item.get('qty')+1)
              //fromJS({...item.toJS(),qty:item.get('qty')+1})
              :item
            ):
            state.get('cart',[]).push(cartIn)
        
            // item.(('qty')+1) 
          
      // : state.set('cart',item);
        

        console.log("reducer values",values)
        
      return state.set("cart",fromJS(values))


    case actionTypes.REMOVE_FROM_CART:
      let inCarts = state.get('cart',[]).find((item) => item.get('id',0) === action.payload.id)
   
      inCarts = inCarts.get('qty') !== 1;
      console.log("incarted",inCarts);
      const value = inCarts
        ? state.get('cart',[]).map((item) =>
            item.get('id',"5") === action.payload.id
              ?item.set('qty',item.get('qty')-1)
              // {  ...item.set(('qty')-1) }
              : item
          )
        : state.get('cart',[]).filter((item) => item.get('id') !== action.payload.id);
      return state.set("cart",fromJS(value));
    //...state
    // cart: state.cart.filter((item) => item.id !== action.payload.id),
    //...state,
    //cart: state.cart.filter((item) => item.id !== action.payload.id),

    // cart: value,

    // case actionTypes.ADJUST_QTY:
    //   return {
    //     ...state,
    //     cart: state.cart.map((item) =>
    //       item.id === action.payload.id
    //         ? { ...item, qty: +action.payload.qty }
    //         : item
    //     ),
    //   };
    default:
      return state;
  }
};

export default shopReducer;
// const values =cart? state.get('cart',[]).map((item) =>
// item.get('id') === action.payload.id
//  // ? { ...item.set(('qty')+1) }
//   ?  item.setIn(['item','qty']+1) 
//   : item
// )
