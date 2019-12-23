import * as React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import Input from '../Input';
import contactInputValidator from '../../utils/validate';
import './ContactForm.scss';
import { createContact } from '../../store/actions';

interface Props {
  closeModal: () => void;
}

const ContactForm: React.FC<Props> = ({ closeModal }) => {
  const initialState = { name: '', phone: '', email: '' };

  const [input, setInput] = React.useState(initialState);
  const [error, setError] = React.useState(initialState);
  const dispatch = useDispatch();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleOnBlur = (): void => {
    setError(initialState);
    const errors = contactInputValidator(input);
    const containsError = Object.values(errors).some(x => x !== null && x !== '');
    if (containsError) {
      setError(errors);
    }
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    setError(initialState);
    const errors = contactInputValidator(input);
    const containsError = Object.values(errors).some(x => x !== null && x !== '');
    if (containsError) {
      setError(errors);
    } else {
      dispatch(createContact(input));
      closeModal();
    }
  };

  return (
    <div className="contact-form">
      <h3>New Contact Form</h3>
      <form>
        <Input
          name="name"
          error={error.name.length > 0}
          errorMsg={error.name}
          value={input.name}
          label="Name"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          placeholder="John Doe"
        />
        <Input
          name="email"
          error={error.email.length > 0}
          errorMsg={error.email}
          value={input.email}
          label="Email"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          placeholder="email@email.com"
        />
        <Input
          name="phone"
          error={error.phone.length > 0}
          errorMsg={error.phone}
          value={input.phone}
          label="Phone"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          placeholder="011-223-44556"
        />
        <Button className="form-btn" type="submit" onClick={handleSubmit}>
          Create Contact
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
