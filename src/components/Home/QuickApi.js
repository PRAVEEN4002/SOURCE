import React,{Component} from 'react'
import QuickSearch from './QuickSearch'
const url='https://api4002.herokuapp.com/meal'

class QuickApi extends React.Component{
    constructor(){
        super()
        this.state={
            mealType:''
        }
    }
    componentDidMount(){
        fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>{this.setState({mealType:data})})
    }
    render(){
        return(
            <QuickSearch quickdata={this.state.mealType}/>
        )
    }
}
export default QuickApi 

