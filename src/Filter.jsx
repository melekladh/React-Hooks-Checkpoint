import React from 'react'

const Filter = (props) => {

  return (

    <div>
      <input  type="text" placeholder='search by title' onChange={(event)=>props.settitleSearch(event.target.value)} />

    </div>
  )
}

export default Filter