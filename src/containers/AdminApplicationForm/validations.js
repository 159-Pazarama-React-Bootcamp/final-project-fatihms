import * as yup from "yup";

const validations = yup.object().shape({
  message: yup.string().required("Lütfen mesajınızı giriniz."),
});

export default validations;
