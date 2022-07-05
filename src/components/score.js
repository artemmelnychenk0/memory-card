import React from 'react';
import '../styles/card.css'

const Score = (props) => {
    const { score, bestScore } = props;
    return (
        <div className="score">
            <p>
                Current Score: {score}
            </p>
            <p>
                Best Score: {bestScore}
            </p>
        </div>
    )
}

export default Score