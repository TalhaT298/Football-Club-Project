import React from 'react';
import './Body.css';


const Body = (props) => {


  const{name,details,time,img}=props.info;
  const {handleClicked,info} =props;

  
    return (

<div className="card card-style m-2">

  <img src={img} className="card-img-top img-size" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{details}</p>
    <p>{time}seconds</p>
    <button onClick={()=>handleClicked(info)}  className="btn btn-success">Add to List</button>
  </div>
 

</div>


    );
};

export default Body;