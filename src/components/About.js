import React from 'react'
import blogData from '../data/blog'

export default function About() {
const{image="https://via.placeholder.com/215", about} =blogData

return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  )
}
