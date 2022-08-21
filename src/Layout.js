import React  from 'react';
import cssStyle from './Layout.module.css';
import Display from './Display';
import ButtonContainer from './ButtonContainer';


const Layout = () =>{

 let displayValue = 0 

 return(
  <div className={cssStyle.container}>
    
  <Display cStyle={cssStyle}  display={displayValue} /> 

  <ButtonContainer />

  </div>
 )
  
}


export default Layout;
