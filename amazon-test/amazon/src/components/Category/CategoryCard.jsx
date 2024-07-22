import React from 'react'
import './category.css'
import {Link} from 'react-router-dom'
function CategoryCard({data}) {
  return (
    <div className='category'>
      <Link to={`/category/${data.name}`}>
        <h2>{data.title}</h2>
        <img src={data.imgLink}alt="" />
        <p>shop now</p>
      </Link>
    </div>
  )
}

export default CategoryCard
