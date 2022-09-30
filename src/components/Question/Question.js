import React from 'react';

const Question = () => {
    return (
        <div className='bg-success p-5 m-3 text-white col-12 rounded'>
            <div className='p-5'>
                <h2>How react works?</h2>
                <p>

React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>

            <div className='p-5'>
                <h2>
                    What is the difference between props and state?
                </h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            </div>
 
            <div className='p-5'>
                <h2>What is the need of useEffect except data load?</h2>
                <p>
The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects.</p>
            </div>
            
        </div>
    );
};

export default Question;