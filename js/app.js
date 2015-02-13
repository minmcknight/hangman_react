var Game = function(word) {
	this.word = word;
	this.guessed = {
		right: ['t'],
		wrong: []
	};
	this.partial = function() {
		var partialWord = [];
		for (var i = 0; i < this.word.length; i++) {
			if (this.guessed.right.indexOf(this.word[i]) >= 0) {
				partialWord.push(this.word[i]);
			} else {
				partialWord.push('_');
			}
		}
		return partialWord.join(' ');
	}
}

var HangmanView = React.createClass({
	game: function() {
		return (new Game('test'));
	},
  render: function() {
    return <p>{this.game().partial()}</p>;
  }
});

React.render(<HangmanView/>, document.getElementById('container'));