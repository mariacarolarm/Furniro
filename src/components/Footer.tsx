import { Formik, Field, Form, ErrorMessage } from "formik";
import { footerSchema } from '../validation/validationSchemas';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import linkedIn from '../images/linkedIn.png';

const Footer = () => {
  const initialValues = { email: "" };

  const onSubmit = (values: { email: string }, { resetForm }: { resetForm: () => void }) => {
    console.log("Newsletter Form Submitted", values);
    resetForm();
  };

  return (
    <footer className="w-full mt-12 border-t-2">
      <div className='ml-24 flex h-80 justify-between mr-24 mt-12'>
      <div className='w-64'>
        <h2 className='font-bold text-2xl mb-8'>Furniro.</h2>
        <p className='font-normal text-base text-[#9F9F9F] mb-7'>400 University Drive Suite 200 Coral Gables,
        FL 33134 USA</p>
        <div className='flex -ml-4'>
          <a href="https://www.facebook.com/" target='blank'>
          <img src={facebook} alt="Facebook Icon" />
          </a>
          <a href="https://www.instagram.com/" target='blank'>
          <img src={instagram} alt="Instagram Icon" />
          </a>
          <a href="https://x.com/i/flow/login" target='blank'>
          <img src={twitter} alt="Twitter Icon" />
          </a>
          <a href="https://www.linkedin.com/" target='blank'>
          <img src={linkedIn} alt="LinkedIn Icon" />
          </a>
        </div>
      </div>
      <div>
        <h3 className='text-base font-medium text-[#9F9F9F] mb-8'>Links</h3>
        <ul>
          <li className='text-base font-medium mb-7'>Home</li>
          <li className='text-base font-medium mb-7'>Shop</li>
          <li className='text-base font-medium mb-7'>About</li>
          <li className='text-base font-medium mb-7'>Contact</li>
        </ul>
      </div>
      <div>
        <h3 className='text-base font-medium text-[#9F9F9F] mb-8'>Help</h3>
        <ul>
          <li className='text-base font-medium mb-7'>Payment Options</li>
          <li className='text-base font-medium mb-7'>Returns</li>
          <li className='text-base font-medium mb-7'>Privacy Policies</li>
        </ul>
      </div>
      <div>
        <h3 className='text-base font-medium text-[#9F9F9F] mb-8'>Newsletter</h3>
        <Formik
            initialValues={initialValues}
            validationSchema={footerSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form className="flex items-center">
                <div className="flex flex-col relative">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className="w-52 border-b-2 border-black focus:outline-none mr-3"
                  />
                  <div className="absolute -bottom-5 left-0 text-red-500 text-sm h-5">
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                </div>
                <button
                  type="submit"
                  className="border-b-2 border-black focus:outline-none w-20"
                >
                  SUBSCRIBE
                </button>
              </Form>
            )}
          </Formik>
      </div>
      </div>
      <div className='border-t ml-24 mr-24'>
        <p className='text-base font-normal mt-9 mb-9'>2023 Furniro. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;