import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Cards = ({id,name,age,image,email}) => {
  
  return ( 
    <div>
        <div>{name}</div>
        <div>{age}</div>
        <img src={image} alt="" />
        <div>{email}</div>
        <span><FaChevronLeft/></span>
        <span><FaChevronRight/></span>
        </div>
  )
}

export default Cards