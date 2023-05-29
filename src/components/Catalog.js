import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';

function Catalog() {

  const [result, setResult] = useState([]);
  const [sort, setSort] = useState(false);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const API_URL = 'https://finalspaceapi.com/api/v0/character';

  const navToDetails = (id) => {
    navigate(`/detail/${id}`)
  }

  const getData = async () => {
    const { data } = await axios.get(API_URL);
    let data1 = data.splice(0, 30);
    let data2 = data1.sort(() => Math.random() - 0.5);
    setResult(data2);
  }

  useEffect(() => {
    getData();
  }, []);

  const sortCharacters = () => {
    setSort(true);
    setCount(count + 1);
    
    if (count === 1) {
      result.sort(function (a, b) {
        if (a.name.trim() < b.name.trim()) {
          return -1;
        }
        if (a.name.trim() > b.name.trim()) {
          return 1;
        }
  
        setSort(false);
        return 0;
      });
    } else if (count === 2) {
      let randomArray = result.sort(() => Math.random() - 0.5);
      setResult(randomArray);
      setCount(1);
      setSort(false);
    }
  }
  
  
  return (
    <HelmetProvider>
    <Helmet>
      <title>Cartoon Mania</title>
    </Helmet>
      <section>
        <div className='container'>
          <div className='buttons'>
            <button className='sort' onClick={sortCharacters}>{!sort ? 'Sort' : 'Sorted by name'}</button>
            <button className='add'><NavLink to="/new">Add</NavLink></button>
          </div>
          <div className='display'>
            {result.map(character => (
              <div className='post' key={character.id} onClick={() => navToDetails(character.id)}>
                <img src={character.img_url} alt={character.name} key={character.id} />
                <h3>{character.name}</h3>
                <div className='info'>
                  <p>{character.species}</p>
                  <p>|</p>
                  <p>{character.status}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>
    </HelmetProvider>
  )
}

export default Catalog;