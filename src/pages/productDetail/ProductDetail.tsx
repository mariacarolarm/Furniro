import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductType } from './types';
import { addItem } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import Spinner from '../../components/Loading';
import arrow from '../../images/arrow.png';
import asgaardSofa from '../../images/asgaardSofa.png';
import stars from '../../images/stars.png';
import face from '../../images/face.png';
import linkedin from '../../images/linkedin.png';
import oldTwitter from '../../images/oldTwitter.png';
import description from '../../images/description.png';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState<ProductType | null>(null);
  const [value, setValue] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:5000/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);  

  if (loading || !product) {
    return (
     <>
      <Spinner />
     </>
    );
  }

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    toast.success('' + product.name + ' added to cart');
    if (product) {
    const productId = Number(product.id);
    dispatch(addItem({ id: productId, quantity: value }));     
    }
  };

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
    <div className='flex bg-[#FAF3EA] p-10 gap-4 mb-10'>
      <div className='flex gap-4 border-r border-black'>
      <p className='text-[#9F9F9F]'>Home</p>
      <img src={arrow} alt="" />
      <p className='text-[#9F9F9F]'>Shop</p>
      <img src={arrow} alt="" className='mr-4' />
      </div>
      <div>
        {product.name}
      </div>
    </div>
    <div className='flex p-20 gap-10'>
      <div className=''>
        <img src={asgaardSofa} alt="images of a gray sofa" />
      </div>
      <div>
        <div className='mb-6'>
        <h1 className='text-4xl font-normal'>{product.name}</h1>
        <h2 className='text-2xl font-medium text-[#9F9F9F]'>Rs. {product.price.toFixed(2)}</h2>
        </div>
        <div className='flex items-center gap-2'>
          <img src={stars} alt="rating stars" className="h-auto w-auto border-r" />
          <p className='text-xs text-[#9F9F9F]'>5 Customer Review</p>
        </div>
        <div className='mt-5 mb-5'>
          <p className='text-sm font-normal'>{product.description}</p>
        </div>
        <div className='mb-5'>
          <p className='text-sm font-normal text-[#9F9F9F] mb-3'>Size</p>
          <button className='w-7 h-7 bg-[#FAF3EA] hover:bg-[#B88E2F] hover:text-white rounded mr-2'>L</button>
          <button className='w-7 h-7 bg-[#FAF3EA] hover:bg-[#B88E2F] hover:text-white rounded mr-2'>XL</button>
          <button className='w-7 h-7 bg-[#FAF3EA] hover:bg-[#B88E2F] hover:text-white rounded mr-2'>XS</button>
        </div>
        <div className='mb-10'>
        <p className='text-sm font-normal text-[#9F9F9F] mb-3'>Color</p>
        <input 
          type="checkbox" 
          className='appearance-none rounded-full bg-[#816DFA] w-6 h-6 mr-3 border border-gray-300 cursor-pointer checked:border-2 checked:border-black'
        />
        <input 
          type="checkbox" 
          className='appearance-none rounded-full bg-black w-6 h-6 mr-3 border border-gray-300 cursor-pointer checked:border-2 checked:border-black'
        />
        <input 
          type="checkbox" 
          className='appearance-none rounded-full bg-[#B88E2F] w-6 h-6 mr-3 border border-gray-300 cursor-pointer checked:border-2 checked:border-black'
        />
        </div>
        <div className='flex gap-5 mb-28'>
        <div className="flex items-center w-28 h-16 border border-[#9F9F9F] rounded-lg">
        <button 
          type="button" 
          className="p-3" 
          onClick={decrement}
        >
          -
        </button>
        <input 
          type="number" 
          className="w-10 text-center focus:outline-none" 
          value={value}
          readOnly
        />
        <button 
          type="button" 
          className="p-3" 
          onClick={increment}
        >
          +
        </button>
        </div>
        <button 
        className='w-56 h-16 border border-black rounded-lg'
        onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        </div>
        <div className='border-t'>
        <table className='w-full mt-10'>
        <tbody>
          <tr>
            <td className='text-base font-normal text-[#9F9F9F]'>SKU</td>
            <td className='text-base font-normal text-[#9F9F9F]'>: SS001</td>
          </tr>
          <tr>
            <td className='text-base font-normal text-[#9F9F9F]'>Category</td>
            <td className='text-base font-normal text-[#9F9F9F]'>: Sofas</td>
          </tr>
          <tr>
            <td className='text-base font-normal text-[#9F9F9F]'>Tags</td>
            <td className='text-base font-normal text-[#9F9F9F]'>: Sofa, Chair, Home, Shop</td>
          </tr>
          <tr>
            <td className='text-base font-normal text-[#9F9F9F]'>Share</td>
            <td className='text-base font-normal text-[#9F9F9F] flex items-center gap-2'>
              : 
              <img src={face} alt="Facebook icon" className='w-6 h-6' />
              <img src={linkedin} alt="LinkedIn icon" className='w-6 h-6' />
              <img src={oldTwitter} alt="Twitter icon" className='w-6 h-6' />
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
    </div>
    <img src={description} alt="Asgaard sofa description" className='-mb-[4rem]' />
    </>
  );
}

export default ProductDetail;