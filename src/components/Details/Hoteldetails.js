import React,{Component} from 'react'

import '../Listpage/Listing.css'
import {Link} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const url='https://api4002.herokuapp.com/rest?name='

class Hoteldetails extends React.Component{
    constructor(){
        super()
            this.state={
                rest:''
            }
        }
    
    componentDidMount(){
        console.log(this.props.match.params.name)
        var restname=this.props.match.params.name;
        console.log(`${url}${restname}`)
        fetch(`${url}${restname}`,{method:'GET'}).then((res)=>res.json()).then((data)=>this.setState({rest:data}))
    }
    bandi=()=>{
       this.props.history.push('/viewbooking')
    }
 
    renderRest=(data)=>{
        if(data){
            return(
                   data.map((item)=>{
                       return(
                           <React.Fragment>

                            <div className="Header">
                                <Link to='/'> <div className="logo">e!</div></Link>   
                                <span className="create">create account</span>
                                <span className="log">Login</span>
                            </div>


                            <div class="container">
                                 <div class="panel panel-primary">
                                     <div class="panel-heading"> <h2>{item.name}</h2></div>
                                     <div class="panel-body"><img src={`${item.thumb}`} style={{width:"100%",height:"360px"}}/> 
                                      <h2>address</h2>
                                       <h4> {item.address}</h4> 
                                        <hr></hr>
                                        <Tabs>
                                            <TabList>
                                             <Tab>Overview</Tab>
                                             <Tab>Contact</Tab>
                                            </TabList>
 
                                            <TabPanel>
                                               <p> {item.name} is India's largest and highest-valued online food ordering and delivery platform founded in 2014. {item.name} is based in {item.city_name}, India, and as of March 2019, was operating in 100 Indian cities. ... {item.name} is operated by Bundl Technologies Private Limited..</p> 
                                            </TabPanel>
                                            <TabPanel>
                                                <p> 
                                                    <b>address</b> <br></br>
                                                    {item.address}
                                                    {item.locality} <br></br>
                                                    <h5> <b>phone:</b> 9908181304</h5>  
                                                </p>
                                            </TabPanel>
                                        </Tabs>
                                        <Link to='/' className='btn btn-danger'> back</Link>&nbsp;
                                        <Link to={`/bookings/${item.name}`} className='btn btn-success'> proceed order</Link>
                                     </div>
                                 </div>
                            </div>                                     
                                      
                            
                                   
                            </React.Fragment>
                       )
                   })
            )
           
        }else{
            return(
                <img src='/images/loader1.gif' height='320px' width='420px' className='loader1'></img>
                
            )
        }
    }
  
    render(){

        return(
            <React.Fragment>

                {this.renderRest(this.state.rest)}
               
            </React.Fragment>
           
        )
    }

}
export default Hoteldetails