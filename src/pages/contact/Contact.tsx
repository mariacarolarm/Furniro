import contact from '../../assets/images/leads/contact.png'
import location from '../../assets/images/contact/location.png'
import phone from '../../assets/images/contact/phone.png'
import clock from '../../assets/images/contact/clock.png'
import info from '../../assets/images/leads/info.png'
import { checkoutSchema } from '../../validation/validationSchemas'
import { Formik, Field, Form, ErrorMessage } from "formik";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const onSubmit = (values: { name: string; email: string; subject: string; message: string }, { resetForm }: { resetForm: () => void }) => {
    console.log("Form Submitted", values);
    resetForm();
  };

  return (
    <>
    <img src={contact} alt="" />
    <div className="flex items-center justify-center">
    <div className="h-40 w-3/5 mt-16 text-center">
      <h1 className="font-bold text-3xl text-center">Get In Touch With Us</h1>
      <p className='text-[#9F9F9F] text-base'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Will Always Be There To Help You Out. Do Not Hesitate!</p>
    </div>
    </div>
    <div className='flex w-3/5 mx-auto my-8 gap-10 mb-16'>
    <div className="flex flex-col items-start">
      <div className="flex flex-col p-10">
        <div className="flex items-center gap-2">
          <img src={location} alt="location pin" className="w-6 h-6 -ml-8" />
          <h2 className="text-2xl font-medium">Address</h2>
        </div>
        <p className="mt-2 text-base font-normal">
          236 5th SE Avenue, New York NY10000, United States
        </p>
      </div>
      <div className="flex flex-col p-10 items-start">
        <div className="flex items-center gap-2">
          <img src={phone} alt="phone icon" className="w-6 h-6 -ml-8" />
          <h2 className="text-2xl font-medium">Phone</h2>
        </div>
        <p className="mt-2 text-base font-normal">
          Mobile: +(84) 546-6789 <br />
          Hotline: +(84) 456-6789
        </p>
      </div>
      <div className="flex flex-col p-10 items-start">
        <div className="flex items-center gap-2">
          <img src={clock} alt="clock icon" className="w-6 h-6 -ml-8" />
          <h2 className="text-2xl font-medium">Working Time</h2>
        </div>
        <p className="mt-2 text-base font-normal">
          Monday-Friday: 9:00 - 22:00 <br />
          Saturday-Sunday: 9:00 - 21:00
        </p>
      </div>
      </div>
      <div className="w-full max-w-md mx-auto">
      <Formik
            initialValues={initialValues}
            validationSchema={checkoutSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form className="flex flex-col gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-base font-medium mb-3">
                    Your name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Abc"
                    className="mt-1 p-2 h-16 border border-[#9F9F9F] rounded-lg focus:outline-none"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-base font-medium mb-3">
                    Email address
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Abc@def.com"
                    className="mt-1 p-2 h-16 border border-[#9F9F9F] rounded-lg focus:outline-none"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-base font-medium mb-3">
                    Subject
                  </label>
                  <Field
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="This is optional"
                    className="mt-1 p-2 h-16 border border-[#9F9F9F] rounded-lg focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-base font-medium mb-3">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Hi! I'd like to ask about"
                    className="mt-1 p-2 h-28 border border-[#9F9F9F] rounded-lg focus:outline-none"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                </div>
                <button
                  type="submit"
                  className="h-14 w-60 bg-[#B88E2F] text-white font-normal text-base rounded hover:bg-yellow-700 focus:outline-none"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
      </div>
    </div>
    <img src={info} alt="" />
    </>
  );
}

export default Contact;