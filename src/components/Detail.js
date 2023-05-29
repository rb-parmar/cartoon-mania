import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Detail() {
  const {id} = useParams();

  const API_URL = 'https://finalspaceapi.com/api/v0/character';
  const [character, setCharacter] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [alias, setAlias] = useState([]);
  

  useEffect(() => {

    const getData = async () => {
      const { data } = await axios.get(API_URL);
      
      setCharacter(data[id - 1]);

      if (data[id - 1].abilities.length > 0) {
        setAbilities(data[id - 1].abilities);
      } else {
        setAbilities(['None']);
      }

      if (data[id -1].alias.length > 0) {
        setAlias(data[id - 1].alias);
      } else {
        setAlias(['None']);
      }
    }

    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{character.name}</title>
      </Helmet>
      <section className='container charDetails'>
        <img src={character.img_url} alt={character.name} key={character.id} />
        <div>
          <h3>{character.name}</h3>
          <div>
            <p><span>Gender:</span> {character.gender}</p>
            <p><span>Orgin: </span> {character.origin}</p>
            <p><span>Species:</span> {character.species}</p>
            <p><span>Status:</span> {character.status}</p>
          </div>
          <h4>Abilities</h4>
          {abilities.map((ability, index) => (
            <p key={ability}>{index + 1}.  {ability}</p>
          ))}
          <h4>Alias</h4>
          {alias.map((alias, index) => (
            <p key={alias}>{index + 1}.  {alias}</p>
          ))}
        </div>
      </section>
    </HelmetProvider>
  )
}

export default Detail;