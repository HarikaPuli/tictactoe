
import './style.css'
 export default function Square({value,onSquareClick}) {
    return <button 
            className="button"
            onClick={onSquareClick}
             >
            {value}
            </button>;
  } 