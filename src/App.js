import React from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
import _ from 'lodash';

let message = 'lemongrass'

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    attempt: 1,
    guess: [],
    completed: false,
    fail: false
  }
}

class App extends React.Component {

  state = prepareStateFromWord(message);

  activationHandler = (c) => {
    this.setState({ fail: false })
    let guess = [...this.state.guess, c]
    this.setState({ guess })
    if (guess.length === this.state.chars.length) {
      if (guess.join('').toString() === this.state.word) {
        this.setState({ guess: [], completed: true })
      }
      else if (guess.length === this.state.chars.length && this.state.completed === false) {
        this.setState({ fail: true })
        this.setState({ guess: [], attempt: this.state.attempt + 1 })
      }
    }
  }

  render() {
    return (
      <div>
        <h1 className="head">Word Guessing Game</h1>
        <p className="word">คำใบ้ : เป็นผักชนิดหนึ่งที่เป็นส่วนผสมหลักในเครื่องแกง</p>
        {
          Array.from(this.state.chars).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              fail={this.state.fail}
              activationHandler={this.activationHandler}
            />
          ))
        }
        <h2 className="selected">Selected</h2>
        {
          Array.from(this.state.guess).map((item, index) => (
            <CharacterCard
              value={item}
              key={index}
              activationHandler={this.activationHandler}
            />
          ))
        }
        <div className="attemp">Attemp : {this.state.attempt}</div>
        {
          this.state.completed && <h4 className="complete">Complete</h4>
        }
      </div>
    )
  }
}

export default App;
