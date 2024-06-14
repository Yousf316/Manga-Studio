
import  { useState, useEffect } from "react";

import Popular from "../Component/Popular/Popular"
import { useParams } from "react-router-dom";



export default function Home(){
  const { id } = useParams();
    return(
        <>
        
       <Popular isNovel={id}/>
      
        </>
    )
}