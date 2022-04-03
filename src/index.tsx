import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import Square from './Square'

const winstates: 
Array<Array<Number>> =  
  [[0,1,2],// orz
    [3,4,5],
    [6,7,8],
    [0,3,6], // ver
    [1,4,7],
    [2,5,8],
    [0,4,8], // obl
    [2,4,6]
  ]

interface BoardState {squares: Array<String>; player: String; winner: String};
interface BoardProps {};
  
  class Board extends React.Component<BoardProps, BoardState> {

    constructor(props: BoardProps) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        player: 'X',
        winner: null
      }
    }

    evaluateWinner(newState : BoardState) {
      winstates.map((winningSequence: any) => {
        if (newState.squares[winningSequence[0]] != null 
          && newState.squares[winningSequence[0]] == newState.squares[winningSequence[1]] 
          && newState.squares[winningSequence[0]] == newState.squares[winningSequence[2]])
          newState.winner = newState.squares[winningSequence[0]];
      })
    }

    handleClick(i: number){
      let newState: BoardState = {...this.state};
      newState.squares = this.state.squares.slice();

      newState.squares[i] = this.state.player;

      if (this.state.player == 'X')
        newState.player = 'O';
      else
        newState.player = 'X';

      this.evaluateWinner(newState);

      this.setState(newState);
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
          <div>The winner is: {this.state.winner} </div>
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
    <Game></Game>
    </React.StrictMode>);