import React from 'react';
import { View, StyleSheet } from "react-native";
import { Card } from 'react-native-elements';
import Remove from './remove'
import  Add from "./add";
import Profile  from "../profile";

const headers = {
    "method": "GET",
    "headers": {
        "api": "clifford",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

class Contacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: []};

  }

  addData(value) {
    //console.log(value);
    let tempArray = this.state.contacts;
    tempArray.push(value.val);
    this.setState(tempArray);
  }

  removeData(value) {
    //console.log(value);
    //console.log(value.val.name);
    let tempArray = this.state.contacts;
    //console.log(tempArray);
    for(let i = 0; i < tempArray.length; i++){
      if(tempArray[i].name == value.val.name){
        tempArray.splice(i, 1);
      }
    }
    //console.log(tempArray);
    this.setState(tempArray);
  }

  componentDidMount() {

    window.fetch("http://plato.mrl.ai:8080/contacts", headers)
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });
  }

  render() {
    return (
      <div>
        <Add attributes = {(val) => this.addData(val)}/>
        <Profile />
       {
         this.state.contacts.map((value, index) => {
           //console.log(value.name);
           return (
                <View key = {index} style = {styles.view}>
                    <Card title = {value.name} id = {index}>
                      <p>{value.number}</p>
                      <View style = {styles.remove}>
                        <Remove id = {index} attributes = {(val) => this.removeData(val)}/>
                      </View>
                    </Card>
                </View>
               );
         })
       }
      </div>
    );
  }
}

export default Contacts;

const styles = StyleSheet.create({
  view:{
    display: 'flex',
    width: '50%',
    margin: 'auto',
    textAlign: 'center'
  },

  remove:{
    display: 'block',
    width: '50px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'red',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '.75em',
    backgroundColor: '#ffaea8',
    color: 'red',
    marginRight: '70%'
  }
})