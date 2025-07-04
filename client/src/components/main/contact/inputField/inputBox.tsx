import React, { useState } from 'react';
import styled from 'styled-components';

import { InputField, Label } from './styles/inputStyle';
import InputContainer from './containers/inputContainer';
import { useDarkMode } from '../../../../contexts/darkMode';

interface InputFieldProps {
  id: string;
  label: string;
  width?: string;
  value: string;
  onChange: (value: string) => void;
  isSearchBox: boolean;
  isTextArea?: boolean;
}

const InputFieldComponent: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  onChange,
  width,
  isSearchBox,
  isTextArea = false,
}) => {
  const { isDarkMode } = useDarkMode();
  const [hasText, setHasText] = useState(value.length > 0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setHasText(newValue.length > 0);
    onChange(newValue);
  };

  return (
    <InputContainer width={width}>
      {isTextArea ? (
        <>
          <StyledTextArea
            id={id}
            placeholder=" "
            value={value}
            onChange={handleChange}
            $isDarkMode={isDarkMode}
            rows={6}
          />
          <FloatingLabel htmlFor={id} $isDarkMode={isDarkMode}>
            {label}
          </FloatingLabel>
        </>
      ) : (
        <>
          <InputField
            type="text"
            id={id}
            placeholder=" "
            value={value}
            onChange={handleChange}
            $isDarkMode={isDarkMode}
          />
          <Label htmlFor={id} $isDarkMode={isDarkMode}>
            {label}
          </Label>
        </>
      )}
    </InputContainer>
  );
};

export default InputFieldComponent;

export const SearchButton = styled.button`
  position: absolute;
  right: 5%;
  padding: 5px 10px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const SearchIconImg = styled.img`
  width: 1.8rem;
`;

const StyledTextArea = styled.textarea<{ $isDarkMode: boolean }>`
  padding: 1rem 1.3rem;
  width: 100%;
  border-radius: 1.5rem;
  border: ${({ $isDarkMode }) =>
    $isDarkMode ? '0.05rem solid rgb(252, 105, 186)' : '0.09375rem solid rgb(254, 178, 224)'};
  outline: none;
  font-size: 1rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, border 0.3s ease;
  color: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')};
  background-color: transparent;
  resize: vertical;
  min-height: 8rem;
  line-height: 1.6;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    border-color: #ED1E79;
  }
`;

const FloatingLabel = styled.label<{ $isDarkMode: boolean }>`
  position: absolute;
  left: 1.5rem;
  top: 1rem;
  transition: top 0.3s, font-size 0.3s;
  pointer-events: none;
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#919191' : '#595858')};
  font-size: 0.9rem;
  font-weight: 300;

  textarea:focus + &,
  textarea:not(:placeholder-shown) + & {
    top: 0.25rem;
    font-size: 0.7rem;
    color: #ED1E79;
  }
`;