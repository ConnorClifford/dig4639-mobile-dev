import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import { Card, Button } from 'react-native-elements';
import Remove from './remove'
const headers = {
    "method": "GET",
    "headers": {
        "api": "murray",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}

class Contacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {contacts: []};

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
       {
         this.state.contacts.map((value, index) => {
           return (
                <View key = {index}>
                    <Card title = {value.name}>
                        <Remove />
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
