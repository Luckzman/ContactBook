import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import {closeToast} from '../../store/actions';
import './Toast.scss';
// import { closeToast } from '../../store/actions';

export interface Prop {
  msg: string;
  show: boolean;
}

const MessageToast = (props: Prop): React.ReactElement<Prop> => {
  const { show, msg } = props;
  const [hide, setHide] = useState(false);
  // const dispatch = useDispatch();

  // setTimeout(() => {
  //   if(hide) {
  //    setHide(false);
  //   }
  // }, 5000);

  const closeToast = (): void => {
    setHide(true);
    // dispatch(closeToast());
  };
  // console.log(hide, 'hide')
  return (
    <div className={show && !hide ? 'toast' : 'fade'}>
      <div className="toast-header">
        <strong>ContactBook</strong>
        <span className="close" onClick={closeToast}>
          &times;
        </span>
      </div>
      <div className="toast-body">{msg}</div>
    </div>
  );
};

export default MessageToast;
