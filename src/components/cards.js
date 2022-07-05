import React, { useEffect, useState } from "react"
import images from "../assets/index.js"
import '../styles/card.css'
import Board from "./board.js"
import Score from "./score.js"

const Card = () => {
    const [image, setImage] = useState([
        { src: images.peter, id: 0 },
        { src: images.brian, id: 1 },
        { src: images.chris, id: 2 },
        { src: images.meg, id: 3 },
        { src: images.stewie, id: 4 },
        { src: images.joe, id: 5 },
        { src: images.cleveland, id: 6 },
        { src: images.lois, id: 7 },
        { src: images.peter, id: 8 },
        { src: images.herbert, id: 9 },
        { src: images.ghostface, id: 10 },
        { src: images.vinny, id: 11 }
    ])

    const [currScore, setCurrScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [imgChosen, setImgChosen] = useState([]);
    const [random, setRandom] = useState(false);

    const randomizer = (e) => {
        setImage(arr => arr
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value))

        setImgChosen(arr => [...arr, e.target.alt])
        setRandom(true)
    }

    const updateBestScore = () => {
        if (currScore > bestScore) {
            setBestScore(currScore)
            setImgChosen(arr => arr.slice(arr.length))
            setCurrScore(0)
            setRandom(false)
        }
    }

    useEffect(() => {
        if (random === true) {
            const s = new Set(imgChosen);

            if (imgChosen.length !== s.size) {
                updateBestScore()

            } else {
                setCurrScore(currScore + 1)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imgChosen])

    return (
        <div className="main">
            <div className="header">
                <img src={images.logo} alt='logo'></img>
            </div>
            <div >
                <Score score={currScore} bestScore={bestScore} />
            </div>

            <div onClick={randomizer}>
                <Board array={image} />
            </div>

        </div>
    )
}
export default Card