import React, {useState} from 'react'
import './Wizard.css'
import {Link} from 'react-router-dom'


 const Wizard =(props)=>{
     const [name, setName] = useState('')
     const [address, setAddress] = useState('')
     const [city, setCity] = useState('')
     const [state, setState] = useState('')
     const [zip, setZip] = useState('')
     return(
      <form>  
       <div className='form-box'>
     <legend id='legend'>
    <label id='name1' for='name'>Name:</label>
    <input
    id='name'
    type='text'
    name='name'
    placeholder='name'
    onChange={(e)=>setName(e.target.value)}
    
     />
        <Link id='link' to='/dashboard' ><button id='butt'>Cancel</button></Link>  
    </legend>
     <fieldset id='field'>
     Address:
    <input
    type='text'
    name='name'
    placeholder='name'
    onChange={(e)=>setAddress(e.target.value)}
     />
     City:
    <input
    type='text'
    name='city'
    placeholder='city'
    onChange={(e)=>setCity(e.target.value)}
     />
     State:
     <input
    type='text'
    name='state'
    placeholder='state'
    onChange={(e)=>setState(e.target.value)}
     />
     Zip Code:
     <input
    type='number'
    name='zip'
    placeholder='zip code'
    onChange={(e)=>setZip(e.target.value)}
     /></fieldset>
     
  <button id='complete'>Complete</button>
         </div>

       
         </form>
     )
 }
 export default Wizard