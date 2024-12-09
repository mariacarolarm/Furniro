import { useState } from 'react';
import shop from '../../assets/images/leads/shop.png';
import filter from '../../assets/images/shop/filter.png';
import grid from '../../assets/images/shop/grid.png';
import view from '../../assets/images/shop/view.png';
import grifo from '../../assets/images/furniture/Grifo.png';
import leviosa from '../../assets/images/furniture/Leviosa.png';
import lolito from '../../assets/images/furniture/Lolito.png';
import muggo from '../../assets/images/furniture/Muggo.png';
import pingky from '../../assets/images/furniture/Pingky.png';
import potty from '../../assets/images/furniture/Potty.png';
import respira from '../../assets/images/furniture/Respira.png';
import syltherine from '../../assets/images/furniture/Syltherine.png';
import info from '../../assets/images/leads/info.png';
import Card from '../homePage/Card';

const cardImages = [
  { image: grifo, price: 1500000, id: 1 },
  { image: leviosa, price: 2500000, id: 2 },
  { image: lolito, price: 7000000, id: 3 },
  { image: muggo, price: 150000, id: 4 },
  { image: pingky, price: 7000000, id: 5 },
  { image: potty, price: 500000, id: 6 },
  { image: respira, price: 500000, id: 7 },
  { image: syltherine, price: 2500000, id: 8 },
];

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(16);
  const [sortOption, setSortOption] = useState('');

  const sortedCards = [...cardImages].sort((a, b) => {
    if (sortOption === 'price-low-high') return a.price - b.price;
    if (sortOption === 'price-high-low') return b.price - a.price;
    if (sortOption === 'newest') return b.id - a.id;
    return 0;
  });

  const totalPages = Math.ceil(sortedCards.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = sortedCards.slice(startIndex, startIndex + cardsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <img src={shop} alt="" />
      <div className="bg-[#FAF3EA] flex justify-around p-8 -mt-2">
        <div className="flex">
          <button>
            <img src={filter} alt="" />
          </button>
          <img src={grid} alt="" />
          <img src={view} alt="" />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="show">Show</label>
          <select
            id="show"
            value={cardsPerPage}
            onChange={(e) => {
              setCardsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="appearance-none bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
          <label htmlFor="sort">Sort by</label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              setCurrentPage(1);
            }}
            className="appearance-none bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <option value="">None</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 mt-10">
        {currentCards.map((card) => (
          <Card key={card.id} id={card.id} image={card.image} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`px-4 py-2 ${
              currentPage === index + 1
                ? 'bg-[#FAF3EA] hover:bg-[#B88E2F] hover:text-white w-14 h-14 rounded-lg'
                : 'bg-[#FAF3EA] hover:bg-[#B88E2F] hover:text-white w-14 h-14 rounded-lg'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-24 h-14 bg-[#FAF3EA] hover:bg-[#B88E2F] hover:text-white disabled:opacity-50 rounded-lg"
        >
          Next
        </button>
      </div>
      <img src={info} alt="" className="mt-24 -mb-12" />
    </>
  );
};

export default Shop;
