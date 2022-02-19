import * as yup from "yup";

const validations = yup.object().shape({
  username: yup.string().required("!kullanıcı adı gerekli"),
  password: yup.string().required("!şifre gerekli"),
});

export default validations;
