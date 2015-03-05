var words = ["react", "angular", "backbone", "ember", "jquery", "protoype",
            "scriptaculous", "dojo", "mootools", "three", "rails", "python", "node", "prototype", "dynamic", "functions", "this", "paradigm", "language", "object", "self", "virtual", "facebook", "instagram", "virtual", "compilation", "ecmascript", "zuckerberg", "harvard", "dropout", "application"];
        var Word = React.createClass({
            render: function(){
                 return ( <div id="word" class="guess">{this.getPartialWord()}</div>);
            },
            getPartialWord: function(){
                var partialWord = [];
                for (var i = 0; i < this.props.word.length; i++) {
                    if (this.props.guess.indexOf(this.props.word[i]) >= 0) {
                        partialWord.push(this.props.word[i]);
                    } else {
                        partialWord.push('_');
                    }
                }
                return partialWord.join(' ');
            }
        });
        var Hangman = React.createClass({
            render: function() {
                if (this.props.guesses > 0 ){
                    $('#hungman').load("images/hung"+ this.props.guesses + ".svg");
                }
                return ( <div class="right-col" id="score">Wrong: {this.props.guesses} </div>);
            }
        });
        var WonLost = React.createClass({
            render: function() {
                return(
                    <div>
                    <div id="wins">Wins: {this.props.wins}</div> 
                    <div id="losses">Losses: {this.props.losses}</div>
                    </div>);
            }
        });
        var Game = React.createClass({
                    getInitialState: function() {
                        return {word: words[Math.floor(Math.random()*words.length)],
                                guess: '',
                                wrong: 0,
                                wins: 0,
                                losses: 0};
                    },
                    render: function() {
                        //alert("game: " + this.state.word + " guess: " + this.state.guess);
                        return (
                        <div>
                          <h1>Hangman</h1>
                          <Word word={this.state.word} guess={this.state.guess}/>
                          <input id="guess" type="text" onChange={this.handleChange} />
                          <Hangman guesses={this.state.wrong} />
                          <WonLost wins={this.state.wins} losses={this.state.losses} />
                        </div>
                        );
                    },
                    handleChange: function() {
                        this.setState({ guess: document.getElementById("guess").value,
                                        wrong: this.countWrong()});
                        if (this.checkWin()) {
                            this.setState({wins: this.state.wins+1});
                            alert("you won!");
                            this.reset();
                        } else {
                            if (this.countWrong() > 10) {
                                alert("you lost, the word was " + this.state.word);
                                this.setState({losses: this.state.losses+1});
                                this.reset();
                            }
                        }
                        this.render();
                    },
                    checkWin: function() {
                        for (var i = 0; i < this.state.word.length; i++) {
                          if (document.getElementById("guess").value.indexOf(this.state.word[i]) < 0) {
                              return false;
                          }
                        }
                        return true;
                    },
                    countWrong: function() {
                        var guess = document.getElementById("guess").value;
                        var wrong = 0;
                        for (var i = 0; i < guess.length; i++) {
                            if (this.state.word.indexOf(guess[i]) < 0) {
                                wrong++;
                            }
                        }
                        return wrong;
                    },
                    reset: function() {
                        this.setState( {
                            word: words[Math.floor(Math.random()*words.length)],
                            guess: "",
                            wrong: 0
                        });
                        document.getElementById("guess").value = "";
                        $('#hungman').empty();
                    }

        });
        React.render(<Game />, document.getElementById("game"));