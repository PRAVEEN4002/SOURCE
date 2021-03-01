import React from 'react'
import axios from 'axios'
import {Component} from 'react'
const url = "https://api4002.herokuapp.com/rest?mealtype="

class SortFilter extends React.Component{
    constructor(){
        super()

    }
    sortfilter=(event)=>{
    
        let mealId=sessionStorage.getItem('mealId');
        let sort=(event.target.value)
       
          let sorturl=`${url}${mealId}&sort=${sort}`
        
        axios.get(sorturl).then((response)=>{this.props.restPerSort(response.data)})
    }

    render(){
        return(
            <React.Fragment>
                <div  onChange={this.sortfilter}>
                        <label className='radio'>
                            <input type='radio' value='1' name='cusine'/>Low to High
                        </label>
                        <label className='radio'>
                            <input type='radio' value='-1' name='cusine'/>High to Low
                        </label> 
                    </div>

            </React.Fragment>
        )
    }
}

export default SortFilter