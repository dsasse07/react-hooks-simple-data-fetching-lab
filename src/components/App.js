import React, { useState, useEffect } from 'react'

function App() {
  const [dogUrl, setDogUrl] = useState("")
  useEffect( () => {

    fetch("https://dog.ceo/api/breeds/image/random")
    .then( response => response.json() )
    .then( dogData => setDogUrl(dogData.message))

  }, [] )

  return (
    <div>
      {dogUrl ?
      <img src={dogUrl} alt="A Random Dog"></img> :
      <h3>Loading</h3> }
    </div>
  )
}

export default App
