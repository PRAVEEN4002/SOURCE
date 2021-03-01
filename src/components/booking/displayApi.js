import React,{Component} from 'react';
import axios from 'axios';
import ViewBooking from './displayBooking';

const url = "https://api4002.herokuapp.com/orders"

class DisplayApi extends Component{
    constructor(){
        super()

        this.state={
            booking:''
        }
    }

    render(){
        return(
            <div>
                <ViewBooking bookdata={this.state.booking}/>
            </div>
        )
    }

    componentDidMount(){
        axios.get(url).then((res) => {this.setState({booking:res.data})})
    }
}


export default DisplayApi;