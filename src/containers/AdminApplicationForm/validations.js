import * as yup from "yup";

const validations = yup.object().shape({
  message: yup.string().required("Lütfen mesajınızı giriniz."),
  status: yup.string().required("Lütfen durumunuzu seçiniz."),
});

export default validations;
