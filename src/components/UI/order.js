import React from "react"
import { connect } from "react-redux";
import {Map, List } from "immutable";
import PropTypes from "prop-types"
import "./order.css";
const Order=({info})=>{
console.log("info",info)
const name=info.get('name','name')
const email=info.get('email',"email")
const address=info.get('address','address')
const phone=info.get('phoneNo','0')

console.log("nameemail",name,email)

    return(
        <>
        
       <center>
        <div className="div">
         
           <abbr> <h2>User Info</h2></abbr>
            <span className="span" >Name :&nbsp;&nbsp;{name}</span><br/><br/>
            <span className="span">Email :&nbsp;&nbsp;{email}</span><br/><br/>
            <span className="span">Phone :&nbsp;&nbsp;{phone}</span><br/><br/>
            <span className="span">Address :&nbsp;&nbsp;{address}</span>
          
            
        </div>   
        </center>
    
        </>

    )
}

Order.propTypes = {
    info: PropTypes.instanceOf(Map),
  };
  const mapStateToProps = (state) => {
      return {
      info: selectProgramInput(state),
    };
  };
  
  const globalConfigurationState = (state) =>{
    console.log("state value of buton",state)
    return  state.data;
  }
  
  export const selectProgramInput = (state) =>globalConfigurationState(state).get("info",[]);
  export default connect(mapStateToProps)(Order);
  