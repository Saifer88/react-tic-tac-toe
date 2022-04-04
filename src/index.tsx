import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Board from './Board';
import './index.css';
  
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