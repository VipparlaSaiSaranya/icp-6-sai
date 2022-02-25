import logo from './logo.svg';
import {Component} from "react"
import './App.css';
import RestaurantComponent from './Components/RestaurantComponent';

class App extends Component{


  render(){

    return(
      <div className="main_container">
        <RestaurantComponent/>
      </div>
    )
  }
}

export default App;
