import React from 'react'
import './search.css'

function Search  () {
  return (
   <div className='search' style={{display:'flex',justifyContent:'center'}}>
     <div className="search_box">
              <input type="text" className="input_search" placeholder="Which cource are you looking for?"/>
              <div className="search_btn" ><i className="fas fa-search"></i></div>
            </div>
   </div>
  )
}

export default Search;
