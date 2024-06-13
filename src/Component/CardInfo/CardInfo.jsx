import React ,{useEffect} from "react";
import styles from './CardInfo.module.css';
import PropTypes from 'prop-types';

 function CardInfo({mangaid="1"})

{
   

    //state
    const [anime, setAnime] = React.useState({})
    
    const [showMore, setShowMore] = React.useState(false)

    //destructure anime
    const {
        title, synopsis, 
        trailer,duration,aired, 
        season, images, rank, 
        score,scored_by, popularity, 
        status, rating, source } = anime

    //get anime based on id
    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/manga/${anime}/full`)
        const data = await response.json()
        
        setAnime(data.data)
    }
    useEffect(() => {
        getAnime(mangaid);
    }, [])
    return(
        <>
        <div className={styles["details"]}>
                <div className={styles["detail"]}>
                    <h2>{title}</h2>
                    <div className="image">
                        <img src={images?.jpg.large_image_url} alt="" />
                    </div>
                    <div className={styles["anime-details"]}>
                        {/* <p><span>Aired:</span><span>{aired?.string}</span></p>
                        <p><span>Rating:</span><span>{rating}</span></p> */}
                        <p><span>Rank:</span><span>{rank}</span></p>
                        <p><span>Score:</span><span>{score}</span></p>
                        <p><span>Scored By:</span><span>{scored_by}</span></p>
                        <p><span>Popularity:</span><span>{popularity}</span></p>
                        <p><span>Status:</span><span>{status}</span></p>
                        {/* <p><span>Source:</span><span>{source}</span></p>
                        <p><span>Season:</span><span>{season}</span></p>
                        <p><span>Duration:</span><span>{duration}</span></p> */}
                    </div>
                </div>
                <p className={styles["description"]}>
                    
                    {showMore ? synopsis : synopsis?.substring(0, 450) + '...'}
                    <br />
                    <button onClick={() => {
                        setShowMore(!showMore)
                    }}>{showMore ? 'Show Less': 'Read More'}</button>
                </p>
            </div>
        </>
    )
}
CardInfo.propTypes ={
   
    mangaid: PropTypes.string,
}
export default CardInfo