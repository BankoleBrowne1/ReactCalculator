import React  from "react";
import cssStyle from './Layout.module.css';

const Button = (prop) => {
 
  return(
   <div className={cssStyle.btn}>{prop.value}</div>

 );


}

export default Button;