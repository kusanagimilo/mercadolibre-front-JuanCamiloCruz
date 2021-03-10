import React from 'react';
import Product from '../components/product/product';
import Breadcum from '../components/breadcum/breadcum'
const API = 'https://api.mercadolibre.com/sites/MLA/search?';
import imagen from '../assets/Logo_ML.png'

class List extends React.Component{

    constructor(){
        super();
        this.state = {
            data_p: [],
            searchTerm : '',
            error:'',
            databread : []
        }
    }

    async componentDidMount(){
        
        const res = await fetch(`${API}q=${this.state.searchTerm}&limit=4`);
        const resJSON = await res.json();
        this.setState({data_p: resJSON.results});
        this.setState({databread:resJSON.filters});
        //console.log(resJSON);
    }

    
    async handleSubmit(e){
        e.preventDefault();
        //console.log("enviando");
        if(!this.state.searchTerm){
            return this.setState({error: 'Por favor ingresa un valor en la busqueda'})
        }

        const res = await fetch(`${API}q=${this.state.searchTerm}&limit=4`);
        const data = await res.json(res);

        const valor = data.paging;

        if(valor.total == 0){
            return this.setState({error: 'Su busqueda no posee respuestas'})
        }else{
            this.setState({error:''});
            this.setState({data_p: data.results});
            

            
            const arreglo = data.available_filters;
            const arreglo_formado = arreglo[0].values;

            

            const arreglo_bread = [];
            arreglo_bread[0] = arreglo_formado[0].name;
            arreglo_bread[1] = arreglo_formado[1].name;
            arreglo_bread[2] = arreglo_formado[2].name;
            arreglo_bread[3] = arreglo_formado[3].name;

            

            this.setState({databread:arreglo_bread});
        }

        
    }

    render(){
        return (
            <div id='nave'>
            <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#"><img src={imagen} /></a>
            <form className="form-inline" onSubmit={(e) => this.handleSubmit(e)}>
            <input onChange={e => this.setState({searchTerm: e.target.value})} className="form-control" style={{width:'400px'}}type="search"  placeholder="Nunca dejes de buscar" aria-label="Search"/>
            <button className="btn btn-outline-secondary my-1 my-sm-0" type="submit">Buscar</button>
            </form>
            </nav>
           <div className="container">
           <br/>
           <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
               {
                   this.state.databread.map(filtros => {
                       return <Breadcum filter={filtros}/>
                   }) 
                }   
            </ol>
            </nav>

            <br/>
            <p>
                {this.state.error ? this.state.error : ''}
            </p>  
            <ul className="list-group">
                {
                   this.state.data_p.map(producto => {
                       return <Product produ={producto} key={producto.id}/>
                   }) 
                }    
            </ul>
        </div>
        <br/>
        </div>
        
        )
    }

}

export default List;