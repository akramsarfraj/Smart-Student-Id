import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className=''>
            <div className='' style={{ display: "flex", gap:10,flexDirection:"column",alignItems: "center", justifyContent: "center", height: "80vh" }}>

                <div class="card" style={{height:"100px",border:"none"}}>
                    <h4 class="card-title">WELCOME TO STUDENT CARD GENERATOR</h4>
                    <p class="card-text">click the button to generate Student ID Card</p>
                </div>

                <Link to='/form'><button style={{ width: "200px", height: "60px" }} className='btn btn-primary'>Create Student ID</button></Link>

            </div>
        </div>
    )
}

export default Home