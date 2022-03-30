import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg",
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(response => response.json())
            .then(response => {
                setAllMemes(response.data.memes)
            })
        return () => {
            console.log("cleanup")
        }
    }, [])

    function getRandomMeme() {
        const memesArray = allMemes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomIndex].url;
        setMeme({...meme, randomImage: url})
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme({...meme, [name]: value})
    }

    return (
        <main>
            <div className={"form"}>
                <input
                    className={"form--input"}
                    placeholder={"Top text"}
                    type={"text"}
                    name={'topText'}
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    className={"form--input"}
                    placeholder={"Bottom text"}
                    type={"text"}
                    name={'bottomText'}
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    onClick={getRandomMeme}
                    className={"form--button"}>
                    Get a new meme image
                </button>
            </div>
            <div className={"meme"}>
                <img src={meme.randomImage} className={"meme--image"} alt={"img"}/>
                <h2 className={"meme--text top"}>{meme.topText}</h2>
                <h2 className={"meme--text bottom"}>{meme.bottomText}</h2>
            </div>

        </main>
    );
}