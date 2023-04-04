import React from 'react';
import ReactDOM from 'react-dom';
import Fun from './location';

class First extends React.Component{
  constructor(props){
    super(props)
    this.state = {lat : null}
    this.state = {log : null}
    window.navigator.geolocation.getCurrentPosition(
      (position) => {this.setState({lat : position.coords.latitude , log : position.coords.longitude })},
      (error) => {this.setState({err : error.message})});
  }

  render(){   
 if(!this.state.lat && this.state.err){
 return <div>Errot : {this.state.err}</div>
 }
 if(this.state.lat && !this.state.err){
  return <Fun lati={this.state.lat} logi = {this.state.log}/>
  }
  else{
    return <div>Accessing permission</div>
  }
 } 
}
 ReactDOM.render( <First />, document.querySelector('#root'))
