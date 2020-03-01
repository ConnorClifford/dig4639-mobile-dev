import React from "react";
import Card from "../Card/";
import data from "../../data.json";

class CardList extends React.Component {
  
  constructor(props) {

    super(props);
//set current state as the imported data set
    this.state = {cards: data.cards};

  }

  remove = (event) => {
    //get the title of the card
    let removeTitle = event.target.getAttribute("title");
    //lift state by grabbing this.state of cards
    let localCards = this.state.cards;
    //if the card title is selected by removeTitle, it will not be included in the new filtered card state.
    let newCardState = localCards.filter((card) => {
      return card.title !== removeTitle;
    });
    //set the new state equal to the filtered state
    this.setState({cards: newCardState});

  }

  render() {
    return(
      <div>
          {
              this.state.cards.map((card, index) => {
                return <Card 
                    key={index}
                    title={card.title} 
                    content={card.content}
                    removeData={this.remove} />
            })
          }
      </div>
    );
  }


}

export default CardList;