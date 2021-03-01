import React from 'react'
import {Component} from 'react'
import axios from 'axios';
import './filter.css'
const url='https://api4002.herokuapp.com/rest?mealtype='

class CuisineFilter extends React.Component{

     Cuisienfilter=(event)=>{
         let mealId=sessionStorage.getItem('mealId');
         let cuisineId=event.target.value;
         let cuisineurl;
         if(cuisineId==''){
            cuisineurl=`${url}${mealId}`
         }else{
             cuisineurl=`${url}${mealId}&cuisine=${cuisineId}`
         }
         axios.get(cuisineurl).then((response)=>{this.props.restPerCuisine(response.data)})
       

    }



    render(){
        return(
                <React.Fragment>
                    <div  onChange={this.Cuisienfilter}>
                        <label className='radio'>
                            <input type='radio' value='' name='cusine'/>All
                        </label>
                        <label className='radio'>
                            <input type='radio' value='1' name='cusine'/>North Indian
                        </label>
                        <label className='radio'>
                            <input type='radio' value='2' name='cusine'/>South Indian
                        </label>
                        <label className='radio'>
                            <input type='radio' value='3' name='cusine'/>Chinese
                        </label>
                        <label className='radio'>
                            <input type='radio' value='4' name='cusine'/>Fast Food
                        </label>
                        <label className='radio'>
                            <input type='radio' value='5' name='cusine'/>Street Food
                        </label>
                    </div>
                </React.Fragment>

        )
    }
}
export default CuisineFilter
