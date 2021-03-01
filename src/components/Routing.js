import {BrowserRouter,Route,Link} from "react-router-dom";
import React from 'react'
import Home from './Home/Home'
import Hoteldetails from './Details/Hoteldetails'
import ListingApi from './Listpage/ListingApi'
import PlaceBooking from './booking/placebooking'
import DisplayApi from './booking/displayApi'


const Routing=()=>{
    return(
        <BrowserRouter>
             <Route exact path='/' component={Home}/>
             <Route path='/Listings/:id' component={ListingApi}/>
             <Route path='/hoteldetails/:name' component={Hoteldetails}/>
             <Route path='/bookings/:name' component={PlaceBooking}/>
             <Route path="/viewbooking" component={DisplayApi}/>

        </BrowserRouter>
           
    )
}
export default Routing