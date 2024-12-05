import checkout from '../../assets/images/leads/checkout.png'
import info from '../../assets/images/leads/info.png'

const Checkout = () => {
  return (
    <>
    <img src={checkout} alt="" />
    <div className='flex min-h-screen justify-center w-11/12 gap-16 m-16'>
    <div>
    <h2 className='text-4xl font-semibold mb-8'>Billing details</h2>
    <form action="" className="space-y-4 w-96">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium mb-4">First Name</label>
          <input
            id="first-name"
            type="text"
            className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium mb-4">Last Name</label>
          <input
            id="last-name"
            type="text"
            className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company-name" className="block text-sm font-medium mb-4">Company Name (Optional)</label>
        <input
          id="company-name"
          type="text"
          className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="zip-code" className="block text-sm font-medium mb-4">ZIP code</label>
        <input
          id="zip-code"
          type="text"
          className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
        />
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
        <input
          id="street-address"
          type="text"
          className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="town-city" className="block text-sm font-medium mb-4">Town / City</label>
        <input
          id="town-city"
          type="text"
          className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="province" className="block text-sm font-medium mb-4">Province</label>
        <input
          id="province"
          type="text"
          className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="addon-address" className="block text-sm font-medium mb-4">Add-on address</label>
        <input
          id="addon-address"
          type="text"
          className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-4">Email address</label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Additional information"
          className="w-full px-3 py-4 border border-[#9F9F9F] rounded-lg"
        />
      </div>
      </form>
      </div>
      <div className='w-96'>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-medium">Product</span>
          <span className="text-2xl font-medium">Subtotal</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-normal text-[#9F9F9F]">Leviosa x 1</span>
          <span className="text-sm font-light">700,000</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-normal">Subtotal</span>
          <span className="text-sm font-light">700,000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-normal">Total</span>
          <span className="text-2xl font-bold text-[#B88E2F]">700,000</span>
        </div>
        </div>
        <div className='border-t'>
          <input type="checkbox" className='mt-4 appearance-none rounded-full checked:bg-black w-4 h-4 mr-3 border border-gray-300 cursor-pointer checked:border-2 checked:border-black' /> Direct bank transfer
          <p className='text-sm text-[#9F9F9F] mt-4'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          <input type="checkbox" className='mt-4 appearance-none rounded-full checked:bg-black w-4 h-4 mr-3 border border-gray-300 cursor-pointer checked:border-2 checked:border-black' /> Cash on delivery
          <p className='mt-4 text-sm'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy.</span></p>
        </div>
        <button className='w-80 h-16 border border-black rounded-2xl mt-10'>Place Order</button>
      </div>
    </div>
    <img src={info} alt="" className='mt-24 -mb-12' />
    </>
  );
}

export default Checkout;