import React, { useState, useEffect } from 'react';
import Card from './Card/Card';



const Popular = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchPopularAnime = async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/top/anime?filter=bypopularity');
        const data = await response.json();
        setAnimeList(data.data);
      } catch (error) {
        console.error('Error fetching anime:', error);
      }
    };

    fetchPopularAnime();
  }, []);

  return (
    <>
       {animeList.map(anime => (
        <Card
          key={anime.mal_id}
          image={anime.images.jpg.image_url}
          Link={anime.title}
          Title={anime.title}
        />
      ))}
     
      
    </>
  );
};

export default Popular;
