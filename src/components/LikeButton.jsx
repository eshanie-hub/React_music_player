import { FaHeart } from "react-icons/fa";

const LikeButton = ({check, handleLike, i, isl }) => {
  return(
      <div>
        <FaHeart className="hover:text-pink-800" 
        color={isl || check  ? 'red' : '#DFCCE3'} 
        onClick={() => handleLike(i)}
        />
      </div>
    )
  }
  



export default LikeButton