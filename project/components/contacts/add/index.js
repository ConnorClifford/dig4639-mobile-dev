import React, { Component } from 'react';


class Add extends Component {

  constructor(props) {
    super(props);

    this.state = {added: {}};

    this.nameRef= React.createRef();
    this.numberRef = React.createRef();
  }

 add = (event) => {

    event.preventDefault();

    let name = this.nameRef.current.value;
    let number = this.numberRef.current.value;

    try{

    fetch("http://plato.mrl.ai:8080/contacts/add", {
      "method": "POST",
      "headers": {
        "API": "clifford",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify({
        "name": name,
        "number": number
      })
    })
    .then(response => response.json() )
    .then((data) => {
      this.setState({added: data.added})
      this.props.attributes({val: this.state.added})

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
      <div>
        <h3>Add a contact:</h3>
        <form onSubmit={this.add}>
          Name: <input type="text" ref={this.nameRef}/><br />
          Number: <input type="text" ref={this.numberRef}/><br />
          <button>Add</button>
        </form>
        <hr />
        <p>{this.state.added.name}</p>
        <p>{this.state.added.number}</p>
      </div>
    );
  }
}

export default Add;
