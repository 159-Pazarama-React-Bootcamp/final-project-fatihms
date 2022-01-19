import * as yup from "yup";

const validations = yup.object().shape({
  firstName: yup.string().required(),
});

export default validations;
