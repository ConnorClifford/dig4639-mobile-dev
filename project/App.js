import React from 'react';
import Contacts from "./components/contacts";
import Add from "./components/contacts/add";
import Profile from "./components/profile";
//import profile from "./components/profile"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Add />
          <h1>Contacts App</h1>
          <Profile />
        </div>
        <Contacts />
      </div>
    );
  }
}

export default App;
