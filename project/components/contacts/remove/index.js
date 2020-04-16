import React, { Component } from 'react';
import { Button } from 'react-native-elements';



class Add extends Component {

  constructor(props) {
    super(props);

    this.state = {removed: {}};

  }


 remove = (event) => {

    event.preventDefault();  

    let removePosition = event.currentTarget.id;
  
    try{
        fetch("https://plato.mrl.ai:8081/contacts/remove", {
            "method": "POST",
            "headers": {
              "api": "example",
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            "body": JSON.stringify({
              "name": "Jeffg",
              "number": removePosition
            })
          })
        .then(response => response.json() )
        .then((data) => this.setState({removed: data.removed}) )
        .catch(err => {
        console.log(err);
        });
    } catch(e) {
    console.log(e)
    }
 }

 render() {
    return (
      <span onClick={ this.remove }>remove</span>
    );
  }

}

export default Add;
