import React from 'react';
import '../styles/card.css'

const Board = (props) => {
    const { array } = props;
    return (
        <div className="pics">
            {array.map(item => <img key={item.id} src={item.src} alt={item.id} />)}
        </div>
    )
}
export default Board