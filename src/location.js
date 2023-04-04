import React from 'react';
import pic from './assets/north.gif'
import './location.css'
const config = {
    North : {
        text : 'Your are in North' ,
        img : pic
    },
    South : {
        text : 'Your are in South' ,
        img : pic
    }
}
const Fun = (props) =>{
    var region = (props.lati > 0) ? 'North' : 'South';
    const {text,img} = config[region]
    return (
        <div className={region}>
        <div className='ui teal bottom attached label'>
        <div className='image'>
        <div><h1>{text}</h1></div>
        <div><h3>Longitude ~  {props.logi}</h3></div>
        <div><h3>Latitude ~  {props.lati} </h3></div>
        <br></br><br></br>
        </div>
        <div className='ui raised text continer segment'><img src={img} alt='pictures of south and north' /></div>
        </div>
        </div>
    )
}
export default Fun;