import React, { useRef, useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Add = (props) => {
    const title =useRef()
    const description =useRef()
    const rating =useRef()
    const posterURL =useRef()
    const [rate,setRate]=useState(0)
  return (
    <div>
        <input ref={title} type="text" />
        <input ref={description} type="text" />
        <input ref={rating} type="text" />
        <input ref={posterURL} type="text" />
      

<button onClick={()=>{props.setMovies([...props.movies , {title:title.current.value,
description:description.current.value,
rating:rating.current.value,
posterURL:posterURL.current.value}])}}>add</button>
    </div>
  )
}

export default Add