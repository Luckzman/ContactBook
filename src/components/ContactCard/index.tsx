import * as React from 'react';
import { ReactComponent as LikeIcon } from '../../assets/heart-regular.svg';
// import { ReactComponent as LikeSolidIcon } from '../../assets/heart-solid.svg';
import { ReactComponent as EditIcon } from '../../assets/user-edit-solid.svg';
import './ContactCard.scss';

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

const ContactCard: React.FC = () => {
  return (
    <div className="card">
      <div className="card-details">
        <h4 className="name">
          <span className="word-break">Mary Ann</span>
        </h4>
        <p className="details">
          <span className="word-break">maryann@gmail.com</span>
        </p>
        <p className="details">
          <span className="word-break">07034222671</span>
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
