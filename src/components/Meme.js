import '../css/style.css'
import memesData from '../Data/memesData'
import React from 'react'

export default function Meme() {

    // function handleMouseHover() {
    //     console.log('handleClick is Clicked');
    // }

    // function handleMouseLeave() {
    //     console.log('Mouse Left');
    // }

    let url
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    function handleClick() {
        const items = memesData.data.memes;
        url = items[Math.floor(Math.random() * items.length)].url;
        console.log("URL :  " + url);

        const newThing = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThing])

        console.log(things);
    }


    const thingElements = things.map(thing =>
        <p> {thing} </p>
    )

    return (
        <div> 
            {/* <p>URL : { url }</p> */}

            <p> { thingElements } </p>
            <div className="form">
                <input className = "form-input" type="text" placeholder='top-text' />
                <input className = "form-input" type="text" placeholder = 'bottom-text' /> 

                <button onClick = {handleClick} className = "form-btn"> Get a New Meme Image </button>
            </div>
        </div>
    )
}