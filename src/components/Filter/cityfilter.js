import axios from 'axios'
import React from 'react'
import {Component} from 'react'

import './filter.css'
const url='https://api4002.herokuapp.com/rest?mealtype='


class CityFilter extends React.Component{
    
  cityfilter=(event)=>{
      let cityId=event.target.value;
      console.log(`${cityId}`)
      let mealId=sessionStorage.getItem('mealId');
      let cityurl;
      if(cityId=''){
         cityurl=`${url}${mealId}`
      }else{
          cityurl=`${url}${mealId}&city=${event.target.value}`
      }
       axios.get(cityurl).then((response)=>{this.props.restPerCity(response.data)})
    //   fetch(cityurl,{mehod:'GET'}).then((res)=>{res.json()}).then((data)=>{this.props.restPerCity(res.data)})
      console.log(`${cityurl}`)
      
  }

    render(){
        return(
            <React.Fragment>
                 <select className='box' onChange={this.cityfilter}>
                    <option value='' name='city'> search</option>
                    <option value='1' name='city'> Delhi</option>
                    <option value='2' name='city'> Mumbai</option>
                    <option value='3' name='city'> Pune</option>
                    <option value='4' name='city'> Bangalore</option>
                    <option value='5' name='city'> Chandigarh</option>
                 </select>
                
            </React.Fragment>
        
        )
    }

}
export default CityFilter