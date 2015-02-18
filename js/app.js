var words = ["purerendermixin","function", "ComponentUpdate", "children", "community","packaging", "browserify", "reactjs", "overflow", "facebook", "instagram", "engineering"]
var currentWord = words[Math.floor(Math.random()*words.length)]

var HangmanGame = React.createClass({
  getInitialState: function() {
    return {
      word: "",
      guess: "",
      right: [],
      wrong: []
    };
  },

  resetGame:function(){
    this.setState({
      word: words[Math.floor(Math.random()*words.length)] ,
      guess:"",
      right: [],
      wrong: []
    });
  },

  makeGuess:function(guess){
    for (var i = 0; i < guess.length; i++) {
      if (~this.state.word.indexOf(guess[i])) {
        this.state.right.push(guess[i]);
      } else {
        this.state.wrong.push(guess[i]);
      }
    }
  },

  getPartialWord:  function() {
    var partialWord = [];
    for (var i = 0; i < this.state.word.length; i++) {
      if (this.state.right.indexOf(this.state.word[i]) >= 0) {
        partialWord.push(this.state.word[i]);
      } else {
        partialWord.push('_');
      }
    }
    return partialWord.join(' ');
  },

  render: function() {
    
  }
});

var redStyle = {color:'black'};

var HangmanView = React.createClass({
  render: function() {
    return <div><p>{HangmanGame.getPartialWord()}</p> <p style={redStyle}>{HangmanGame.state.wrong}</p></div>;
  }
});

var MyInput = React.createClass({
  getInitialState: function() {
    return {
      value: ""
    };
  },
  
  handleChange: function(evt) {
    this.setState({
      value: evt.target.value
    });
    HangmanGame.makeGuess(this.state.value);
	  React.render(<HangmanView/>, document.getElementById('container'));
  },
  
  render: function() {
    return <input id="guess-input" value={this.state.value} onChange={this.handleChange} />;
  }
});

React.render(
  <MyInput />, document.getElementById('guess')
);
