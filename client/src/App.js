import React, { useState } from 'react';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';
import './App.css';

function App() {
  // App.js is the parent component and MessageForm.jsx and MessageDisplay.jsx are the children. Lifting State includes creating it in a common parent that can pass data down to ALL
  //    components that will need access to the getter, setter or both

  //       getter,    setter
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  
  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( newMessage );
  }

  return (
      <>
          <MessageForm onNewMessage={ youveGotMail}/>
          {/* // pass in state getter */}
          <MessageDisplay message={ currentMsg } />
          {/* displays value */}
      </>
  );
}

export default App;
