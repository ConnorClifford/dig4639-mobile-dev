import React from "react";
import {View, Text, StyleSheet} from "react-native";
import { Card } from 'react-native-elements';


class Weather extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      periods: []
    };

  }

  componentDidMount() {

    fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
    .then(res => res.json())
    .then((result) => {
      let periods = result.properties.periods;
     
      this.setState({
        periods: periods
      });
      
    })
    .catch((error) => {console.log(error)} );

  }

  render() {
    return(
      <View>
        {
            this.state.periods.map((value, index) => {
                return <View key={index} style = {styles.card}>
                        <Card title = {value.name}>
                            <Text style = {styles.temp}>Temperature: {value.temperature}{value.temperatureUnit}</Text>
                            <Text style = {styles.detail}>{value.detailedForecast}</Text>
                        </Card>
                    </View>;
            })
        
        }
      </View>
    );
  }

}

export default Weather;


const styles = StyleSheet.create({
    card: {
      flex: 1,
      width: 300,
      margin: "auto",
      backgroundColor: '#fff',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },

    temp: {
        fontSize: 16,
    },

    detail: {
        fontSize: 12,
        fontStyle: "italic"
    },
  });