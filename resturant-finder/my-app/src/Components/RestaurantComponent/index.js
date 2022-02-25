import { Component } from "react";
import EachResturantItem from "../RestaurantItem";
import "./index.css"


class RestaurantComponent extends Component{

    state = {
        LocationInput:'',
        ResturantsList:[]
    }

    userLocationInput = (event)=>{
        this.setState({LocationInput: event.target.value})
    }

    getResturantsNearMe = async()=>{
        const {LocationInput} = this.state;
        //console.log(LocationInput)
        const response = await fetch(`https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=ISIR0RYJFTZ1FQHTZXBR2UF1D525ME3131WBD1GCH1MAY1GV&client_secret=ZGVY5FNQT1MKEBHNTT54T55TFOMLIUGXL4PQX0NBALG3N2AS&v=20211001&categoryId=4d4b7105d754a06374d81259&near=${LocationInput}`);
       const data= await response.json();
       console.log("data"+data)

       const updatedDate = data.response.venues.map(eachItem=>(
           {
               id: eachItem.id,
               name:eachItem.name,
               location:eachItem.location,

           }
       ))

       //console.log(updatedDate)
       this.setState({ResturantsList:updatedDate})
    }


    render(){
        const {LocationInput,ResturantsList} = this.state;
        return(
            <div className="near_me_container">
                 <h1 className="top_resturants"> Search For the Resturant!!</h1>
                 <div className="search_container">
                    <input className="input_search_box" type="search" placeholder="Enter your City" 
                    onChange={this.userLocationInput}
                    value={LocationInput}/>

                <button type="button" className="search_button" onClick={this.getResturantsNearMe}>Search Resturant</button>
                </div>


                <ul className="resturant_items_container">
                    {ResturantsList.map(eachItem=>(
                        <EachResturantItem item={eachItem} key={eachItem.id}/>
                ))}
                </ul>
             </div>
        )
    }
}

export default RestaurantComponent