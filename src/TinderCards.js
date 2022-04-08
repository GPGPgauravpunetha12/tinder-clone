import {useState,useEffect} from "react";
import React from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from "./firebase";

function TinderCards() {
   const [people, setPeople] = useState([]);

// piuece of code which runs on a condition 
    useEffect(() => {
 const unsubscribe=database
.collection('people')
.onSnapshot(snapshot => 
    {
    setPeople(snapshot.docs.map(doc => doc.data()))
});
return ()=>{
    //this is cleanup
    unsubscribe();
}
        //this will runs once  comp loads in people again and again
    },[])
    
    // Array to push the people in react way  
    // setPeople([...people,'sunny','gaurav'])
    return (
    <div>
        
         <div className="tinderCards__cardContainer">
         {people.map((person) =>(
        
            <TinderCard
               className="swipe"
               key={person.name}
                preventSwipe={['up','down']}>
 
                 <div 
                  style={{ backgroundImage:`url(${person.url})`}}
                  className="card">
 
                     <h3>{person.name}</h3>
                 
 
                 </div>
             </TinderCard>
         ))}
         </div>
        
    </div>
  );
}

export default TinderCards;