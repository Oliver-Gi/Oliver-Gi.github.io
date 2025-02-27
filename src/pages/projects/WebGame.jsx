import React from 'react'
import { useState } from 'react'

const WebGame = () =>{
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open);
    }

    return(
        <div>
            <button onClick={toggle} className='projectToggle'>
                Web Game -&gt;
            </button>
            {
            open && <div className='projectContents'>
                    <div className='projectList'>
                        <div className='projectEntry'> 
                            <strong>Release Date:</strong>{'\t'}To be determined<br/>
                            <strong>Tech Stack:</strong>{'\t'}HTML, CSS, JavaScript<br/><br/>
                            My current personal project! This game will be a remake of a project I did in my 12th grade Python class. The main gameplay will
                            simulate a board game. Each spot on the board game will either spawn an event that affects your stat, or a battle minigame. Different
                            characters will have different abilities in battle, and the chances of each event or battle will depend on the difficulty chosen.
                            The game was originally developed in base HTML/CSS/JavaScript as a way to practice my web development skills, but I intend to transform
                            it into a react app in the near future. <br/>
                            This project is currently on hold while I am busy with school work. I have most of the functionality done, however, I still need to improve
                            the UI/UX and finish implementing the battle mechanics. Keep an eye out for updates starting this Spring!
                        </div>
                    </div>
            </div>}
        </div>
    )
}

export default WebGame