import { useEffect, useState } from "react"

interface rick  {
  name: string;
  image: string;
  id: number

}
const App = () => {

  const [characters, setcharacters] = useState<rick[]>([])

  useEffect(() => {

    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setcharacters(data.results);
     
    }

    fetchData();

  }, [])

  return (

  <div>

    <h1>Rick & Morty</h1>

    {
      characters.map( character => {
        return(
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        )
      })
    }
   
  </div>
  )
}

export default App


