import validator from 'validator';

interface ContactInput {
  name: string;
  email: string;
  phone: string;
}

const contactInputValidator = (input: ContactInput): ContactInput => {
  const error: ContactInput = { name: '', email: '', phone: '' };
  if (validator.isEmpty(input.name)) {
    error.name = 'name is required';
  }
  if (validator.isEmpty(input.email)) {
    error.email = 'email is required';
  } else if (!validator.isEmail(input.email)) {
    error.email = 'input must be an email';
  }
  if (!validator.isNumeric(input.phone) && !validator.isEmpty(input.phone)) {
    error.phone = 'phone must be numeric';
  }
  return error;
};

export default contactInputValidator;
