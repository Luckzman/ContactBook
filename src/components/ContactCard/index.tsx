import * as React from 'react';
import { ReactComponent as LikeIcon } from '../../assets/heart-regular.svg';
// import { ReactComponent as LikeSolidIcon } from '../../assets/heart-solid.svg';
import { ReactComponent as EditIcon } from '../../assets/user-edit-solid.svg';
import './ContactCard.scss';

interface Contact {
  name: string;
  email: string;
  phone: string;
}
interface Prop {
  contact: Contact;
}

const footerIcon = (Component: React.ReactElement, Text: string, styleText?: string): React.ReactElement => {
  return (
    <div className="footer">
      {Component}
      <p className={`icon-text ${styleText}`}>{Text}</p>
    </div>
  );
};

const likeIcon = <LikeIcon className="icon" />;
const editIcon = <EditIcon className="icon" />;

const ContactCard: React.SFC<any> = ({ contact }: any): React.ReactElement<Prop> => {
  const { name, email, phone } = contact.contact;
  return (
    <div className="card">
      <div className="card-details">
        <h4 className="name">
          <span className="word-break">{name}</span>
        </h4>
        <p className="details">
          <span className="word-break">{email}</span>
        </p>
        <p className="details">
          <span className="word-break">{phone}</span>
        </p>
      </div>
      <div className="card-footer">
        <div className="footer-icon">
          {footerIcon(likeIcon, 'Like')}
          {footerIcon(editIcon, 'Edit', 'edit')}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
