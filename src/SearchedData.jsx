import React from 'react'
 

const SearchedData = (props) => {
  return (
    <div>
        <div className='flex flex-row text-3xl font-bold justify-around shadow-lg'>
          <h2>{props.id}</h2>
          <h2>{props.fname}</h2>
          <h2>{props.cnumber}</h2>
          <h2>{props.age}</h2>
          <h2>{props.salary}</h2>
       </div>
       
    </div>
  )
}

export default SearchedData