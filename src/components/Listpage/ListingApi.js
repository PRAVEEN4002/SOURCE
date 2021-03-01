import React,{Component} from 'react'
import Listing from './Listing'
import {Link} from 'react-router-dom'
import sortfilter from '../Filter/SortFilter'
import CuisineFilter from '../Filter/cuisinefilter'
import CostFilter from '../Filter/CostFilter'
import '../Filter/filter.css'
import CityFilter from '../Filter/cityfilter'
import SortFilter from '../Filter/SortFilter'
import Paginate from './Pagination'
import axios from 'axios'
const url='https://api4002.herokuapp.com/rest?mealtype=';
const curl="https://api4002.herokuapp.com/city";



class ListingApi extends React.Component
{   
    constructor(){
        super()
            this.state={
                restList:'',
                city:'',
                cuisineName:'',
                currentPage:1,
                restPerPage:1,
                currentRestList:''
                
            }
    }
    //getting current restaurents
    
   
    componentDidMount(){
        // console.log(this.props.match.params.id)
        // var mid=this.props.match.params.id;
        // sessionStorage.setItem('mealId',mid)
        // console.log(`${url}${mid}`)
        //  axios.get(url).then((response)=>{})
        // fetch(`${url}${mid}`,{method:'GET'}).then((res)=>res.json()).then((data)=>{this.setState({restList:data})})
        // fetch(curl,{method:'GET'}).then((res)=>res.json()).then((data)=>{this.setState({city:data})})
            console.log(this.props)
            console.log(this.props.match.params.id)
            var mealid = this.props.match.params.id
            sessionStorage.setItem('mealId',mealid)
            console.log(`${url}${mealid}`)
            axios.get(`${url}${mealid}`)
            .then((response) => {this.setState({restList:response.data})})
    }
   paginate=(pageNumber)=>{
           {this.setState({currentPage:pageNumber})}
    }

   /*renderCity=(data)=>{
       if(data){
           return(
               data.map((item)=>{
                   return(
                       <option>{item.city_name}</option>
                   )
               })
           )
       }
     }
     renderCuisine=(data)=>{
         if(data){
             return(
                 data.map((item)=>{
                     return(
                        <>  
                             <input type='checkbox'></input> {item.name} <br></br>
                        </>
                     )
                 })
             )
         }
     }*/
     setDataPerFilter=(sortedData)=>{
     
            this.setState({restList:sortedData})

       
       
    }
    render(){
         const x=Number(this.state.currentPage);
         const y=Number(this.state.restPerPage);
        const indexOfLastRest=x*y;
        const indexOfFirstRest=indexOfLastRest-y;
        this.state.currentRestList=this.state.restList.slice(indexOfFirstRest,indexOfLastRest);
        return(
            <React.Fragment>
                
                <div className="Header">
                       <Link to='/'> <div className="logo">e!</div></Link>   
                     <span className="create">create account</span>
                     <span className="log">Login</span>
                </div>
                <div className='filter'>
                    <div style={{marginLeft:'48px'}}>
                        <div class="head">
                            Filters
                        </div> 
                            select location <br></br>    
                            <CityFilter restPerCity={(data)=>{this.setDataPerFilter(data)}}/>
                        <br/>
                             <span className='cuisine'>Cuisine</span>
                            <CuisineFilter restPerCuisine={(data) => {this.setState({restList:data})}}/>
                            <span className='cuisine' >Cost</span>
                            <CostFilter restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                            <span className='cuisine' >Sort</span>
                            <SortFilter restPerSort={(data)=>{this.setState({restList:data})}}/>
                            <Paginate restPerPage={this.state.restPerPage} totalRest={this.state.restList.length} paginate={this.paginate}/>
                            
                    </div>
                   
                   
                </div>
               
               
                
                <Listing Listdata={this.state.currentRestList}/>
                
                


            </React.Fragment>
           

        )
    }
}
export default ListingApi