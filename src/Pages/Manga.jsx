import { useParams } from "react-router-dom";
import CardInfo from "../Component/CardInfo/CardInfo";

function Manga() {
    const { id } = useParams();
    
    // Correctly placed console.log
    
    console.log(1);
    return (
        <>

            <CardInfo mangaid={id} />
        </>
    );
}


export default Manga;