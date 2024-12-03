import { CardProps } from "./types";
import share from '../../assets/images/cards/share.png';
import compare from '../../assets/images/cards/compare.png';
import like from '../../assets/images/cards/like.png';


const Card = ({image}: CardProps) => {
  return (
    <div className="relative group overflow-hidden">
      <img src={image} alt="" className="w-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
        <button className="bg-white text-[#B88E2F] text-base font-semibold w-48 h-12 px-4 py-2 mb-4 hover:bg-yellow-100">
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