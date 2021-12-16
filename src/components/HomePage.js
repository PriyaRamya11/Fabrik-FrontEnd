import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className='container' style={{marginTop : "50px", textAlign : "center"}}>
            <div className='card'>
                <div className='card-body'>
                    <h3>Assignment for 3-d models </h3>
                    <p>This is the project description.</p>
                    <Link className='btn btn-outline-primary' to="/all">Click to view all models</Link>
                </div>                
            </div>
        </div>
    )
}

export default HomePage
