import React from 'react'
import {Link} from 'react-router-dom'
import './Listing.css'

const Listing=(props)=>{
   const renderRest=({Listdata})=>{
       if(Listdata){
           return(
               Listdata.map((item)=>{
                   return(
                       <>
                            <div className='fooditems'>
                                    <div className='foodbox1'>
                                        <img src={`${item.thumb}`} className='leftimg'></img>
                                        <div className='textbox2'>
                                            <Link to={`/Hoteldetails/${item.name}`}>
                                              <div className='rightboxhead'>{item.name}</div>    
                                            </Link> 
                                            <div className='rightboxsub'>{item.address}</div>
                                        </div>
                                    </div>
                                    <div className='line'></div><br/>
                                    <div className='foodbox2'>
                                        <div className='fb1'>
                                        <span id='heading1'>CUSINES <br></br>COST FOR TWO</span>
                                        </div>
                                        <div className='fb2'>
                                            <span id='heading1'>BAKERY</span><br></br>
                                            <span id='heading1'> &#8377; {item.cost}</span>
                                        </div>
                                    </div>
                            </div>
                        </>
                    )
                 })
            )
        }
        else{
            return(
                <img src='/images/loader.gif' height='320px' width='420px' className='loader'></img>
            )
        }
    }
   return(
       <>
            

           {renderRest(props)}
       </>
   )
}
export default Listing

