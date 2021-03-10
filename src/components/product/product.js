import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const Product = ({produ})=> {
   
    const direccion = produ.address;
    const link = "/item";
    return(

        
            <li className="list-group-item">
                <Link to={`${link}/${produ.id}`}>
                <img src={produ.thumbnail} style={{width:'200px',height:'200px',float:'left',marginRight:'25px'}}  />
                </Link>
                <h3 style={{float:'left'}}>${produ.price}</h3>
                <span style={{float:'right'}}>{direccion.state_name}</span>
                <br/>
                <br/>
                <div id='descripcion' style={{float:'left',width:'50%'}}>
                    {produ.title}
                 </div>
            </li>
        
            )
}

export default Product;