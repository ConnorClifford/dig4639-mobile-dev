import React from "react";
import {View, Text, Picker, Button, StyleSheet} from "react-native";
import { Card } from 'react-native-elements';

class Quiz extends React.Component {

    constructor(props){
        super(props);


        this.state = {
            question1: '',
            question2: '',
            question3: '',
            question4: '',
            question5: '',
            score: 0
        };

        this.q1 = 'correct';
        this.q2 = 'incorrect';
        this.q3 = 'incorrect';
        this.q4 = 'incorrect';
        this.q5 = 'correct';

        this.scoringAreaStyle = {
            display: 'none',
            textAlign: 'center',
            padding: '20px',
            color: 'red',
        }

        this.question1Style = {
            display: 'block'
        }
        this.question2Style = {
            display: 'none'
        }
        this.question3Style = {
            display: 'none'
        }
        this.question4Style = {
            display: 'none'
        }
        this.question5Style = {
            display: 'none'
        }
        this.submitStyle = {
            display: 'none'
        }
    }



    updateAnswer1 = (answer) => {
        this.q1 = answer;
       this.setState({ question1: answer });
       //alert(this.state.question1)
    }
    updateAnswer2 = (answer) => {
        this.q2 = answer;
        this.setState({ question2: answer });
        //alert(this.state.question2)
     }
     updateAnswer3 = (answer) => {
         this.q3 = answer;
        this.setState({ question3: answer });
        //alert(this.state.question3)
     }
     updateAnswer4 = (answer) => {
         this.q4 = answer;
        this.setState({ question4: answer });
        //alert(this.state.question4)
      
     }
     updateAnswer5 = (answer) => {
         this.q5 = answer;
        this.setState({ question5: answer });
        //alert(this.state.question5)
     }


     nextQuestion1 = (answer) => {
        this.setState({ question1: answer})
        //alert(this.state.question1);
        this.question1Style.display = 'none';
        this.question2Style.display = 'block';
     }
     nextQuestion2 = (answer) => {
        this.setState({ question2: answer })
        //alert(this.state.question1);

        this.question2Style.display = 'none';
        this.question3Style.display = 'block';
     }
     nextQuestion3 = (answer) => {
        this.setState({ question3: answer })
        this.question3Style.display = 'none';
        this.question4Style.display = 'block';
     }
     nextQuestion4 = (answer) => {
        this.setState({ question4: answer })
        this.question4Style.display = 'none';
        this.question5Style.display = 'block';
     }
     nextQuestion5 = (answer) => {
        this.setState({ question5: answer })
        this.question5Style.display = 'none';
        this.submitStyle.display = "block"
        this.setState({
            question1: this.q1,
            question2: this.q2,
            question3: this.q3,
            question4: this.q4,
            question5: this.q5,
        });

     }






    
    scoreAnswers = () => {
        let count = 0;      
        let answers = Object.values(this.state)
        for (let i=0; i < answers.length - 1; i++){
            if(answers[i] == "correct"){
                count ++;
            }
        }

        let message = "You scored "+ count + "/5 !";

        if(count == 0){
            message += "  You are truly evil."
        }
        if(count == 1){
            message += "  At least you aren't fully evil, I guess."
        }
        if(count == 2){
            message += "  You aren't that nice of a person, are you?"
        }
        if(count == 3){
            message += "  You aren't a lost cause. That's good."
        }
        if(count == 4){
            message += "  You're almost good!"
        }
        if(count == 5){
            message += "  You're perfect! But then again, I was made from an imperfect human, so my opinion is highly subjective."
        }

        this.setState({score: message});

        this.scoringAreaStyle.display = 'block';

    }




