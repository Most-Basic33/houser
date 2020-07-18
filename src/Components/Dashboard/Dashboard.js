import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import House from '../House/House'


const Dashboard=(props)=>{
    const [houses, setHouse] = useState([])
    const mappedHouses = houses.map((home,index)=>{
        return(
           <House key={index} />
        )
    })
    return(
        <div className='dash-box'>
        <header>Houser</header>
           <Link to='/wizard'><button id='button1'>Add New Property</button></Link> 
            <div className='content'>content</div>
        </div>
    )
}
export default Dashboard