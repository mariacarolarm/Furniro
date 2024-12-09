import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Product } from "./types";
import { Link } from "react-router-dom";
import close from '../../assets/images/cart/close.png'

type CartOverlayProps = {
  handleClose: () => void;
};

const CartOverlay = ({ handleClose }: CartOverlayProps) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responses = await Promise.all(
          cartItems.map((item) =>
            fetch(`http://ec2-3-135-188-215.us-east-2.compute.amazonaws.com:5000/api/products/${item.id}`)
              .then((res) => res.json())
              .then((product) => ({
                ...product,
                id: Number(product.id),
              }))
          )
        );
        setProducts(responses);

        const calculatedTotal = cartItems.reduce((sum, item) => {
          const product = responses.find((product) => product.id === item.id);
          return product ? sum + product.price * item.quantity : sum;
        }, 0);
        setTotal(calculatedTotal);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [cartItems]);

  return (
    <div className="fixed inset-0 flex items-start justify-end bg-black bg-opacity-40">
      <div className="bg-white w-1/4 h-4/6 p-6 shadow-lg relative overflow-y-auto">
        <h3 className="font-semibold text-2xl mb-4">Shopping Cart</h3>
        <div className="space-y-4 border-t">
          {cartItems.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return product ? (
              <div
                key={item.id}
                className="flex items-center justify-between mt-3 pb-4"
              >
                <div className="product-details">
                  <h3 className="font-normal text-sm ">{product.name}</h3>
                  <p className="text-sm">
                     {item.quantity} x 
                  <span className="ml-1 text-[#B88E2F]">Rs. {product.price}</span>
                  </p>
                </div>
              </div>
            ) : null;
          })}
        </div>
        <div className="flex items-center mt-6 mb-6 border-b">
          <h3 className="font-normal text-sm mb-4">Subtotal  <span className="text-[#B88E2F] text-sm ml-10">Rs. {total.toFixed(2)}</span></h3>
        </div>
        <button
          onClick={handleClose}
          className="absolute top-5 right-4 w-8 h-8 flex items-center justify-center hover:bg-gray-300"
        >
          <img src={close} alt="" />
        </button>
        <Link to="/shoppingCart" className="text-base font-medium">
        <button className="w-20 h-7 text-xs border border-black rounded-3xl m-1">Cart</button>
        </Link>
        <Link to="/checkout">
        <button className="w-20 h-7 text-xs border border-black rounded-3xl m-1">Checkout</button>
        </Link>
        <button className="w-20 h-7 text-xs border border-black rounded-3xl m-1">Compare</button>
      </div>
    </div>
  );
};

export default CartOverlay;
