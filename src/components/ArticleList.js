import React from 'react'
import blogData from '../data/blog'
import Article from './Article'

export default function ArticleList() {
    const articleArray = blogData.posts.map((post)=>{
        return post
    })
console.log(articleArray)
  return (
    <main>
      <Article prop={articleArray}/>
    </main>
  )
}
