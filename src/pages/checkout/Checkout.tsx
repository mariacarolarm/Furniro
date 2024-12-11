import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState } from "../../redux/store";
import { Product } from '../shoppingCart/types';
import { useAuth } from '@clerk/clerk-react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { checkoutSchema } from "../../validation/validationSchemas";

const checkout = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/checkout.png'
const info = 'https://furniro-bucket.s3.us-east-2.amazonaws.com/Frame+161.png'

const Checkout = () => {
  const { signOut } = useAuth();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responses = await Promise.all(
          cartItems.map(item =>
            fetch(`http://13.59.220.71:5000/products/${item.id}`)
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
      } 
    };
    fetchProducts();
  }, [cartItems]);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    country: "",
    streetAddress: "",
    townCity: "",
    province: "",
    addonAddress: "",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetchAddress = async (zipCode: string, setFieldValue: any) => {
    if (zipCode.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
        if (!response.ok) throw new Error("Failed to fetch address");
        const data = await response.json();

        setFieldValue("streetAddress", data.logradouro || "");
        setFieldValue("addonAddress", data.complemento || "");
        setFieldValue("townCity", data.localidade || "");
        setFieldValue("province", data.uf || "");
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    }
  };

  const onSubmit = (values: typeof initialValues) => {
    console.log("Form Submitted:", values);
  };

  const total = cartItems.reduce((sum, item) => {
    const product = products.find((product) => product.id === item.id);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);

  const handlePlaceOrder = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  
  return (
    <>
    <img src={checkout} alt="" />
    <div className='flex min-h-screen justify-center w-11/12 gap-16 m-16'>
    <div>
    <h2 className='text-4xl font-semibold mb-8'>Billing details</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={checkoutSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => (
      <Form className="space-y-4 w-96">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium mb-4">First Name</label>
          <Field
            name="firstName"
            type="text"
            className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
          />
          <ErrorMessage name="firstName" component="p" className="text-sm text-red-500" />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium mb-4">Last Name</label>
          <Field
            name="lastName"
            type="text"
            className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
          />
          <ErrorMessage name="lastName" component="p" className="text-sm text-red-500" />
        </div>
      </div>
      <div>
        <label htmlFor="company-name" className="block text-sm font-medium mb-4">Company Name (Optional)</label>
        <Field
          name="companyName"
          type="text"
          className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
        />
        <ErrorMessage name="companyName" component="p" className="text-sm text-red-500" />
      </div>
      <div>
        <label htmlFor="zip-code" className="block text-sm font-medium mb-4">ZIP code</label>
        <Field
              id="zip-code"
              name="zipCode"
              type="text"
              className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = e.target;
                setFieldValue("zipCode", value);
                fetchAddress(value, setFieldValue);
              }}
            />
            <ErrorMessage name="zipCode" component="div" className="text-red-500 text-sm" />
      </div>
      <div>
        <label htmlFor="country" className="block text-sm font-medium mb-4">Country / Region</label>
        <input
          id="country"
          type="text"
          className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="street-address" className="block text-sm font-medium mb-4">Street Address</label>
        <Field
              id="street-address"
              name="streetAddress"
              type="text"
              className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
            />
        <ErrorMessage name="streetAddress" component="div" className="text-red-500 text-sm" />
      </div>
      <div>
        <label htmlFor="town-city" className="block text-sm font-medium mb-4">Town / City</label>
        <Field
              id="town-city"
              name="townCity"
              type="text"
              className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
            />
        <ErrorMessage name="townCity" component="div" className="text-red-500 text-sm" />
      </div>
      <div>
        <label htmlFor="province" className="block text-sm font-medium mb-4">Province</label>
        <Field
              id="province"
              name="province"
              type="text"
              className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
            />
        <ErrorMessage name="province" component="div" className="text-red-500 text-sm" />
      </div>
      <div>
        <label htmlFor="addon-address" className="block text-sm font-medium mb-4">Add-on address</label>
        <Field
              id="addon-address"
              name="addonAddress"
              type="text"
              className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
            />
        <ErrorMessage name="addonAddress" component="div" className="text-red-500 text-sm" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-4">Email address</label>
        <Field
          name="email"
          type="email"
          className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
        />
        <ErrorMessage name="email" component="p" className="text-sm text-red-500" />
      </div>
      <div>
        <input
          type="text"
          placeholder="Additional information"
          className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
        />
      </div>
      </Form>
      )}
      </Formik>
      </div>
      <div className='w-96'>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-medium">Product</span>
          <span className="text-2xl font-medium">Subtotal</span>
        </div>
        {cartItems.map((item) => {
          const product = products.find((product) => product.id === item.id);
          if (!product) return null;

          return (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <span className="text-sm font-normal text-[#9F9F9F]">
                {product.name} x {item.quantity}
              </span>
              <span className="text-sm font-light">Rs. 
                {new Intl.NumberFormat("pt-BR", {
                  minimumFractionDigits: 2, 
                  maximumFractionDigits: 2
                }).format(product.price * item.quantity)}
              </span>
            </div>
          );
        })}
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal">Total</span>
          <span className="text-2xl font-bold text-[#B88E2F]">Rs. 
            {new Intl.NumberFormat("pt-BR", {
              minimumFractionDigits: 2, 
              maximumFractionDigits: 2
            }).format(total)}
          </span>
        </div>
      </div>
        <div className='border-t'>
          <input type="checkbox" className='mt-4 appearance-none rounded-full checked:bg-black w-4 h-4 mr-3 border border-gray-300 cursor-pointer checked:border-2 checked:border-black' /> Direct bank transfer
          <p className='text-sm text-[#9F9F9F] mt-4'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          <input type="checkbox" className='mt-4 appearance-none rounded-full checked:bg-black w-4 h-4 mr-3 border border-gray-300 cursor-pointer checked:border-2 checked:border-black' /> Cash on delivery
          <p className='mt-4 text-sm'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy.</span></p>
        </div>
        <button onClick={handlePlaceOrder} className='w-80 h-16 border border-black rounded-2xl mt-10'>Place Order</button>
      </div>
    </div>
    <img src={info} alt="" className='mt-24 -mb-12' />
    </>
  );
}

export default Checkout;