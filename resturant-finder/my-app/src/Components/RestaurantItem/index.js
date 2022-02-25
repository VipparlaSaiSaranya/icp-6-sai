import {Component} from 'react';
import "./index.css";

class EachResturantItem extends Component{

    render(){
        const {item} = this.props;
        const {name,location} = item;
        return(
            <li className="each_resturant_item">
                <p className="resturant_name bold">{name}</p>
                <div className="location_container">
                    <p className="resturant_location bold">Location:</p>
                    <p className="resturant_location">{location.address}</p>
                    <p className="resturant_location">{location.crossStreet}</p>
                    <p className="resturant_location">{location.city}</p>
                    <p className="resturant_location">{location.country}</p>
                </div>
            </li>
        )
    }

}

export default EachResturantItem;