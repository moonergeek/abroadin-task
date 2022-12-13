import * as yup from "yup";

export const loginSchema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16).required(),
  })
  .required();

export const registerSchema = yup.object().shape({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
  number: yup.string(),
});

export const messageSchema = yup
  .object()
  .shape({
    message: yup.string(),
  })
  .required();
