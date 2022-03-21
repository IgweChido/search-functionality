import React from 'react'
import SearchItem from './SearchItem'
import '../styles/SearchItem.css'
import {useState, useEffect} from 'react'
import Loading from './Loading';

function SearchPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState(false)

     // eslint-disable-next-line react-hooks/exhaustive-deps
     useEffect( async ()=>{

      
       try{
         const url ="https://randomuser.me/api/?results=15";
            const response = await fetch(url)
            
            setData(await response.json());
            setLoading(false);
       }
       catch(error){
          setError(true);
          setLoading(false);
          // console.log(error)
         

       }
         
            
    },[]);

    const {results} = data;
    // console.log(data);
    // console.log(results);

     

  return (
    <div className='marginp'>
      <div className='home'>
      
        {loading && <Loading/>}
        {error && <div className='loader'>Something went Wrong...</div>}
        {results && <SearchItem  results ={results}/>}
        
        
        
      </div>
        
        
    </div>
  )
}

export default SearchPage