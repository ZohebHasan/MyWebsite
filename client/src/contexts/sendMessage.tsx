import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { validateEmail, validateFullName } from './validator';

export interface SendMessageContextType {
  fullName: string;
  email: string;
  orgName: string;
  service: string;
  message: string;
  sentSuccessfully: boolean;
  sentError: boolean;
  loading: boolean;

  fullNameEmptyError: boolean;
  emailEmptyError: boolean;
  messageEmptyError: boolean;
  errors: {
    fullNameError: boolean;
    emailError: boolean;
  };

  handleFullNameChange: (input: string) => void;
  handleEmailChange: (input: string) => void;
  handleOrgNameChange: (input: string) => void;
  handleServiceNameChange: (input: string) => void;
  handleMessageChange: (input: string) => void;

  handleFullNameError: () => void;
  handleEmailError: () => void;
  handleFullnameEmpty: () => void;
  handleEmailEmpty: () => void;
  handleMessageEmpty: () => void;

  handleSubmit: () => Promise<void>;
  responseData: any | null;
  sendAnother: () => void;
}

export const SendMessageContext = createContext<SendMessageContextType | undefined>(undefined);

export const SendMessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [orgName, setOrgName] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccessfully, setSentSuccessfully] = useState(false);
  const [sentError, setSentError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState<any | null>(null);

  const [errors, setErrors] = useState({
    fullNameError: false,
    emailError: false,
  });

  const [fullNameEmptyError, setFullNameEmptyError] = useState(false);
  const [emailEmptyError, setEmailEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);

  const handleFullNameChange = (input: string) => {
    setFullName(input);
    setErrors(prev => ({ ...prev, fullNameError: false }));
    setFullNameEmptyError(false);
  };

  const handleEmailChange = (input: string) => {
    setEmail(input);
    setErrors(prev => ({ ...prev, emailError: false }));
    setEmailEmptyError(false);
    setMessageEmptyError(false);
  };

  const handleOrgNameChange = (input: string) => {
    setOrgName(input);
  };

  const handleServiceNameChange = (input: string) => {
    setService(input);
  };

  const handleMessageChange = (input: string) => {
    setMessage(input);
    setMessageEmptyError(false);
  };

  const handleFullNameError = () => {
    setErrors(prev => ({ ...prev, fullNameError: !validateFullName(fullName) }));
  };

  const handleEmailError = () => {
    setErrors(prev => ({
      ...prev,
      emailError: !validateEmail(email),
    }));
  };

  const handleFullnameEmpty = () => {
    setFullNameEmptyError(true);
  };

  const handleEmailEmpty = () => {
    setEmailEmptyError(true);
  };

  const handleMessageEmpty = () => {
    setMessageEmptyError(true);
  };



  const handleSubmit = async () => {
    let hasError = false;

    if (fullName.trim() === '') {
      handleFullnameEmpty();
      hasError = true;
    } else if (!validateFullName(fullName)) {
      handleFullNameError();
      hasError = true;
    }

    if (email.trim() === '') {
      handleEmailEmpty();
      hasError = true;
    } else if (!validateEmail(email)) {
      handleEmailError();
      hasError = true;
    }

    if (message.trim() === '') {
      handleMessageEmpty();
      hasError = true;
    }

    if (hasError) return;

    // Stage 1: Start loading
    setLoading(true);
    setSentSuccessfully(false);
    setSentError(false);

    try {
      const response = await axios.post('https://zohebhasan-com-222995411967.us-east1.run.app/sendMessage', {
        // const response = await axios.post('http://localhost:3001/sendMessage', {

        fullName,
        email,
        orgName,
        service,
        message,
      });

      console.log('Message sent successfully:', response.data);

      // Stage 2: Stop loading, mark success
      setLoading(false);
      setSentSuccessfully(true);
      setResponseData(response.data); // <-- Store response
    } catch (error) {
      console.error('Send message error:', error);

      // Stage 2: Stop loading, mark error
      setLoading(false);
      setSentError(true);
      setResponseData(null);
    }
  };

  const sendAnother = () => {
    setFullName('');
    setEmail('');
    setOrgName('');
    setService('');
    setMessage('');
    setSentSuccessfully(false);
    setSentError(false);
    setResponseData(null);
  };

  return (
    <SendMessageContext.Provider
      value={{
        fullName,
        email,
        orgName,
        service,
        message,
        sentSuccessfully,
        sentError,
        loading,
        fullNameEmptyError,
        emailEmptyError,
        messageEmptyError,
        errors,
        handleFullNameChange,
        handleEmailChange,
        handleOrgNameChange,
        handleServiceNameChange,
        handleMessageChange,
        handleFullNameError,
        handleEmailError,
        handleFullnameEmpty,
        handleEmailEmpty,
        handleMessageEmpty,
        handleSubmit,
        responseData,
        sendAnother,
      }}
    >
      {children}
    </SendMessageContext.Provider>
  );
};

export const useSendMessage = (): SendMessageContextType => {
  const context = useContext(SendMessageContext);
  if (context === undefined) {
    throw new Error('useSendMessage must be used within a SendMessageProvider');
  }
  return context;
};