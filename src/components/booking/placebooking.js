import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom'

const BookingUrl='https://api4002.herokuapp.com/placeorder';

class PlaceBooking extends React.Component{
    constructor(props){
        super(props)
            this.state={
                
                hotel_name:this.props.match.params.name,
                name:'',
        
                phone:''
            
              }
    }
    
    handleSubmit = () => {
        console.log(this.state.hotel_name)
        fetch(BookingUrl,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            })
            .then(this.props.history.push('/viewBooking'))
    }
    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    render(){
        return(
            <React.Fragment>
                  
                  <div className="Header">
                                <Link to='/'> <div className="logo">e!</div></Link>   
                                <span className="create">create account</span>
                                <span className="log">Login</span>
                   </div>
                <div className='container'>
                     <div className='panel panel-primary'>
                        <div className='panel panel-heading'>
                            Place Booking
                        </div>
                        <div className='panel panel-body'>
                            <div className='form-group'>
                                <label>Hotel Name</label>
                                <input name='hotel_name' className='form-control' value={this.state.hotel_name}  readOnly onChange={this.handleChange}/>
                            </div>
                           
                            <div className='form-group'>
                                <label>Name</label>
                                <input name='name' className='form-control' value={this.state.name} required onChange={this.handleChange}/>
                            </div>

                            <div className='form-group'>
                                <label>phone</label>
                                <input name='phone' className='form-control' value={this.state.phone} required onChange={this.handleChange}/>
                            </div>
                            <button className='btn btn-success' onClick={this.handleSubmit}>
                                    place booking
                            </button>
                        </div>
                    </div>
                </div>
                   
            </React.Fragment>
        )
    }
}
export default PlaceBooking 