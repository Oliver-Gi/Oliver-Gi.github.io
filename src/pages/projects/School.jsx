import React from 'react'
import { useState } from 'react'

const School = () =>{
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open);
    }

    return(
        <div>
            <button onClick={toggle} className='projectToggle'>
                School Projects -&gt;
            </button>
            {
            open && <div className='projectContents'>
                    <h5>Due to student integrity reasons, I am unable to share the code to any of my school projects.
                        Below is a list of projects I have developed throughout my college education.
                    </h5>
                    <div className='projectList'>
                        {/*ACCOUNT MANAGER */}
                        <div className='projectItem'>
                            <strong>Data Sctructures: Account Manager</strong>
                        </div>

                        <div className='projectItem'>
                            A C console application. Uses various data structures to simulate account creation, deletion, and editing.
                        </div>

                        {/*WORD GUESSING GAME */}
                        <div className='projectItem'>
                            <strong>Windows Programming: Word Guessing Game</strong>
                        </div>

                        <div className='projectItem'>
                            A C# client/server project. Client programmed as a WPF application, Server programmed as a C# console application and Windows Service.
                            Applications communicate via a TCP/IP connection.
                        </div>

                        {/*DATABASE*/}
                        <div className='projectItem'>
                            <strong>Relational Databases: Music Player Database</strong>
                        </div>

                        <div className='projectItem'>
                            A MySQL database that simulates common data that a music player would hold. Programatically accessed through a C console application.
                        </div>
                    </div>
            </div>}
        </div>
    )
}

export default School