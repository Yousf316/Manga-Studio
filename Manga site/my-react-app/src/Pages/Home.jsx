import Card from "../Component/Card/Card"
import Popular from "../Component/Popular/Popular"
function getImageurl(name)
{
  return new URL(`../assets/Pictures/>${name}`,import.meta.url).href
}

export default function Home(){

    return(
        <>
       <Popular/>
      
        </>
    )
}