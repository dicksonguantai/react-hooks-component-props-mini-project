import React from "react";
import blogData from "../data/blog";

function Header() {
console.log(blogData.name)

  return (
    <header>
    {blogData.name}
    </header>
  )
}


export default Header

