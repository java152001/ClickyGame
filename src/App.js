import React, { Component } from 'react';
import './App.css';
import Pictures from "./components/Images";
import Wrapper from "./components/Wrapper"
import pics from "./pictures.json";

class App extends Component {

  state = {
    pics,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: ""
  };

  clickPicture = id => {
    //Will randomize our pictures on click as well as check to see if the picture has been clicked already.

    const shuffledPictures = this.shufflePictures(pics);
    this.setState({pics: shuffledPictures});

    if (this.state.clickedArray.includes(id)) {
      this.setState({
      score: 0,
      clickedArray: [],
      message: "Game Over!"
      });
    }
    else {
      this.setState({
      clickedArray: this.state.clickedArray.concat([id]),
      score: this.state.score + 1
      });
    }

    //Checks to see if we need to update the top score or not with a new record.
    if(this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score
      });
    }

  }


  //shuffle Pictures function to help randomize the pictures on click.
  //calculates a random position for every picture and swaps them around based on position.
  shufflePictures = (pictureLibrary) => {
    for (let i = pictureLibrary.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [pictureLibrary[i], pictureLibrary[j]] = [pictureLibrary[j], pictureLibrary[i]]
    }
    return pictureLibrary;
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Pokemon Clicking Game!!</h1>
        </header>
        <h3 className="App-intro">
          <strong>Click on an image to earn points, but don't click on any, more than once!</strong> 
          <p className = "score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
          <p className="message"><strong>{this.state.message}</strong></p>
        </h3>
      <Wrapper
         pictures = {this.state.pics.map(picture => (
            <Pictures
              clickPicture={this.clickPicture}
              id={picture.id}
              key={picture.id} // to get rid of unique key prop warning
              name={picture.name}
              image={picture.image}
            />
    ))}
    />

      </div>
    )}
}

export default App;
