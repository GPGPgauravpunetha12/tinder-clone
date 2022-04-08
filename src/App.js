import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards'
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import './App.css';
import SwipeButtons from "./SwipeButtons"
import Chats from "./Chats"
import ChatScreen from "./ChatScreen"

function App() {
  return (
    <div className="App">
  <Router>
<Switch>
<Route path="/chat/:person">
<Header backButton="/chat"/>
<ChatScreen/>
  </Route>
<Route path="/chat">
<Header backButton="/"/>
<Chats/>
  </Route>
{/* Always keep path="/" or home down in hierrachy of route otherwise will give wrong O?P */}
  <Route path="/">
  <Header/>
    <TinderCards/>
    <SwipeButtons />
  </Route>
</Switch>
  
</Router>
    </div>
  );
}

export default App;
{/*Tinder cards*/}

  {/*Buttons below tinder cards*/}
           
           
{/*chat-screen*/}
              
{/*Individual chatscreen*/}