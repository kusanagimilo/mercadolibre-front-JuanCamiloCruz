import React from 'react';
import { useParams } from 'react-router-dom';
import imagen from '../assets/Logo_ML.png'
import Breadcum from '../components/breadcum/breadcum'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Item = ()=>{
    
    const {id} = useParams()
    const[item, setItem] = React.useState([]);
    const[itemd, setItemd] = React.useState([]);
    const[category, setCategory] = React.useState([]);
    const[imagen_p, setImagen] = React.useState([]);
    const[condicion, setCondicion] = React.useState("");

    React.useEffect(()=>{
         obtenerDatos()
        },[]
    )

    const obtenerDatos = async() =>{
        const data = await fetch(`https://api.mercadolibre.com/items/${id}`);
        const data_item = await data.json();
        setItem(data_item);

        setImagen(data_item.pictures[0]);

        
        if(data_item.condition == 'new'){
            setCondicion("Nuevo");
        }else{
            setCondicion(data_item.condition);
        }
        

        const datad = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
        const datad_item = await datad.json();
        setItemd(datad_item);


        const category_id = data_item.category_id;

        const datac = await fetch(`https://api.mercadolibre.com/categories/${category_id}`,{
	        'mode': 'cors',
	        'headers': {
            	'Access-Control-Allow-Origin': '*',
        	}
    	});

         
        const datac_item = await datac.json();

        

        const datac_i = [];
        datac_i[0] = datac_item.path_from_root[0]['name'];
        datac_i[1] = datac_item.path_from_root[1]['name'];
        datac_i[2] = datac_item.path_from_root[2]['name'];
        datac_i[3] = datac_item.path_from_root[3]['name'];

        

        setCategory(datac_i);

        

        

    }


    return (
        <div id='nave'>
            <nav className="navbar navbar-expand-lg navbar-light">
            <Link className='navbar-brand' to="/">
                <img src={imagen} />
            </Link>
            <div className="form-inline">
            <input className="form-control" style={{width:'400px'}}type="search"  placeholder="Nunca dejes de buscar" aria-label="Search"/>
            <button className="btn btn-outline-secondary my-1 my-sm-0">Buscar</button>
            </div>
            </nav>
        
            <div className="container">
           <br/>
           <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {
                    category.map(filtros => {
                        return <Breadcum filter={filtros}/>
                    })
                }  
            </ol>
                </nav>
                <br/>
                <div style={{backgroundColor:'#ffffff'}}>
                <div className="row bg-gradient-light">
                    <div className="col-9">
                    <center><img className="img-fluid" src={imagen_p.url} style={{ float:'left',marginRight:'25px',marginLeft:'25px'}}  /></center>
                    
                </div>
                <div className="col-3">
                    <br/>
                    <span className="badge badge-light">{condicion} - {item.sold_quantity} vendidos</span>
                    <br/>
                    <br/>
                    <h3>{item.title}</h3>
                    <br/>
                    <h2>${item.price}</h2>
                    <br/>
                    <button type="button" className="btn btn-primary">Comprar</button>

                </div>
                </div>
                <div className="row">
                <div className="col-9" style={{marginLeft:'25px',marginRight:'25px'}}>
                    <h3>Descripcion del producto</h3>
                    <p >{itemd.plain_text}</p>
                </div>
                
                </div>
                </div>
            </div>
        </div>
    )
}

export default Item;