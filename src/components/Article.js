import React from 'react'
import Minutes from './Minutes'

export default function Article({prop}) {
    console.log(prop)
  return (
    <>
    {prop.map(({title,id,preview,date="January 1, 1970",minutes})=>(
        
        <article key = {id}>
        <h3>{title}</h3>
        <small>{date},{minutes}<Minutes minutes ={minutes} /> min read</small>
        <p>{preview}</p>
        </article>

    ))
    }
    </>
  )

}
