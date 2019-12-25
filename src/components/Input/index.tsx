import * as React from 'react';
import { ReactComponent as CautionIcon } from '../../assets/exclamation-circle-solid.svg';
import './Input.scss';

interface Props {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  label: string;
  value: string;
  error?: boolean;
  errorMsg?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  name,
  error,
  errorMsg,
  value,
  label,
  onChange,
  placeholder,
  onBlur,
  onFocus,
  type,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className={error ? 'error-label' : ''}>
        {label}
      </label>
      <input
        test-dataid="input"
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        className={error ? 'error' : ''}
      />
      {error && (
        <>
          <CautionIcon className="error-icon" />
          <p className="error-text">{errorMsg}</p>
        </>
      )}
    </div>
  );
};

export default Input;
