import React from "react";
import memesData from "../memesData";


export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: `${memesData.data.memes[0].url}`
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getRandomMeme() {
        const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomIndex].url;
        setMeme({...meme, randomImage: url})
    }

    React.useState()

    return (
        <main>
            <div className={"form"}>
                <input
                    className={"form--input"}
                    placeholder={"Top text"}
                    type={"text"}
                />
                <input
                    className={"form--input"}
                    placeholder={"Bottom text"}
                    type={"text"}
                />
                <button
                    onClick={getRandomMeme}
                    className={"form--button"}>
                    Get a new meme image
                </button>
            </div>
            <img src={meme.randomImage} alt={"meme--image"}/>
        </main>
    );
}