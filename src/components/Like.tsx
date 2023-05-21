import {AiOutlineHeart ,AiFillHeart} from "react-icons/ai";
import { useState } from "react"

const Like = () => {

const [liked,setLiked] = useState(false)
  return (
    <>
    {liked && <AiFillHeart color='red' size={20} onClick={()=>setLiked(false)}/>}
    {!liked &&<AiOutlineHeart size={20} onClick={()=>setLiked(true)}/>}
    </>
    )
}

export default Like