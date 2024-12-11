import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../redux/store";
import { removeItem, incrementQuantity, decrementQuantity } from "../../redux/cartSlice";
import { Product } from "./types";

const cart = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/cart.png'
const trash = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/delete.png'
const info = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/Frame+161.png'

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const dispatch = useDispatch();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const responses = await Promise.all(
          cartItems.map(item =>
            fetch(`http://localhost:5000/products/${item.id}`)
            .then(res => res.json())
            .then((product) => ({
              ...product,
              id: Number(product.id),
            }))
          )
        );
        
        setProducts(responses);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [cartItems]);

  if (loading) return <p>Loading cart...</p>;

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  const getSubtotal = (price: number, quantity: number) => price * quantity;

  const formatNumber = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    }).format(value);
  };

  return (
    <>
      <img src={cart} alt="" />
      <div className="flex mt-10 justify-center">
      <div className="mt-10 mr-10">
      <div className="grid grid-cols-6 text-center bg-[#FAF3EA] font-bold py-2 px-4">
        <span></span>
        <span className="text-sm font-medium">Product</span>
        <span className="text-sm font-medium">Price</span>
        <span className="text-sm font-medium">Quantity</span>
        <span className="text-sm font-medium">Subtotal</span>
        <span></span>
      </div>
      {cartItems.map((item) => {
        const product = products.find((product) => product.id === item.id);
        if (!product) return null;

    return (
      <div
        key={product.id}
        className="grid grid-cols-6 text-center items-center gap-4 py-4"
      >
        <span></span>
        <span className="text-sm font-normal text-[#9F9F9F]">{product.name}</span>
        <span className="text-sm font-normal text-[#9F9F9F]">Rs. {product.price}</span>
        <div className="flex items-center justify-center w-20 mx-auto border border-[#9F9F9F] rounded-lg">
          <button
            type="button"
            className="px-1 py-1 rounded-l-lg"
            onClick={() => handleDecrement(item.id)}
          >
            -
          </button>
          <input
            type="number"
            className="w-10 text-center focus:outline-none bg-white"
            value={item.quantity}
            readOnly
          />
          <button
            type="button"
            className="px-1 py-1 rounded-r-lg"
            onClick={() => handleIncrement(item.id)}
          >
            +
          </button>
        </div>
        <span className="text-sm font-normal text-[#9F9F9F]">
          Rs. {getSubtotal(product.price, item.quantity)}
        </span>
        <span className="flex justify-center">
          <button
            onClick={() => dispatch(removeItem(item.id))}
          >
            <img src={trash} alt="Remove" className="w-5 h-5" />
          </button>
        </span>
        </div>
          );
        })}
        </div>
        <div className="bg-[#FAF3EA] w-96 h-96 p-10">
        <h2 className="text-center text-3xl font-semibold mb-10">Cart Totals</h2>
        <table className="mb-10 w-full">
        <tbody>
          <tr className="flex justify-between items-center mb-4">
            <td className="text-sm font-medium">Subtotal</td>
            <td className="text-[#9F9F9F] text-sm font-normal">
              Rs. {formatNumber(
            cartItems.reduce((sum, item) => {
              const product = products.find((p) => p.id === item.id);
              return product ? sum + getSubtotal(product.price, item.quantity) : sum;
            }, 0)
            )}
            </td>
          </tr>
          <tr className="flex justify-between items-center">
            <td className="text-sm font-medium">Total</td>
            <td className="text-xl font-medium text-[#B88E2F]">
              Rs. {formatNumber(
            cartItems.reduce((sum, item) => {
              const product = products.find((p) => p.id === item.id);
              return product ? sum + getSubtotal(product.price, item.quantity) : sum;
            }, 0)
            )}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center">
        <button 
        className="w-56 h-16 border border-black rounded-xl"
        onClick={() => window.location.href = '/checkout'}
        >
          Check Out
        </button>
      </div>
      </div>
      </div>
      <img src={info} alt="" className="mt-24 -mb-10" />
    </>
  );
};

export default Cart;
