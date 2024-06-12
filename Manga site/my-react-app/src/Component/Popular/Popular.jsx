import  { useState, useEffect ,useRef} from 'react';
import Card from '../Card/Card';
import Styles from "./Popular.module.css"
const baseUrl ="https://api.jikan.moe/v4";


function CheckbtnPrevese (pagenumber,btnref)
{
  
  pagenumber >1? btnref.current.style.backgroundColor = "":btnref.current.style.backgroundColor = "#bdbdbdb2" ;
}

function Popular  () {
  const [animeList, setAnimeList] = useState([]);
  const [pagenumber, setpagenumber] = useState(1);

  const btnPreves = useRef(null)

  useEffect(() => {
    const fetchPopularAnime = async () => {
      try {
        const response = await fetch(baseUrl+'/top/manga?type=novel&limit=10&page='+pagenumber);
        const data = await response.json();
        setAnimeList(data.data);
      } catch (error) {
        console.error('Error fetching anime:', error);
      }
    };
    CheckbtnPrevese(pagenumber,btnPreves);
    fetchPopularAnime();
  }, [pagenumber]);

 function handleIncrementPageChange()
 {
  setpagenumber(pevpagenumber => pevpagenumber+1);
 }
 function handleDecrementPageChange()
 {
  if(pagenumber>1)
  setpagenumber(pevpagenumber => pevpagenumber-1);

 }
  return (
    <>
    <div>
       {animeList.map(anime => (
        <Card
          key={anime.mal_id}
          image={anime.images.jpg.image_url}
          Link={anime.mal_id}
          Title={anime.title}
        />
      ))}
      <div className={Styles['paging-continer']}>
        <button className={Styles['paging-button']} onClick={handleIncrementPageChange}>التالي</button>
        <button className={Styles['paging-button']} ref={btnPreves} onClick={handleDecrementPageChange}>السابق</button>
      </div>
     </div>
    </>
  );
}

export default Popular;
