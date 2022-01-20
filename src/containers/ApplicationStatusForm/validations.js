import * as yup from "yup";

const validations = yup.object().shape({
  code: yup.string().required(),
});

export default validations;
