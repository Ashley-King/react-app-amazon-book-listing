import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Books = () => (
 <section className='books'>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
 </section>
)

const Book = () => {
 return (
  <article className='book'>
   <CoverImage/>
   <Title/>
   <Author/>
  </article>
 )
}

const CoverImage = () => (
 <img 
  width='200px'
  src="https://m.media-amazon.com/images/I/71N4oeWwYlL._AC_UL436_.jpg" alt="Wonky Donkey Pic"/>
)

const Title = () => (
 <h1 style={{fontSize: "2rem", color: 'red'}}>The Wonky Donkey</h1>
)

const Author = () => (
 <p>by Craig Smith </p>
)

ReactDOM.render(
 <Books/>,
 document.querySelector('#root')
)