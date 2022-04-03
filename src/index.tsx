import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';



class Main extends React.Component {
    render () {
        return (
        <div>shopping list: -..
            <Game></Game>
        </div> 
        );
    }
}

class Square extends React.Component<{valueN: Number}> {
    logClick() {
      console.log('click');
    }
    render() {
      console.log('props',this.props);
      return (
        <button className="square" onClick={() => this.logClick()}>
          {this.props.valueN}</button>);
    }
}
  
  class Board extends React.Component {
    renderSquare(i: Number) {
      return <Square valueN={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
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
  root.render(<Main></Main>);
  