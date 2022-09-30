import React, { useEffect, useState } from 'react';
import Aside from '../Aside/Aside';
import Body from '../Body/Body';
import './Home.css';

const Home = () => {

const[infos , setinfos]=useState([]);
const[players, setplayers]=useState([]);

useEffect( ()=>{
fetch('data.json')
.then(res=>res.json())
.then(data=>setinfos(data));


},[])

const handleClicked=(info)=>{
    
  const newPlayer =[...players,info];

  setplayers(newPlayer);

  }
   //console.log(players);
    return (
<div className='m-3 d-flex justify-content-evenly flex-column flex-md-row'>

  <div className="card-info"> 
  

    {

       infos.map(info=><Body 
       key={info.id}
       info={info}
       handleClicked={handleClicked}
       
       
       ></Body>)


    }


   

</div>

<div className="aside">

<Aside 

players={players}


></Aside>

</div>



</div>
      
    );
};

export default Home;