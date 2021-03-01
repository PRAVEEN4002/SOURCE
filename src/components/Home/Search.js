import React,{Component} from 'react';
import Hotel from '../Details/Hoteldetails'
import {withRouter} from 'react-router-dom'
import './Search.css';
const url="https://api4002.herokuapp.com/city";
const rurl="https://api4002.herokuapp.com/rest?city=";
const url1='http://localhost:8555/oauth?code=ed36c8b9afc4f1033b94'

class Search extends Component{

    constructor(){
        super()
        this.state={
            city:'',
            rest:'',
            imgurl:'',
            username:'',
            exp:''
        }
    }

            //calling API to get data
     componentDidMount(){

      
            
        console.log(this.props)
        const code = (this.props.location.search).split('=')[1];
        if(code){
            let requestData={
                code:code
            }
            console.log("requestData>>>",requestData)
            fetch('https://localhost:3000',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(requestData)
            })
            .then((res)=>res.json())
            .then((data) =>{
                console.log( '....... this is data', data)
                 var user = data.login;
                var img = data.avatar_url
                sessionStorage.setItem('user1',user)
                fetch(url,{method:'GET'})
                .then((res) => res.json())
                .then((data)=> this.setState({city:data,username:user,imgurl:img}))
                
               
            })}
       




            fetch(url,{method:'GET'})
            .then((res) => res.json())
            .then((data)=> this.setState({city:data}))
    }
     






    //displaying data in 
    renderCity=(data)=>{
        if(data){
            return data.map((item)=>{
                return  <option value={item.city}>{item.city_name}</option>
                
            })
        }

    }
    renderRest=(data)=>{
        if(data){
            return data.map((item)=>{
                return <option value={item.name}>{item.name}</option>
            })
        }
    }
   

   
    handleCity=(event)=>{
        console.log(event.target.value)
        const cityId=event.target.value
        console.log(`${rurl}${cityId}`)
        fetch(`${rurl}${cityId}`,{method:'GET'}).then((res)=>res.json()).then((data)=>{this.setState({rest:data})});
    }
    handleRest=(event)=>{
        console.log(event.target.value)
        
       this.props.history.push(`/hoteldetails/${event.target.value}`)
       
    }
    conditionalButton=()=>{
        if(sessionStorage.getItem('username')==null || sessionStorage.getItem('username')=='undefined'){
            return(
                <a href='https://github.com/login/oauth/authorize?client_id=3c5818cdf9aefd77ade4'>Login With Github</a>  
            )
            
        }else{
            return(
                <>
                     <img src={this.state.imgurl} style={{heightL:'100px',width:'100px'}}/>
                        HI {this.state.username}
                 </>
               
            )
        }

    }
     render(){
    
        return(
            <React.Fragment>
                <div class="imagecontainer img-responsive ">
              <div>
                      {this.conditionalButton()}
                   
                     <a href="https://www.youtube.com/" target="-blank"> <img src="https://i.ibb.co/gtf1HY9/youtube.png" class="sociallogo"/></a>
                     <a href="https://www.facebook.com/" target="-blank"> <img src="https://i.ibb.co/5csJktW/facebook.png " class="sociallogo"/></a>
              </div>
              <div id="logo">
                     <b> e! </b>
              </div>

              

              <div id="heading" class="row">
                     Find Best Resturants,Cafes,Bars
              </div>

              <div class="finder">
                     <select class="locator" onChange={this.handleCity}>
                            <option>...city here...</option>
                            {this.renderCity(this.state.city)}

                     </select>

                     <select class="locator" onChange={this.handleRest}>
                         <option>...select hotel...</option>
                           {this.renderRest(this.state.rest)}
                     </select>

              </div>
       </div>
               
            </React.Fragment>
        )
    }

     

  
}

export default withRouter(Search);