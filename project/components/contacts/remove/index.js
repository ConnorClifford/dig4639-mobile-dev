import React, { Component } from 'react';
import { Button } from 'react-native-elements';



class Add extends Component {

  constructor(props) {
    super(props);

    this.state = {removed: {}};

    this.posRef= React.createRef();


  }


 remove = (event) => {

    event.preventDefault();  

    let position = this.posRef.current.id;
    //console.log(position);

  
    try{
        fetch("http://plato.mrl.ai:8080/contacts/remove", {
            "method": "POST",
            "headers": {
              "api": "clifford",
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            "body": JSON.stringify({
              "position": position 
            })
          })
        .then(response => response.json() )
        .then((data) => {
          this.setState({removed: data.removed});
          this.props.attributes({val: this.state.removed})

         })
        .catch(err => {
        console.log(err);
        });
    } catch(e) {
    console.log(e)
    }
 }

 render() {
    return (
      <span onClick={ this.remove } ref={this.posRef} id={this.props.id}>remove</span>
    );
  }

}

export default Add;
