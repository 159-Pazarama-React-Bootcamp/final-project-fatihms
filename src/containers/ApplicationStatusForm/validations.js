import * as yup from "yup";

const validations = yup.object().shape({
  code: yup.string().required("boş geçilemez!"),
});

export default validations;
