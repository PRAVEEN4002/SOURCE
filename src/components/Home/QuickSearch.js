import React from 'react'
import {Link} from 'react-router-dom'
import './QuickSearch.css'
const QuickSearch=(props)=>{

        const renderList=({quickdata})=>{
            if(quickdata){
                return(
                    quickdata.map((item)=>{
                        return(     <> 
                                    
                                    <Link to={`/Listings/${item._id}`}>
                                         <div class="quickboxes">
                                            <div class="quickimg">
                                                    <img src={`/images/${item.name}.png`} className="quickimg"/>
                                            </div>
                            
                                            <div class="quicktext" className="margin-right:30px; ">
                                                    <div className="quicktexthead" >{item.name}</div> 
                                                    <div className="quicktextsub">Start your day with exclusive {item.name}</div>
                                            </div>
                                
                                        </div>
                                
                                     </Link>
                                   </>
                                 

                        )
                    })
                )
            }
           
        }






    
    return(
        <React.Fragment>
                <div class="quicksearchheading">
                        Quick searches
                </div>
                <div class="quicksearchsubheading">
                        Discover Resturants By Meal Type
                </div>
                        <br/>
                {renderList(props)}           
                
        </React.Fragment>
    )
    
   
}
export default QuickSearch 