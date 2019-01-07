
const Header = (props) => (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  )
  
const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      {props.name}
    </span>
    <Counter />
  </div>
)

class Counter extends React.Component{
  
  state = {
    score: 0
  };
  
  incrementScore = () => {
    this.setState( prevState => {
      return {
        score: prevState.score + 1
      };
    });
  }
  
  decrementScore = () => {
    this.setState( prevState => {
      return {
        score: prevState.score - 1
      }
    });
  }
  
  render(){
    return (
      <div className="counter">
        <button onClick={this.decrementScore} className="counter-action decrement"> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button onClick={this.incrementScore} className="counter-action increment"> + </button>
      </div>
    )
  }
}

class App extends React.Component {
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( player => player.id !== id)
      };
    });
  }
  state = {
    players: [
      {
        name: "Scottie",
        id: 1
      },
      {
        name: "Smith",
        id: 2
      },
      {
        name: "Sally",
        id: 3
      },
      {
        name: "Sam",
        id: 4
      }
    ]
  }
  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers={this.state.players.length}
          />
        
        {/*Players list */}
        {this.state.players.map( player =>
          <Player
            name={player.name}
            key={player.id.toString()}
            id={player.id}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
