import { useState } from 'react';
import './AlertErrMsg.css';

const useErrorModal = (ErrorModalComponent) => {
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleError = (error) => {
    if (error && error.response && error.response.status === 400) {
      setShowErrorModal(true);
    }
  };

  const WrappedErrorModal = (props) => (
    <ErrorModalComponent
      show={showErrorModal}
      onClose={() => setShowErrorModal(false)}
      {...props}
    />
  );

  return { handleError, WrappedErrorModal };
};

export default useErrorModal;
