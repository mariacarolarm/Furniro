import { useNavigate } from "react-router-dom";
import { CardProps } from "./types";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

const share = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/share.png'
const compare = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/compare.png'
const like = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/like.png'

const Card = ({id, image}: CardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(addItem({ id }));
  };

  return (
    <div 
    className="relative group overflow-hidden"
    onClick={handleClick}
    >
      <img src={image} alt="" className="w-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
        <button 
        className="bg-white text-[#B88E2F] text-base font-semibold w-48 h-12 px-4 py-2 mb-4 hover:bg-yellow-100"
        onClick={handleAddToCart}
        >
          Add to cart
        </button>
        <div className="flex justify-center items-center gap-4 text-white text-sm">
        <button className="flex items-center gap-1 hover:underline text-base font-semibold">
        <img src={share} alt="Share Icon" />
          Share
        </button>
        <button className="flex items-center gap-1 hover:underline text-base font-semibold">
        <img src={compare} alt="Compare Icon" />
          Compare
        </button>
        <button className="flex items-center gap-1 hover:underline text-base font-semibold">
        <img src={like} alt="Like Icon" />
          Like
        </button>
      </div>
      </div>
    </div>
  )
}

export default Card;