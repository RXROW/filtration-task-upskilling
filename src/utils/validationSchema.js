import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required."),
  email: Yup.string().email("Invalid email format").required("Email is required."),
  phone: Yup.string()
  .matches(/^01[0-5][0-9]{8}$/, "Phone number must be a valid Egyptian number.")
  .required("Phone number is required."),
});

export default validationSchema;
