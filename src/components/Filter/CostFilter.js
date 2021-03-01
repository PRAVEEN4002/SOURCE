import React from 'react'
import axios from 'axios'
import {Component} from 'react'
const url = "https://api4002.herokuapp.com/rest?mealtype="

class CostFilter extends React.Component{
    constructor(){
        super()

    }
    CostFilter=(event)=>{

        let mealId=sessionStorage.getItem('mealId');
        let cost=(event.target.value).split(',');
        let lcost=cost[0];
        let hcost=cost[1];
        let costurl;
        if(cost=''){
            costurl=`${url}${mealId}`
        }else{
            costurl=`${url}${mealId}&lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(costurl).then((response)=>{this.props.restPerCost(response.data)})
    }

    render(){
        return(
            <React.Fragment>
                <div  onChange={this.CostFilter}>
                        <label className='radio'>
                            <input type='radio' value='' name='cusine'/>All
                        </label>
                        <label className='radio'>
                            <input type='radio' value='0,100' name='cusine'/>0-100
                        </label>
                        <label className='radio'>
                            <input type='radio' value='101,200' name='cusine'/>101-200
                        </label>
                        <label className='radio'>
                            <input type='radio' value='201,300' name='cusine'/>201-300
                        </label>
                        <label className='radio'>
                            <input type='radio' value='301,400' name='cusine'/>301-400
                        </label>
                        <label className='radio'>
                            <input type='radio' value='401,1000' name='cusine'/>401--1000
                        </label> 
                        
                        
                        
                    </div>

            </React.Fragment>
        )
    }
}

export default CostFilter