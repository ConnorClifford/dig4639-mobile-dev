import React from 'react';
import { View } from 'react-native';
import Weather from "./components/Weather";


class App extends React.Component {
  
  render() {
    return (
      <View>
        <Weather />
      </View>
    );
  }
}

export default App;
