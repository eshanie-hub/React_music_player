import { FaHeart } from "react-icons/fa";

const LikeButton = ({check, handleLike, i, like }) => {
  return(
      <div>
        <FaHeart className="hover:text-pink-800" 
        color={like || check  ? 'red' : '#DFCCE3'} 
        onClick={() => handleLike(i)}
        />
      </div>
    )
  }
  



export default LikeButton