
import styles from "./CardS.module.css"
import PropTypes from 'prop-types'
import Defaultimage from '../../assets/Pictures/one_piece.jpg'

function Card({image = Defaultimage,Title ="اسم المانجا" , Link =""})
{

    return(

        <div className={styles['Card-info']  }>
            <a href={'/Manga-Studio/manga/'+Link} target="_blank" ><img className={styles.image }src={image} alt="Managa Picture" /></a>
            <hr className={styles.title} />
            <h2 className={styles.title}> {Title}</h2>
            <hr />
            {/* <p className={styles.description}> {Description}</p> */}
        </div>
    )

}
Card.propTypes ={
    image: PropTypes.string ,
    Title: PropTypes.string,
    // Description: PropTypes.string,
    Link: PropTypes.number,
}



export default Card