import React from "react";


export default function Header() {
    return (
        <header className={"header"}>
            <img src="../images/troll-face.png" alt={"img"}
            className={"header--image"}/>
            <h2 className={"header--title"}>Meme Generator</h2>
            <h4 className={"header--project"}>Project 3</h4>
        </header>
    );
}
