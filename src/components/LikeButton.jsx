import { FaHeart } from "react-icons/fa";

const LikeButton = ({song, activeSong, handleDislike, handleLike,like, isLike, i }) => 
 
  // (isLike ?(
  //   <FaHeart
  //     color="red"
  //     onClick={handleLike}
  //   />
  // ) : (
  //   <FaHeart
  //     color="white"
  //     onClick={handleDislike}
  //   />
  // ));
  {
    return(
      <div>
        <FaHeart className="hover:text-pink-800" 
        color={isLike  ? 'red' : 'white'} 
        // onChange={() => setLike((prev) => !prev)}
        onClick={() => handleLike(i)}
        />
      </div>
    )
  }
  



export default LikeButton