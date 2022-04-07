import React, { useEffect, useState, useContext } from 'react';
import { MoodContext } from '../App';
// functional components return components and components are just supped up html elements
function ClickMe() {
    //this is the useState Hook
    const [ count, setCount ] = useState(0); //count = 0 | setCount is my setState func only for count
    const [loaded, setLoaded] = useState(false);
    const happy = useContext(MoodContext);
    useEffect(() => { //this is a side effect of count-- only run this when count gets updated
        console.log("count changed, useEffect ran")
       fetch('foo').then(() => setLoaded(true));
       return () => console.log("GOODBYE COMPONENT") 
    }, //waiting to run the fetch until the count is updates- so the click is really like a fetch and stateUpdate
    [count] //an array of dependencies-- passing in the variable it is tracking-- if this changes it will run again
   )
    return (
        <div>
            <p>You clicked { count } times</p>
            <button onClick={() => setCount(count + 1)}>Click Me {happy}</button>
        </div>
    )
}

export default ClickMe
