import React ,{useContext, useState}from 'react'
import '../styles/SearchItem.css'
import {Context} from '../components/Store'
import pic from '../images/chido.jpeg'

function SearchItem({results}) {
  const [state, setState] =useContext(Context);
  const[par, setPar] = useState([]);
  // console.log(results[0])
  
  return (
    <div className='marginp'>
      {results.filter((person)=>{
        if(state.first === "" && state.last ===""){
        
          
          return person;
          
        }else if(person.name.first.toString().toLowerCase().includes(state.toString().toLowerCase()) || person.name.last.toString().toLowerCase().includes(state.toString().toLowerCase())){
         
         console.log(person)
         console.log(state)
         
          return person;
          
          
          
        } 
        
        else {
          console.log(state)
        }
       
        
       
        
      }).map((person)=>(
       
       <div className='profile-box' key={person.email}>
        {/* image */}
        <div className='p-image'>
            <img src={person.picture.medium} alt='profile'></img>
        </div>

        <div className='p-words'>
          {/* Header */}
        <div className='p-header'>
            <p>{person.name.title} {person.name.first} {person.name.last}</p><p> | {person.dob.age}</p>
        </div>

        {/* mail */}
        <div className='p-mail'>
            <p>{person.email}</p>
        </div>

        {/* address details */}
        <div className='p-address'>
            <p>{person.location.street.number},{person.location.street.name},{person.location.city},{person.location.state},{person.location.country},{person.location.postcode}</p>
        </div>
        </div>
        

        {/* Country */}
        <div className='p-country'>
          <p>{person.nat}</p>
        </div>
    </div>
    ))}
    </div>
    
    
  )
}

export default SearchItem