  render() {

    return(
      <View>
          <View style = {styles.header}>
            <Text style = {styles.title}>Are You a Good Person?</Text>
            <Text style = {styles.subTitle}>Answer Honestly To Find Out!</Text>
            <Text style = {this.scoringAreaStyle}>{this.state.score}</Text>

          </View>
        <View style = {styles.cardView}>
            <View style = {this.question1Style}>
                <Card title = 'Question 1'>
                    <Text style = {styles.question}>If an old lady was crossing the street, would you...?</Text>
                    <Picker style = {styles.picker} selectedValue={this.q1}
                        onValueChange= { this.updateAnswer1 }>
                        <Picker.Item label="help her cross" value="correct" />
                        <Picker.Item label="watch, because it's not your problem" value="incorrect" />
                    </Picker>
                    <View style = {styles.button}>
                    <Button title="Next"
                        onPress={ this.nextQuestion1 }
                    />
                    </View>
                </Card>
            </View>

        <View style = {this.question2Style}>
            <Card title = 'Question 2'>
                <Text style = {styles.question}>A kid wants to trade you a Magic The Gathering card. He wants to trade his $50 card for your $20 one. Do you accept the trade?</Text>
                <Picker style = {styles.picker} selectedValue={this.q2}
                    onValueChange= { this.updateAnswer2 }>>
                    <Picker.Item label="yes, take the deal" value="incorrect" />
                    <Picker.Item label="no, but offer him more cards to reach equal value" value="correct" />
                </Picker>
                <View style = {styles.button}>
                <Button title="Next"
                        onPress={ this.nextQuestion2 }
                    />
                    </View>
            </Card>
         </View>

        <View style = {this.question3Style}>
            <Card title = 'Question 3'>
                <Text style = {styles.question}>You've been underappreciated and overworked in you occupation. One day, you find yourself in a situation where you could take valuable equipment and no one would ever know. EVER. Do you take it?</Text>
                <Picker style = {styles.picker} selectedValue={this.q3}
                    onValueChange= { this.updateAnswer3 }>>
                    <Picker.Item label="Sure." value="incorrect" />
                    <Picker.Item label="No way." value="correct" />
                </Picker>
                <View  style = {styles.button}>
                <Button title="Next"
                        onPress={ this.nextQuestion3 }
                    />
                    
                </View>
            </Card>
        </View>

        <View style = {this.question4Style}>
            <Card title = 'Question 4'>
                <Text style = {styles.question}>The last time you saw a turtle crossing a busy street, did you stop to help it out?</Text>
                <Picker style = {styles.picker} selectedValue={this.q4}
                    onValueChange= { this.updateAnswer4 }>>
                    <Picker.Item label="no" value="incorrect" />
                    <Picker.Item label="yes" value="correct" />
                </Picker>
                <View style = {styles.button}>
                <Button title="Next"
                        onPress={ this.nextQuestion4 }
                    />
                    </View>
            </Card>
         </View>

        <View style = {this.question5Style}>
            <Card title = 'Question 5'>
                <Text style = {styles.question}>Sometimes a white lie is the best way to protect someone's feelings.</Text>
                <Picker style = {styles.picker} selectedValue={this.q5}
                    onValueChange= { this.updateAnswer5 }>>
                    <Picker.Item label="disagree" value="correct" />
                    <Picker.Item label="agree" value="incorrect" />
                </Picker>
                <View style = {styles.button}>
                    <Button title="Next"
                            onPress={ this.nextQuestion5 }
                        />
                </View>
            </Card>
        </View>
        <View style = {this.submitStyle}>

          <Card title = 'Click Submit to See Your Result'>
                <View style = {styles.button}>
                    <Button title="Submit"
                            onPress={this.scoreAnswers, this.scoreAnswers }
                        />
                </View>
            </Card>
            </View>
         </View>
      </View>
    );
  }

}

export default Quiz;


const styles = StyleSheet.create({
    header:{
        display: 'block',
        position: 'sticky',
        top: '0',
        backgroundColor: '#cff9ff',
        zIndex: '4',
    },

    title: {
        display: 'block',
        textAlign: 'center',
        fontSize: '2em',
        padding: '10px',
        fontFamily: 'fantasy'
    },

    subTitle: {
        display: 'block',
        textAlign: 'center',
        fontSize: '1.2em',
        padding: '5px',
    },
    
    cardView: {
        width: '50%',
        margin: 'auto',
    },

    question: {
        textAlign: 'center',
        fontSize: '1em',
        fontFamily: 'serif',
    },

    picker: {
        padding: '10px',
    },

    button: {
        display: 'block',
        width: '25%',
        margin: 'auto',
        padding: '15px',

    },


  });