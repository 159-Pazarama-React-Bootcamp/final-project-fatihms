import * as yup from "yup";

const validations = yup.object().shape({
  firstName: yup.string().required("boş geçilemez!"),
  lastName: yup.string().required("boş geçilemez!"),
  age: yup
    .number("sadece rakamlardan oluşmalıdır!")
    .required("boş geçilemez!")
    .positive()
    .integer(),
  tc: yup
    .string()
    .required("boş geçilemez!")
    .matches(/^[0-9]{11}$/, "11 haneli bir TC Kimlik No giriniz!"),
  reason: yup.string().required("boş geçilemez!"),
  address: yup.string().required("boş geçilemez!"),
  city: yup.string().required("boş geçilemez!"),
  district: yup.string().required("boş geçilemez!"),
});

export default validations;
