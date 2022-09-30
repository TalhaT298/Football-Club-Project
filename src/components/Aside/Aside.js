import React, { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Aside = ({players}) => {

    console.log(players);

    const [breakTimes, setBreakTimes] = useState(0);

    
const breakTime=(event)=>{
        let newBreakTime= Number(event.target.innerText);
        setBreakTimes(newBreakTime);
        localStorage.setItem('breakTime', newBreakTime);
    }

    useEffect(()=>{
        const breakTime = Number(localStorage.getItem('breakTime'));
        if(breakTime){
            setBreakTimes(breakTime);
        }else{
            setBreakTimes(0);
        }
    }, []);
 
    let total=0;
    for(const player of players){
        total= total+ player.time;
        console.log(total);
    }
 

    const notify = () => toast("Wow so easy!");
    return (
        
       <div>
        <div className='bg-white rounded'>
        <div className='pt-3 mt-3 me-3 ms-3 bg-opacity-75 bg-success rounded'>
            <h4 className='text-white'>Talha Tarique</h4>
            <h6 className='text-white'>Web Developer</h6>
            <h3 className='p-3 text-white text-center'>Skills</h3>
               <div className='p-1 me-3 ms-3 mb-3 text-dark bg-opacity-75 d-flex justify-content-evenly'>
            <h4 className='p-2 text-white'>JavaScript</h4>
            <h4 className='p-2 text-white'>Html</h4>
            <h4 className='p-2 text-white'>Css</h4>

        </div>
        </div>
     
        </div>

        <div className='bg-white rounded p-4 bg-success'>
            <h5 className='text-success mb-4'>Add a Break</h5>
            <div className='d-flex justify-content-evenly'>

                <button onClick={(event)=>breakTime(event)} className='bg-success border border-white rounded-circle p-2 text-white'>10</button>
                <button onClick={(event)=>breakTime(event)} className='bg-success border border-white rounded-circle p-2 text-white'>20</button>
                <button onClick={(event)=>breakTime(event)} className='bg-success rounded-circle p-2 text-white border border-white'>30</button>
                <button onClick={(event)=>breakTime(event)} className='bg-success rounded-circle p-2 text-white border border-white'>40</button>
              
            </div>
        </div>

        <div className='bg-white rounded p-4 m-3 text-success'>
   
            <h3 className='text-success'>Exercise Details</h3>
            <div className='d-flex justify-content-evenly'>
                <h5>Exercise time</h5>
                <h4>{total}</h4>
            </div>

              <div className='d-flex justify-content-evenly'>
                <h5>Break time</h5>
                <h4>{breakTimes}</h4>
            </div>
            <div>
        <button onClick={notify} className='bg-success border border-white p-2 text-white'>Toastify</button>
        <ToastContainer />
    
        </div>

           
        
        </div>

      
  
        
       </div>
        
    );
};

export default Aside;