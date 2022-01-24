import * as yup from "yup";

const validations = yup.object().shape({
  // firstName: yup.string().required(),
  // lastName: yup.string().required(),
  // age: yup.number().required().positive().integer(),
  // tc: yup.string().required(),
  // reason: yup.string().required(),
  // address: yup.string().required(),
  // city: yup.string().required(),
  // district: yup.string().required(),
});

export default validations;
