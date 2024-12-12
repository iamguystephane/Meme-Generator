import './App.css'
import React from 'react'
import memeLogo from './images/memelogo-nobg.png'
import './JS/all'
import memeImg from './images/meme1.jpg'
import memeArray from './memeData'


function NavBar(){
  return(
    <nav>
      <img src = {memeLogo} width = "40px" height = "40px" />
      <h2> Meme Generator</h2>
    </nav>
  );
}

function Hero(){

  const [memeURL, setMemeURL] = React.useState(null);
  function randomObject(){
    const memesData = memeArray.data.memes;
    let randomIndex = Math.floor(Math.random() * memesData.length)
    let url = memesData[randomIndex].url
    console.log(url)

    setMemeURL(url)
  }
  
  return(
    <>
      <div className = "input-fields">
        <input type = "text" placeholder = 'top text'/>
        <input type = "text" placeholder = 'bottom text' />
      </div>
      <div className = "generation-button">
        <button type = "button" onClick = {randomObject}> Get a new image</button>
        <i className="fa-solid fa-image"></i>
      </div>
      <div className = "image-section">
        <img src = {memeURL} width = "700px" height = "400px" />
      </div>
    </>
  )
}

export default function(){
  return(
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
      </main>
    </>
  )
}