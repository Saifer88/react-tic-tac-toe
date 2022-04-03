import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';

type squareProps = {valueN: String, onClick:any};
type squareState = {stateValue: String};

type boardState = {squares: Array<String>, player: String};


class Main extends React.Component {
    render () {
        return (
        <div>shopping list: -..
            <Game></Game>
        </div> 
        );
    }
}

class Square extends React.Component<squareProps, squareState> {

    state: squareState = {
      stateValue: "."
    }

    render() {
      return (      
      <button
        className="square"
        onClick={this.props.onClick}
      >
        {this.props.valueN}
      </button>);
    }
}
  
  class Board extends React.Component<{}, boardState> {

    state: boardState = {
      squares: Array(9).fill(null),
      player: 'X'
    }


    handleClick(i: number){
      console.log("clicked", i);
      this.state.squares[i] = this.state.player;
      if (this.state.player == 'X')
        this.state.player = 'O';
      else
        this.state.player = 'X'
      
      this.setState(this.state);
    } 

    renderSquare(i: number) {
      return (<Square 
        valueN={this.state.squares[i]} 
        onClick={() => this.handleClick(i)} />);
    }
  
    render() {
      const status = 'Next player: ' + this.state.player;
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<React.StrictMode>
    <Main></Main>
    </React.StrictMode>);