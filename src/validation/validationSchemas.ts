import * as Yup from "yup";

export const checkoutSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  zipCode: Yup.string()
    .matches(/^\d{8}$/, "ZIP Code must be 8 digits")
    .required("ZIP Code is required"),
  country: Yup.string().required("Country is required"),
  streetAddress: Yup.string().required("Street Address is required"),
  townCity: Yup.string().required("Town/City is required"),
  province: Yup.string().required("Province is required"),
  addonAddress: Yup.string(),
});

export const contactSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string(),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export const footerSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
})
