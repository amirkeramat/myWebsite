import * as yup from "yup";

const contactSchema = yup.object().shape({
  first_name: yup
    .string()
    .required("this filed is required"),
  last_name: yup
    .string()
    .required("this filed is required"),
  user_email: yup
    .string()
    .email("email not valid")
    .required("email is required"),
  description: yup
    .string()
    .min(8, "this filed must have at least 8 character")
    .required("this filed is required"),
  checkbox: yup.array().required("this filed is required"),
  radio: yup.string().required("this filed is required"),
  phone_number: yup.string().required("this filed is required"),
});

export default contactSchema
