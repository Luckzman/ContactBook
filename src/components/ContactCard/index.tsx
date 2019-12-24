import * as React from 'react';
import { useDispatch } from 'react-redux';
import { likeAllContacts, likeFavoriteContacts } from '../../store/actions';
import { ReactComponent as LikeIcon } from '../../assets/heart-regular.svg';
import { ReactComponent as LikeSolidIcon } from '../../assets/heart-solid.svg';
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

const ContactCard: React.SFC<any> = ({ contact, favorite, displayModal }: any): React.ReactElement<Prop> => {
  const { name, email, phone } = contact.contact;
  const { id: string, isLiked: boolean } = contact;
  const dispatch = useDispatch();

  const footerIcon = (
    Component: React.ReactElement,
    Text: string,
    like: string,
    styleText?: string,
  ): React.ReactElement => {
    return (
      <div className={`footer ${like}`}>
        {Component}
        <p className={`icon-text ${styleText}`}>{Text}</p>
      </div>
    );
  };

  const handleLike = (): void => {
    if (favorite) {
      dispatch(likeFavoriteContacts({ id: string, isLiked: boolean }));
    } else {
      dispatch(likeAllContacts({ id: string, isLiked: boolean }));
      window.location.reload();
    }
  };

  const handleEditContact = (): void => {
    displayModal(contact);
  };

  const likeIcon = contact.isLiked ? (
    <LikeSolidIcon onClick={handleLike} className="icon" />
  ) : (
    <LikeIcon onClick={handleLike} className="icon" />
  );
  const editIcon = <EditIcon className="icon edit-icon" onClick={handleEditContact} />;

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
          {footerIcon(likeIcon, `${!contact.isLiked ? 'Like' : 'Unlike'}`, 'like-icon')}
          {footerIcon(editIcon, 'Edit', 'edit-icon', 'edit')}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
