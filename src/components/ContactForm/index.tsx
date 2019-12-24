import * as React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import Input from '../Input';
import contactInputValidator from '../../utils/validate';
import './ContactForm.scss';
import { createContact, editContact } from '../../store/actions';

interface Contact {
  name: string;
  email: string;
  phone: string;
}

interface Props {
  closeModal: () => void;
  editContactData?: {
    id: string;
    contact: Contact;
  };
}

const ContactForm: React.FC<Props> = ({ closeModal, editContactData }) => {
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
      if (editContactData && editContactData.contact) {
        const editData = { input, id: editContactData.id };
        dispatch(editContact(editData));
      } else {
        dispatch(createContact(input));
      }
      closeModal();
    }
  };

  const newContactForm = (
    <div className="contact-form">
      <h3>{'New Contact Form'}</h3>
      <form>
        <Input
          name="name"
          error={error.name.length > 0}
          errorMsg={error.name}
          value={input.name}
          label="Name"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          placeholder={'John Doe'}
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
          {'Create Contact'}
        </Button>
      </form>
    </div>
  );

  const editContactForm = (
    <div className="contact-form">
      <h3>{'Edit Contact Form'}</h3>
      <form>
        <Input
          name="name"
          error={error.name.length > 0}
          errorMsg={error.name}
          value={input.name}
          label="Name"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          placeholder={editContactData?.contact.name || ''}
        />
        <Input
          name="email"
          error={error.email.length > 0}
          errorMsg={error.email}
          value={input.email}
          label="Email"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          placeholder={editContactData?.contact.email || ''}
        />
        <Input
          name="phone"
          error={error.phone.length > 0}
          errorMsg={error.phone}
          value={input.phone}
          label="Phone"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          placeholder={editContactData?.contact.phone || ''}
        />
        <Button className="form-btn" type="submit" onClick={handleSubmit}>
          {'Edit Contact'}
        </Button>
      </form>
    </div>
  );

  return editContactData ? editContactForm : newContactForm;
};

export default ContactForm;
