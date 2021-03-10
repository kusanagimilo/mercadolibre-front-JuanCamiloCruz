import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/list'
import Item from './containers/item'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends React.Component{
    render(){
        return (
           <Router>
               <div className='App'> 
               <Route path="/item/:id">
                    <Item />
               </Route>
               <Route exact path="/">
                <List/>
               </Route>
            </div>   
           </Router>
            )
    }
}


ReactDOM.render(<App/>,document.getElementById('root'));

//ReactDOM.render(<List/>,document.getElementById('root'));